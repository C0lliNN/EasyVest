import React, { useEffect, useState, useReducer } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styles from './ListViewer.scss';
import Axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Question from '../../QuestionsContainer/QuestionViewer/Question/Question';
import InfoBar from '../../QuestionsContainer/QuestionViewer/InfoBar/InfoBar';
import { setupTooltips } from '../../../utility';

const initialState = {
  question: {},
  isLoading: false,
  error: null,
};

const REQUEST_START = 'REQUEST_START';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REQUEST_SUCCESS: {
      return {
        isLoading: false,
        list: action.list,
        error: null,
      };
    }
    case REQUEST_FAIL: {
      return {
        isLoading: false,
        list: null,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

const ListViewer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const match = useRouteMatch();
  const listId = match.params.list;

  const [correct, setCorrect] = useState(false);

  const [isBookmarked, setIsBookmarked] = useState();
  const [isOwner, setIsOwner] = useState();
  const [isAnswered, setIsAnswered] = useState();

  useEffect(() => {
    dispatch({
      type: REQUEST_START,
    });

    Axios.get(`/lists/${listId}`)
      .then((response) => {
        if (response.status === 200) {
          const list = response.data.data;

          const relations = list.relations.map(
            (relation) => relation.pivot.relation
          );

          setIsBookmarked(relations.includes('bookmark'));
          setIsOwner(relations.includes('owner'));
          setIsAnswered(relations.includes('answer'));

          dispatch({
            type: REQUEST_SUCCESS,
            list: list,
          });
          setupTooltips();
        }
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  }, [listId]);

  const correctList = () => {
    setCorrect(true);
  };

  const resetList = () => {
    setCorrect(false);
  };

  const toggleBookmarkHandler = (activate) => {
    dispatch({
      type: REQUEST_START,
    });

    let request = null;

    if (activate) {
      request = Axios.post(`/lists/${listId}/bookmark`);
    } else {
      request = Axios.delete(`/lists/${listId}/unbookmark`);
    }

    request
      .then((response) => {
        if (response.status === 200) {
          setIsBookmarked(activate);
          dispatch({
            type: REQUEST_SUCCESS,
            list: state.list,
          });
          setupTooltips();
        }
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  };

  const editListHandler = () => {
    history.push(`/lists/${listId}/edit`);
  };

  const deleteListHandler = () => {
    dispatch({
      type: REQUEST_START,
    });
    Axios.delete(`/lists/${listId}`)
      .then((response) => {
        if (response.status === 200) {
          history.replace('/lists');
        }
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  };

  let content = null;

  if (state.isLoading) {
    content = <Spinner />;
  } else if (state.error) {
    content = <ErrorMessage message={state.error.message} />;
  } else if (state.list) {
    content = (
      <div>
        <h3>{state.list.title}</h3>
        {state.list.questions.map((question) => {
          return (
            <Question key={question.id} question={question} correct={correct} />
          );
        })}
        <div className={styles.WithMargin}>
          <button
            className={`btn ${styles.BtnGreen} z-depth-0`}
            onClick={correctList}
          >
            <i className="material-icons left">check</i>
            Responder
          </button>
          {correct && (
            <button
              className={`btn ${styles.BtnOrange} z-depth-0`}
              onClick={resetList}
            >
              <i className="material-icons left">refresh</i>
              Restaurar
            </button>
          )}
          <InfoBar
            ownerName={state.list.owner.name}
            ownerId={state.list.owner.id}
            ownerImage={state.list.owner.image}
            subject={state.list.subject.name}
            tags={state.list.tags}
            isOwner={isOwner}
            isAnswered={isAnswered}
            isBookmarked={isBookmarked}
            toggleBookmarkHandler={toggleBookmarkHandler}
            editHandler={editListHandler}
            deleteHandler={deleteListHandler}
            isList={true}
            numberOfQuestions={state.list.questions.length}
          />
        </div>
      </div>
    );
  }

  return <div className={`${styles.ListViewer} container`}>{content}</div>;
};

export default ListViewer;
