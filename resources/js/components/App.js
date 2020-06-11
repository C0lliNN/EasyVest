import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from './UI/Spinner/Spinner';
import Context, { initialState } from './Context';
import axios from 'axios';
import styles from './App.scss';

axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + document.querySelector('#api_token').value;

const QuestionsContainer = lazy(() =>
  import('./QuestionsContainer/QuestionsContainer')
);
const FullQuestionContainer = lazy(() =>
  import('./QuestionsContainer/FullQuestionContainer/FullQuestionContainer')
);
const Lists = lazy(() => import('./ListsContainer/ListsContainer'));

const App = () => {
  return (
    <main className={styles.App + ' Test'}>
      <Context.Provider value={initialState}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/lists"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Lists />
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
              path="/questions/answered"
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
                  <FullQuestionContainer />
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
        </BrowserRouter>
      </Context.Provider>
    </main>
  );
};

export default App;
