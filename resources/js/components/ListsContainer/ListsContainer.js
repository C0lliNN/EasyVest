import React, { Suspense, useRef } from 'react';
import styles from './ListsContainer.scss';
import { Route, Switch, useHistory } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';
import ListBuilder from './ListBuilder/ListBuilder';
import ListsCollection from './ListsCollection/ListsCollection';

const ListsContainer = () => {
  const searchInputRef = useRef();
  const history = useHistory();

  const searchHandler = (event) => {
    event.preventDefault();
    const query = searchInputRef.current.value;
    if (query && query.trim()) {
      history.push(`/lists?query=${query}`);
    } else {
      history.push('/lists');
    }
  };

  const links = [
    {
      path: '/lists',
      text: 'Minhas Listas',
      icon: 'person',
      iconColor: 'blue-text',
    },
    {
      path: '/lists/bookmarks',
      text: 'Favoritos',
      icon: 'star',
      iconColor: 'yellow-text text-darken-1',
    },
    {
      path: '/lists/answers',
      text: 'Listas Respondidas',
      icon: 'check',
      iconColor: 'green-text',
    },
  ];

  const createLink = {
    path: '/lists/create',
    text: 'Nova Lista',
  };

  return (
    <section className={`${styles.ListsContainer} container`}>
      <Switch>
        <Route
          path="/lists/:question/edit"
          render={() => <h3>Editar Lista</h3>}
        />
        <Route path="/lists/bookmarked" render={() => <h3>Favoritos</h3>} />
        <Route
          path="/lists/answered"
          render={() => <h3>Listas Respondidas</h3>}
        />
        <Route path="/lists/create" render={() => <h3>Nova Lista</h3>} />
        <Route path="/lists" render={() => <h3>Minhas Listas</h3>} />
      </Switch>

      <div className="row">
        <div className="col s12 m5">
          <Sidebar
            links={links}
            createLink={createLink}
            searchHandler={searchHandler}
            searchInputRef={searchInputRef}
            searchPlaceholder="Procurar Listas"
          />
        </div>
        <div className={`col s12 m7 card ${styles.Container}`}>
          <Switch>
            <Route
              path="/lists/:question/edit"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <h5>Edit List</h5>
                </Suspense>
              )}
            />

            <Route
              path="/lists/create"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <ListBuilder />
                </Suspense>
              )}
            />
            <Route
              path="/lists"
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <ListsCollection />
                </Suspense>
              )}
            />
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default ListsContainer;
