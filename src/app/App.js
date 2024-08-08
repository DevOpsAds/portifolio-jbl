import React, { Suspense, lazy } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import { Resume } from "../pages/Resume";
import { Details } from "../pages/Details";
import { PainelPageServiçosScript } from "../pages/PainelPageServiços";


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
                        <Route path="/details/:id" component={Details} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/servicos" exact component={PainelPageServiçosScript} />
                        <Route path="/servicos/scripts/faq" component={PainelPageServiçosScript} />
                        <Route path="/servicos/scripts/inovacao" component={PainelPageServiçosScript} />
                        <Route path="/servicos/scripts/download/exemplo1" component={PainelPageServiçosScript} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};
