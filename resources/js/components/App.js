import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spinner from "./Spinner";

const Questions = lazy(() => import("./Questions"));
const Lists = lazy(() => import("./Lists"));

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
