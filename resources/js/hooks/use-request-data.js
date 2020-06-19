import { useEffect, useReducer } from 'react';
import Axios from 'axios';
import { setupTooltips } from '../utility';
import { useLocation } from 'react-router-dom';

const initialState = {
  collection: [],
  isLoading: false,
  error: null,
};

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

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
        collection: action.collection,
        error: null,
      };
    }
    case REQUEST_FAIL: {
      return {
        isLoading: false,
        collection: null,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

const useRequestData = (setCurrentPage, setLastPage) => {
  const [state, dispatch] = useReducer(requestReducer, initialState);
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: REQUEST_START,
    });

    const endPoint = location.pathname + location.search;

    Axios.get(endPoint)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: REQUEST_SUCCESS,
            collection: response.data.data,
          });

          setLastPage(response.data.meta.last_page);
          setCurrentPage(response.data.meta.current_page);

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
  }, [Axios, location]);

  return [state, dispatch];
};

export default useRequestData;
