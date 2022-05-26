import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="d-flex px-4 py-3 align-items-center justify-content-between border-bottom">
            <div className="left">
                <div className="logo">
                    <Link className="h2 text-decoration-none text-dark" to="/">
                        Автобаланс
                    </Link>
                </div>
                <div className="links"></div>
            </div>
            <div className="right">
                <Link to="/start" className="btn gray-outline-btn">
                    Начать
                </Link>
            </div>
        </div>
    );
}

export default Header;
