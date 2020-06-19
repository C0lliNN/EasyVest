import React, { useState } from 'react';
import useRequestData from '../../../hooks/use-request-data';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import ListItem from './ListItem/ListItem';
import Paginator from '../../UI/Paginator/Paginator';

const ListsCollection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [state, dispatch] = useRequestData(setCurrentPage, setLastPage);

  let content = null;

  console.log(dispatch);

  if (state.isLoading) {
    content = <Spinner />;
  } else if (state.error) {
    content = <ErrorMessage message={state.error.message} />;
  } else {
    if (state.collection.length) {
      content = (
        <div>
          <ul className="collection">
            {state.collection.map((list) => (
              <ListItem key={list.id} list={list} />
            ))}
          </ul>
          <Paginator currentPage={currentPage} lastPage={lastPage} />
        </div>
      );
    } else {
      content = <p>Sem Listas</p>;
    }
  }

  return content;
};

export default ListsCollection;
