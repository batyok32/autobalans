import React from "react";

// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/Header";

function Layout(props) {
    return (
        <>
            <Header />
            <div>{props.children}</div>
        </>
    );
}

export default Layout;
