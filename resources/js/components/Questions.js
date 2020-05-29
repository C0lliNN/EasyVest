import React from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";

const Questions = props => {
    return (
        <section className="questions container">
            <h3>Questions</h3>

            <div className="row">
                <div className="col m5">
                    <ul className="collection">
                        <li className="collection-item flex">
                            <input
                                type="text"
                                placeholder="Procurar Questões"
                            />
                            <button className="btn btn-primary z-depth-0">
                                <i className="material-icons">search</i>
                            </button>
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
                            to="/questions/bookmarked"
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
                <div className="col m7 card">
                    <Switch>
                        <Route
                            path="/questions/bookmarked"
                            render={() => <p>Favoritos</p>}
                        />
                        <Route
                            path="/questions/answered"
                            render={() => <p>Respondidas</p>}
                        />
                        <Route
                            path="/questions/create"
                            render={() => <p>Nova Questão</p>}
                        />
                        <Route
                            path="/questions"
                            render={() => <p>Minhas Questões</p>}
                        />
                    </Switch>
                </div>
            </div>
        </section>
    );
};

export default Questions;
