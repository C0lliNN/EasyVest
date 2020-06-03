import PropTypes from "prop-types";
import React, { useEffect, useReducer, useState } from "react";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import FullQuestion from "./FullQuestion";
import { withRouter } from "react-router-dom";
import axios from "axios";

const initialState = {
    question: {},
    isLoading: false,
    error: null
};

const REQUEST_START = "REQUEST_START";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAIL = "REQUEST_FAIL";

const reducer = (state = initialState, action) => {
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
                question: action.question,
                error: null
            };
        }
        case REQUEST_FAIL: {
            return {
                isLoading: false,
                question: null,
                error: action.error
            };
        }

        default:
            return state;
    }
};

const FullQuestionContainer = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isVerifying, setIsVerifying] = useState(false);
    const [selectedAlternative, setSelectedAlternative] = useState();

    const { question } = props.match.params;

    useEffect(() => {
        dispatch({ type: REQUEST_START });

        axios
            .get(`/questions/${question}`)
            .then(response => {
                dispatch({
                    type: REQUEST_SUCCESS,
                    question: response.data.data
                });
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: REQUEST_FAIL,
                    error: error
                });
            });
    }, [question, axios]);

    const verifyAnswerHandler = () => {
        setIsVerifying(true);
    };

    const resetHandler = () => {
        setIsVerifying(false);
    };

    let content = null;

    if (state.isLoading) {
        content = <Spinner />;
    } else if (state.error) {
        content = <ErrorMessage message={state.error.message} />;
    } else {
        content = (
            <div>
                <FullQuestion
                    question={state.question}
                    correct={isVerifying}
                    selectedAlternative={selectedAlternative}
                    setSelectedAlternative={setSelectedAlternative}
                />
                <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                    <button className="btn green" onClick={verifyAnswerHandler}>
                        <i className="material-icons left">check</i>
                        Verificar
                    </button>
                    {isVerifying && (
                        <button
                            className="btn orange"
                            style={{ marginLeft: "5px" }}
                            onClick={resetHandler}
                        >
                            <i className="material-icons left">refresh</i>
                            Restaurar
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return <div className="full-question container">{content}</div>;
};

FullQuestionContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
        replace: PropTypes.func
    }),
    match: PropTypes.shape({
        params: PropTypes.any
    })
};

export default withRouter(FullQuestionContainer);
