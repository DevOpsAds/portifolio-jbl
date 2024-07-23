import React, { lazy, Suspense } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import { Detailsto } from "../components/details/Detailsto";

// Lazy loading for the PageNotFound component
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/details/:id" component={Detailsto} />
                        <Route path="/resume" component={Resume} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};
