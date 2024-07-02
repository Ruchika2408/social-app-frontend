import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.jpg";
import HeaderBg from "../../images/background.jpg";

//css
import "./index.css";

const StyledHeader = ({ isLoggedIn, handleLogout }) => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="img-logo" width="48px" height="48px" />
                <ul className="menubar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="button">
                    {!isLoggedIn ? <Link to="/login" className="buttons">
                        Login
                    </Link> :
                        <button className="buttons" onClick={handleLogout}>Log out</button>}
                    <Link to="/signup" className="buttons">
                        Sign Up
                    </Link>
                </div>
            </nav>
            <div className="image">
                <img src={HeaderBg} width="100%" alt="header" />
                <div className="heading">
                    <h1> Social Awareness</h1>
                    <div className="floating-text">
                        <h2> Join us in making difference!</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default StyledHeader;