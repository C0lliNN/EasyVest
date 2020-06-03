import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spinner from "./UI/Spinner";

import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + document.querySelector("#api_token").value;

const Questions = lazy(() => import("./Questions/QuestionsContainer"));
const FullQuestion = lazy(() => import("./Questions/FullQuestionContainer"));
const Lists = lazy(() => import("./Lists/ListsContainer"));

const App = () => {
    return (
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
                    path="/questions/:question/edit"
                    render={() => (
                        <Suspense fallback={<Spinner />}>
                            <Questions />
                        </Suspense>
                    )}
                />
                <Route
                    path="/questions/:question"
                    render={() => (
                        <Suspense fallback={<Spinner />}>
                            <FullQuestion />
                        </Suspense>
                    )}
                />
                <Route
                    path="/questions"
                    render={() => (
                        <Suspense fallback={<Spinner />}>
                            <Questions />
                        </Suspense>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
