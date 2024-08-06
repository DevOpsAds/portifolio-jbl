import React, { Suspense, lazy } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import { Resume } from "../pages/Resume";

import { Details } from "../pages/Details";
import { Faqs } from "../pages/Faqs";

// Carregamento assíncrono do componente PageNotFound
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
                        <Route path="/details/:id" component={Details} /> {/* Corrigido o caminho */}
                        <Route path="/resume" component={Resume} />                        
                        <Route path="/faqs" exact component={Faqs} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};
