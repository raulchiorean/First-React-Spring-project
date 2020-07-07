import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({}) =>(

    <nav >
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link id="nav-link" to="/home">
                <li className="fas fa-home"/>
            </Link>
            <Link id="nav-link" to="/about">
                <li  className="fas fa-rocket"/>
            </Link>
            <Link id="nav-link" to="/profile">
                <li className="fas fa-user-circle"/>
            </Link>
            <Link id="nav-link" to="/logout">
                <li className="fas fa-sign-out-alt"/>
            </Link>
        </ul>
    </nav>
);


export  default NavBar