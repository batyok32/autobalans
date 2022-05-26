import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import { mainRoutes } from "./routes";

function App() {
    return (
        <Router>
            <Switch>
                {mainRoutes.map((route) => (
                    <Route key={route.path} {...route}>
                        <Layout>{route.comp}</Layout>
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
