import React from "react";
// const Home = React.lazy(() => import("./containers/Home"));
import Home from "./containers/Home";
import Start from "./containers/Start";

export const mainRoutes = [
    {
        path: "/start",
        exact: true,
        comp: <Start />,
    },
    {
        path: "/",
        exact: true,
        comp: <Home />,
    },
];
