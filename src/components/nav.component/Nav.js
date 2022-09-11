import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
import logo192 from "./logo192.png";

function Nav() {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar_elements-container">
            <img className="nav-bar-logo" src={logo192}></img>
            <li className="nav-bar-element"> <Link to="/login">Login</Link></li>
            <li className="nav-bar-element"> <Link to="/">Home</Link></li>
            <li className="nav-bar-element"> <Link to="/">Home</Link></li>
        </ul>
      </nav>
    ); 
}

export default Nav;