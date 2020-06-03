import PropTypes from "prop-types";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import { Link, withRouter } from "react-router-dom";

const initialState = {
    questions: [],
    isLoading: false,
    error: null
};

const REQUEST_START = "REQUEST_START";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAIL = "REQUEST_FAIL";

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START: {
            return {
                ...state,
                isLoading: true
            };
        }
        case REQUEST_SUCCESS: {
            return {
                isLoading: false,
                questions: action.questions,
                error: null
            };
        }
        case REQUEST_FAIL: {
            return {
                isLoading: false,
                questions: null,
                error: action.error
            };
        }

        default:
            return state;
    }
};

const MyQuestions = props => {
    const [state, dispatch] = useReducer(requestReducer, initialState);

    useEffect(() => {
        dispatch({
            type: REQUEST_START
        });

        axios
            .get("/questions")
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    dispatch({
                        type: REQUEST_SUCCESS,
                        questions: response.data.data.questions
                    });
                }
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: REQUEST_FAIL,
                    error: error
                });
            });
    }, [axios]);

    const editQuestionHandler = questionId => {
        props.history.push(`/questions/${questionId}/edit`);
    };

    const deleteQuestionHandler = questionId => {
        console.log("QuestionId: " + questionId);
    };

    let content = null;

    if (state.isLoading) {
        content = <Spinner />;
    } else if (state.error) {
        content = <ErrorMessage message={state.error.message} />;
    } else {
        content = (
            <ul className="collection">
                {state.questions.map(question => {
                    const auxDiv = document.createElement("div");
                    auxDiv.innerHTML = question.content;

                    const text = auxDiv.innerText;

                    return (
                        <li key={question.id} className="collection-item">
                            <Link
                                to={`/questions/${question.id}`}
                                className="truncate"
                            >
                                {text}
                            </Link>
                            <p className="subject">
                                <i className="material-icons">book</i>
                                <span>{question.subject}</span>
                            </p>
                            <div>
                                {question.tags && question.tags.length && (
                                    <p className="tags">
                                        <i className="material-icons">
                                            label_outline
                                        </i>
                                        <span>{question.tags}</span>
                                    </p>
                                )}
                                <p className="crud-icons">
                                    <button
                                        onClick={() =>
                                            editQuestionHandler(question.id)
                                        }
                                    >
                                        <i className="material-icons blue-text">
                                            edit
                                        </i>
                                    </button>
                                    <button
                                        onClick={() =>
                                            deleteQuestionHandler(question.id)
                                        }
                                    >
                                        <i className="material-icons red-text">
                                            delete
                                        </i>
                                    </button>
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    return <div className="my-questions">{content}</div>;
};

MyQuestions.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

export default withRouter(MyQuestions);
