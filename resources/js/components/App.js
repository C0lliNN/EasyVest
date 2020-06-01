import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spinner from "./UI/Spinner";

import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + document.querySelector("#api_token").value;

/* eslint-disable */
const Questions = lazy(() => import("./Questions/QuestionsContainer"));
const Lists = lazy(() => import("./Lists/ListsContainer"));
/* eslint-enable */

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
