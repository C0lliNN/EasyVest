import PropTypes from "prop-types";
import React, { Suspense, lazy, useRef } from "react";

import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";
import Spinner from "../UI/Spinner";
import EditQuestion from "./EditQuestion";

const QuestionsList = lazy(() => import("./QuestionsList/QuestionsList"));
const QuestionForm = lazy(() => import("./QuestionForm"));

const QuestionsContainer = (props) => {
    const searchInputRef = useRef();

    const searchHandler = (event) => {
        event.preventDefault();
        const query = searchInputRef.current.value;
        if (query && query.trim()) {
            props.history.push(`/questions?query=${query}`);
        } else {
            props.history.push("/questions");
        }
    };

    return (
        <section className="questions container">
            <Switch>
                <Route
                    path="/questions/:question/edit"
                    render={() => <h3>Editar Questão</h3>}
                />
                <Route
                    path="/questions/bookmarked"
                    render={() => <h3>Favoritos</h3>}
                />
                <Route
                    path="/questions/answered"
                    render={() => <h3>Questões Respondidas</h3>}
                />
                <Route
                    path="/questions/create"
                    render={() => <h3>Nova Questão</h3>}
                />
                <Route
                    path="/questions"
                    render={() => <h3>Minhas Questões</h3>}
                />
            </Switch>

            <div className="row">
                <div className="col s12 m5">
                    <ul className="collection">
                        <li className="collection-item">
                            <form onSubmit={searchHandler} className="flex">
                                <input
                                    type="text"
                                    placeholder="Procurar Questões"
                                    ref={searchInputRef}
                                />
                                <button className="btn btn-primary z-depth-0">
                                    <i className="material-icons">search</i>
                                </button>
                            </form>
                        </li>

                        <NavLink
                            to="/questions"
                            className="collection-item"
                            activeClassName="active"
                            exact
                        >
                            Minhas Questões
                            <span className="secondary-content blue-text">
                                <i className="material-icons">person</i>
                            </span>
                        </NavLink>

                        <NavLink
                            to="/questions/bookmarks"
                            className="collection-item"
                            activeClassName="active"
                            exact
                        >
                            Favoritos
                            <span className="secondary-content yellow-text text-darken-1">
                                <i className="material-icons">star</i>
                            </span>
                        </NavLink>

                        <NavLink
                            to="/questions/answered"
                            className="collection-item"
                            activeClassName="active"
                            exact
                        >
                            Questões Respondidas
                            <span className="secondary-content green-text">
                                <i className="material-icons">check</i>
                            </span>
                        </NavLink>
                    </ul>
                    <div className="my-3">
                        <Link to="/questions/create" className="btn green">
                            Nova Questão
                        </Link>
                    </div>
                </div>
                <div className="col s12 m7 card">
                    <Switch>
                        <Route
                            path="/questions/:question/edit"
                            render={() => (
                                <Suspense fallback={<Spinner />}>
                                    <EditQuestion />
                                </Suspense>
                            )}
                        />

                        <Route
                            path="/questions/create"
                            render={() => (
                                <Suspense fallback={<Spinner />}>
                                    <QuestionForm />
                                </Suspense>
                            )}
                        />
                        <Route
                            path="/questions"
                            render={() => (
                                <Suspense fallback={<Spinner />}>
                                    <QuestionsList />
                                </Suspense>
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </section>
    );
};

QuestionsContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }),
};

export default withRouter(QuestionsContainer);
