import React, { useEffect, useReducer, useState } from 'react';
import styles from './QuestionViewer.scss';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Question from './Question/Question';
import axios from 'axios';
import { setupTooltips } from '../../../utility';
import InfoBar from './InfoBar/InfoBar';
import { useHistory, useRouteMatch } from 'react-router-dom';

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
        question: action.question,
        error: null,
      };
    }
    case REQUEST_FAIL: {
      return {
        isLoading: false,
        question: null,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

const QuestionViewer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState();

  const [isBookmarked, setIsBookmarked] = useState();
  const [isAnswered, setIsAnswered] = useState();
  const [isOwner, setIsOwner] = useState();

  const history = useHistory();
  const match = useRouteMatch();

  const questionId = match.params.question;

  useEffect(() => {
    dispatch({ type: REQUEST_START });

    axios
      .get(`/questions/${questionId}`)
      .then((response) => {
        const question = response.data.data;

        const relations = question.relations.map((user) => user.pivot.relation);

        setIsBookmarked(relations.includes('bookmark'));
        setIsOwner(relations.includes('owner'));
        setIsAnswered(relations.includes('answer'));

        dispatch({
          type: REQUEST_SUCCESS,
          question: question,
        });

        setupTooltips();
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  }, [questionId, axios]);

  const verifyAnswerHandler = () => {
    setIsVerifying(true);
  };

  const resetHandler = () => {
    setIsVerifying(false);
  };

  const toggleBookmarkHandler = (activate) => {
    dispatch({
      type: REQUEST_START,
    });

    let request = null;

    if (activate) {
      request = axios.post(`/questions/${questionId}/bookmark`);
    } else {
      request = axios.delete(`/questions/${questionId}/unbookmark`);
    }

    request
      .then((response) => {
        if (response.status === 200) {
          setIsBookmarked(activate);
          dispatch({
            type: REQUEST_SUCCESS,
            question: state.question,
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

  const editQuestionHandler = () => {
    history.push(`/questions/${questionId}/edit`);
  };

  const deleteQuestionHandler = () => {
    dispatch({
      type: REQUEST_START,
    });
    axios
      .delete(`/questions/${questionId}`)
      .then((response) => {
        if (response.status === 200) {
          history.replace('/questions');
        }
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  };

  const registerAnswerHandler = () => {
    if (!isAnswered) {
      axios.post(`/questions/${questionId}/answer`).then((response) => {
        if (response.status === 200) {
          //eslint-disable-next-line
          M.toast({ html: 'Questão Respondida' });
          setIsAnswered(true);
        }
      });
    }
  };

  let content = null;

  if (state.isLoading) {
    content = <Spinner />;
  } else if (state.error) {
    content = <ErrorMessage message={state.error.message} />;
  } else {
    const validOwner = state.question.owner;

    const ownerName = validOwner ? state.question.owner.name : '';
    const ownerImage = validOwner ? state.question.owner.image : '';
    const ownerId = validOwner ? state.question.owner.id : null;
    const subject = state.question.subject ? state.question.subject.name : '';

    content = (
      <div>
        <Question
          question={state.question}
          correct={isVerifying}
          selectedAlternative={selectedAlternative}
          setSelectedAlternative={setSelectedAlternative}
          registerAnswerHandler={registerAnswerHandler}
        />
        <div className={styles.WithMargin}>
          <button
            className={`btn ${styles.BtnGreen} z-depth-0`}
            onClick={verifyAnswerHandler}
          >
            <i className="material-icons left">check</i>
            Responder
          </button>
          {isVerifying && (
            <button
              className={`btn ${styles.BtnOrange} z-depth-0`}
              onClick={resetHandler}
            >
              <i className="material-icons left">refresh</i>
              Restaurar
            </button>
          )}
        </div>
        <InfoBar
          ownerName={ownerName}
          ownerId={ownerId}
          ownerImage={ownerImage}
          subject={subject}
          tags={state.question.tags}
          isOwner={isOwner}
          isBookmarked={isBookmarked}
          isAnswered={isAnswered}
          deleteHandler={deleteQuestionHandler}
          toggleBookmarkHandler={toggleBookmarkHandler}
          editHandler={editQuestionHandler}
        />
      </div>
    );
  }

  return <div className={`${styles.QuestionViewer} container`}>{content}</div>;
};

export default QuestionViewer;
