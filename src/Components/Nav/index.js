import React from "react";
import './Nav.css'


const Nav = ({href}) => {
    return (
        <div className="nav-container">

        <nav>
            <a className="button-nav" href="#">Home</a>
            <a className="button-nav" href={href}>Add book</a>
        </nav>
        </div>
    )
}

export default Nav;