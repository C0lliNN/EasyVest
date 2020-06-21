import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import ListBuilder from '../ListBuilder/ListBuilder';

const ListEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState();
  const [error, setError] = useState(null);

  const match = useRouteMatch();

  const listId = match.params.list;

  useEffect(() => {
    setIsLoading(true);

    Axios.get(`/lists/${listId}`)
      .then((response) => {
        setList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [Axios, listId]);

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  } else if (list) {
    content = <ListBuilder list={list} />;
  }

  return content;
};

export default ListEdit;
