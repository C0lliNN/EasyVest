import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

import QuestionItem from './QuestionItem/QuestionItem';
import { setupTooltips } from '../../../utility';
import Paginator from '../../UI/Paginator/Paginator';
import useRequestData, {
  REQUEST_START,
  REQUEST_FAIL,
  REQUEST_SUCCESS,
} from '../../../hooks/use-request-data';
import { useHistory, useLocation } from 'react-router-dom';

const QuestionsCollection = () => {
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [state, dispatch] = useRequestData(setCurrentPage, setLastPage);

  const history = useHistory();
  const location = useLocation();

  const editQuestionHandler = (questionId) => {
    history.push(`/questions/${questionId}/edit`);
  };

  const deleteQuestionHandler = (questionId) => {
    dispatch({
      type: REQUEST_START,
    });

    axios
      .delete(`/questions/${questionId}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: REQUEST_SUCCESS,
            collection: state.collection.filter(
              (question) => question.id !== questionId
            ),
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

  const bookmarkQuestionHandler = (questionId) => {
    dispatch({
      type: REQUEST_START,
    });

    axios
      .post(`/questions/${questionId}/bookmark`)
      .then((response) => {
        if (response.status === 200) {
          const questionIndex = state.collection.findIndex(
            (question) => question.id === questionId
          );
          const question = {
            ...state.collection[questionIndex],
          };

          if (question.relations && Array.isArray(question.relations)) {
            question.relations = question.relations.concat([
              {
                pivot: {
                  relation: 'bookmark',
                },
              },
            ]);
          } else {
            question.relations = [
              {
                pivot: {
                  relation: 'bookmark',
                },
              },
            ];
          }

          const questions = [...state.collection];
          questions[questionIndex] = question;

          dispatch({
            type: REQUEST_SUCCESS,
            collection: questions,
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

  const unbookmarkQuestionHandler = (questionId) => {
    dispatch({ type: REQUEST_START });

    axios
      .delete(`/questions/${questionId}/unbookmark`)
      .then((response) => {
        if (response.status === 200) {
          const questionIndex = state.collection.findIndex(
            (question) => question.id === questionId
          );
          const question = {
            ...state.collection[questionIndex],
          };

          if (question.relations) {
            const updatedRelations = question.relations.filter(
              (relation) => relation.pivot.relation !== 'bookmark'
            );

            question.relations = updatedRelations;
          }

          let questions = null;

          if (location.pathname === '/questions/bookmarks') {
            questions = state.collection.filter(
              (questionItem) => questionItem.id !== question.id
            );
          } else {
            questions = [...state.collection];
            questions[questionIndex] = question;
          }

          dispatch({
            type: REQUEST_SUCCESS,
            collection: questions,
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

  const changePageHandler = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);

      const params = new URLSearchParams(location.search);

      let url = location.pathname + '?page=' + page;

      if (params.get('query')) {
        url += '&query=' + params.get('query');
      }

      history.push(url);
    }
  };

  let content = null;

  if (state.isLoading) {
    content = <Spinner />;
  } else if (state.error) {
    content = <ErrorMessage message={state.error.message} />;
  } else {
    if (state.collection.length) {
      content = (
        <div>
          <ul className="collection">
            {state.collection.map((question) => {
              const auxDiv = document.createElement('div');
              auxDiv.innerHTML = question.content;

              const text = auxDiv.innerText;

              return (
                <QuestionItem
                  key={question.id}
                  question={question}
                  text={text}
                  editQuestionHandler={editQuestionHandler}
                  bookmarkQuestionHandler={bookmarkQuestionHandler}
                  unbookmarkQuestionHandler={unbookmarkQuestionHandler}
                  deleteQuestionHandler={deleteQuestionHandler}
                />
              );
            })}
          </ul>
          <Paginator
            lastPage={lastPage}
            currentPage={currentPage}
            changePageHandler={changePageHandler}
          />
        </div>
      );
    } else {
      content = <h6>Sem Questões</h6>;
    }
  }

  return <div className="questions-list">{content}</div>;
};

export default QuestionsCollection;
