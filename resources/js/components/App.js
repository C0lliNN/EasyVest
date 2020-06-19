import React, { lazy, Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from './UI/Spinner/Spinner';
import Context from '../context';
import axios from 'axios';
import styles from './App.scss';
import FixedSpinner from './UI/FixedSpinner/FixedSpinner';

axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + document.querySelector('#api_token').value;

const QuestionsContainer = lazy(() =>
  import('./QuestionsContainer/QuestionsContainer')
);
const QuestionViewer = lazy(() =>
  import('./QuestionsContainer/QuestionViewer/QuestionViewer')
);
const ListsContainer = lazy(() => import('./ListsContainer/ListsContainer'));

const ListViewer = lazy(() => import('./ListsContainer/ListViewer/ListViewer'));

const App = () => {
  const [contextState, setContextState] = useState({
    isFixedSpinnerAppearing: false,
  });

  const changeFixedSpinnerState = (newState) => {
    setContextState((prevState) => {
      return {
        ...prevState,
        isFixedSpinnerAppearing: newState,
      };
    });
  };

  return (
    <Context.Provider value={{ contextState, changeFixedSpinnerState }}>
      <main className={styles.App}>
        {contextState.isFixedSpinnerAppearing && <FixedSpinner />}

        <Switch>
          <Route
            path="/lists/answers"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <ListsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/lists/bookmarks"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <ListsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/lists/create"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <ListsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/lists/:list"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <ListViewer />
              </Suspense>
            )}
          />
          <Route
            path="/lists"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <ListsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/questions/bookmarks"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <QuestionsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/questions/answers"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <QuestionsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/questions/create"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <QuestionsContainer />
              </Suspense>
            )}
          />
          <Route
            path="/questions/:question"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <QuestionViewer />
              </Suspense>
            )}
          />
          <Route
            path="/questions"
            render={() => (
              <Suspense fallback={<Spinner />}>
                <QuestionsContainer />
              </Suspense>
            )}
          />
        </Switch>
      </main>
    </Context.Provider>
  );
};

export default App;
