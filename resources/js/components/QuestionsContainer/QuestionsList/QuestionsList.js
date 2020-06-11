import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { withRouter } from 'react-router-dom';
import QuestionItem from './QuestionItem/QuestionItem';
import { setupTooltips } from '../../utility';
import Paginator from './Paginator/Paginator';

const initialState = {
  questions: [],
  isLoading: false,
  error: null,
};

const REQUEST_START = 'REQUEST_START';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';

const requestReducer = (state = initialState, action) => {
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
        questions: action.questions,
        error: null,
      };
    }
    case REQUEST_FAIL: {
      return {
        isLoading: false,
        questions: null,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

const QuestionsList = (props) => {
  const [state, dispatch] = useReducer(requestReducer, initialState);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { location } = props;

  useEffect(() => {
    dispatch({
      type: REQUEST_START,
    });

    const endPoint = location.pathname + location.search;

    axios
      .get(endPoint)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);

          let questions = response.data.data;

          if (!location.search) {
            questions = questions.filter((question) => {
              const relations = question.relations.map(
                (user) => user.pivot.relation
              );

              if (location.pathname === '/questions') {
                return relations.includes('owner');
              }

              return relations.includes('bookmark');
            });
          }

          dispatch({
            type: REQUEST_SUCCESS,
            questions: questions,
          });

          setLastPage(response.data.last_page);
          setCurrentPage(response.data.current_page);

          setupTooltips();
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  }, [axios, location]);

  const editQuestionHandler = (questionId) => {
    props.history.push(`/questions/${questionId}/edit`);
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
            questions: state.questions.filter(
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
          const questionIndex = state.questions.findIndex(
            (question) => question.id === questionId
          );
          const question = {
            ...state.questions[questionIndex],
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

          const questions = [...state.questions];
          questions[questionIndex] = question;

          dispatch({
            type: REQUEST_SUCCESS,
            questions: questions,
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
          const questionIndex = state.questions.findIndex(
            (question) => question.id === questionId
          );
          const question = {
            ...state.questions[questionIndex],
          };

          if (question.relations) {
            const updatedRelations = question.relations.filter(
              (relation) => relation.pivot.relation !== 'bookmark'
            );

            question.relations = updatedRelations;
          }

          let questions = null;

          if (props.location.pathname === '/questions/bookmarks') {
            questions = state.questions.filter(
              (questionItem) => questionItem.id !== question.id
            );
          } else {
            questions = [...state.questions];
            questions[questionIndex] = question;
          }

          dispatch({
            type: REQUEST_SUCCESS,
            questions: questions,
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
    console.log(page);
    if (page !== currentPage) {
      setCurrentPage(page);

      const params = new URLSearchParams(props.location.search);

      let url = props.location.pathname + '?page=' + page;

      if (params.get('query')) {
        url += '&query=' + params.get('query');
      }

      props.history.push(url);
    }
  };

  let content = null;

  if (state.isLoading) {
    content = <Spinner />;
  } else if (state.error) {
    content = <ErrorMessage message={state.error.message} />;
  } else {
    if (state.questions.length) {
      content = (
        <div>
          <ul className="collection">
            {state.questions.map((question) => {
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

QuestionsList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.any,
    search: PropTypes.any,
  }),
};

export default withRouter(QuestionsList);
