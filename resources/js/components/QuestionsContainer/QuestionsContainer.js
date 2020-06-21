import React, { Suspense, lazy, useRef } from 'react';
import styles from './QuestionsContainer.scss';
import { Route, Switch, useHistory } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';

const QuestionsCollection = lazy(() =>
  import('./QuestionsCollection/QuestionsCollection')
);
const QuestionBuilder = lazy(() => import('./QuestionBuilder/QuestionBuilder'));

const QuestionEdit = lazy(() => import('./QuestionEdit/QuestionEdit'));

const QuestionsContainer = () => {
  const searchInputRef = useRef();
  const history = useHistory();

  const searchHandler = (event) => {
    event.preventDefault();
    const query = searchInputRef.current.value;
    if (query && query.trim()) {
      history.push(`/questions?query=${query}`);
    } else {
      history.push('/questions');
    }
  };

  const links = [
    {
      path: '/questions',
      text: 'Minhas Questões',
      icon: 'person',
      iconColor: 'blue-text',
    },
    {
      path: '/questions/bookmarks',
      text: 'Favoritos',
      icon: 'star',
      iconColor: 'yellow-text text-darken-1',
    },
    {
      path: '/questions/answers',
      text: 'Questões Respondidas',
      icon: 'check',
      iconColor: 'green-text',
    },
  ];

  const createLink = {
    path: '/questions/create',
    text: 'Nova Questão',
  };

  return (
    <section className={`${styles.QuestionsContainer} container`}>
      <Switch>
        <Route
          path="/questions/:question/edit"
          render={() => <h3>Editar Questão</h3>}
        />
        <Route path="/questions/bookmarks" render={() => <h3>Favoritos</h3>} />
        <Route
          path="/questions/answers"
          render={() => <h3>Questões Respondidas</h3>}
        />
        <Route path="/questions/create" render={() => <h3>Nova Questão</h3>} />
        <Route path="/questions" render={() => <h3>Minhas Questões</h3>} />
      </Switch>

      <div className="row">
        <div className="col s12 m5">
          <Sidebar
            links={links}
            createLink={createLink}
            searchHandler={searchHandler}
            searchInputRef={searchInputRef}
            searchPlaceholder="Procurar Questões"
          />
        </div>
        <div className={`col s12 m7 card ${styles.Container}`}>
          <Switch>
            <Route
              path="/questions/:question/edit"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <QuestionEdit />
                </Suspense>
              )}
            />

            <Route
              path="/questions/create"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <QuestionBuilder />
                </Suspense>
              )}
            />
            <Route
              path="/questions"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <QuestionsCollection />
                </Suspense>
              )}
            />
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default QuestionsContainer;
