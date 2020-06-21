import React, { useState } from 'react';
import useRequestData, {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
} from '../../../hooks/use-request-data';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import ListItem from './ListItem/ListItem';
import Paginator from '../../UI/Paginator/Paginator';
import Axios from 'axios';
import { setupTooltips } from '../../../utility';
import { useHistory } from 'react-router-dom';

const ListsCollection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [state, dispatch] = useRequestData(setCurrentPage, setLastPage);

  const history = useHistory();

  let content = null;

  const editListHandler = (listId) => {
    history.push(`/lists/${listId}/edit`);
  };

  const deleteListHandler = (listId) => {
    dispatch({
      type: REQUEST_START,
    });

    Axios.delete(`/lists/${listId}`)
      .then((response) => {
        if (response.status === 200) {
          const newCollection = state.collection.filter(
            (item) => item.id !== listId
          );
          dispatch({
            type: REQUEST_SUCCESS,
            collection: newCollection,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_FAIL,
          error: error,
        });
      });
  };

  const bookmarkListHandler = (listId) => {
    dispatch({
      type: REQUEST_START,
    });

    Axios.post(`/lists/${listId}/bookmark`)
      .then((response) => {
        if (response.status === 200) {
          const listIndex = state.collection.findIndex(
            (list) => list.id === listId
          );
          const list = {
            ...state.collection[listIndex],
          };

          if (list.relations && Array.isArray(list.relations)) {
            list.relations = list.relations.concat([
              {
                pivot: {
                  relation: 'bookmark',
                },
              },
            ]);
          } else {
            list.relations = [
              {
                pivot: {
                  relation: 'bookmark',
                },
              },
            ];
          }

          const lists = [...state.collection];
          lists[listIndex] = list;

          dispatch({
            type: REQUEST_SUCCESS,
            collection: lists,
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

  const unbookmarkQuestionHandler = (listId) => {
    dispatch({ type: REQUEST_START });

    Axios.delete(`/lists/${listId}/unbookmark`)
      .then((response) => {
        if (response.status === 200) {
          const listIndex = state.collection.findIndex(
            (list) => list.id === listId
          );
          const list = {
            ...state.collection[listIndex],
          };

          if (list.relations) {
            const updatedRelations = list.relations.filter(
              (relation) => relation.pivot.relation !== 'bookmark'
            );

            list.relations = updatedRelations;
          }

          let lists = null;

          if (location.pathname === '/lists/bookmarks') {
            lists = state.collection.filter(
              (listItem) => listItem.id !== list.id
            );
          } else {
            lists = [...state.collection];
            lists[listIndex] = list;
          }

          dispatch({
            type: REQUEST_SUCCESS,
            collection: lists,
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
              <ListItem
                key={list.id}
                list={list}
                editListHandler={editListHandler}
                deleteListHandler={deleteListHandler}
                bookmarkListHandler={bookmarkListHandler}
                unbookmarkListHandler={unbookmarkQuestionHandler}
              />
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
