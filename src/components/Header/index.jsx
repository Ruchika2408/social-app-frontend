import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.jpg";
import HeaderBg from "../../images/background.jpg";
import { useUser } from "../../Providers/userProvider";

//css
import "./index.css";

const StyledHeader = ({ handleLogout, name}) => {
  const {isLoggedIn, user} = useUser();
 console.log(name);
    return (
        <header>
            <nav>
                <div className="user">
                <img src={Logo} alt="img-logo" width="48px" height="48px" />
                 <p className="userName">{name}</p>
                </div>
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
            <div className="image-bg">
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