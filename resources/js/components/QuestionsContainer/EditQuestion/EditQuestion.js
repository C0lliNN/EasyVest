import React, { useEffect, useState } from 'react';
import QuestionForm from '../QuestionForm/QuestionForm';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { withRouter } from 'react-router-dom';

const EditQuestion = (props) => {
  const [isLoading, setIsLoading] = useState();
  const [question, setQuestion] = useState();
  const [error, setError] = useState();

  const questionId = props.match.params.question;

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`questions/${questionId}`)
      .then((response) => {
        setQuestion(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [axios, questionId]);

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (question) {
    content = <QuestionForm question={question} />;
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  }

  return content;
};

export default withRouter(EditQuestion);
