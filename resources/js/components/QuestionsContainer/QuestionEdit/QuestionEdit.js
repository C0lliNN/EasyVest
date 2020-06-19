import React, { useEffect, useState } from 'react';
import QuestionBuilder from '../QuestionBuilder/QuestionBuilder';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import { useRouteMatch } from 'react-router-dom';

const QuestionEdit = () => {
  const [isLoading, setIsLoading] = useState();
  const [question, setQuestion] = useState();
  const [error, setError] = useState();

  const match = useRouteMatch();

  const questionId = match.params.question;

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
    content = <QuestionBuilder question={question} />;
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  }

  return content;
};

export default QuestionEdit;
