import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../images/logo.jpg";
import HeaderBg from "../../images/background.jpg";
import { clearUserData, signout } from "../../store/userSlice";
import "./index.css";

const StyledHeader = ({ name }) => {
  const dispatch = useDispatch();
  const {isLoggedIn, email} = useSelector((state) => state.user);

  const handleLogout = async() => {
    await signout(email);
    dispatch(clearUserData())
  };

  return (
    <header>
      <nav>
        <div className="user">
          <img src={Logo} alt="Logo" width="48px" height="48px" />
          {name && <p className="userName">{name}</p>}
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
          {!isLoggedIn ? (
            <Link to="/login" className="buttons">
              Login
            </Link>
          ) : (
            <button className="buttons" onClick={handleLogout}>
              Log out
            </button>
          )}
          <Link to="/signup" className="buttons">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="image-bg">
        <img src={HeaderBg} alt="Header Background" width="100%" />
        <div className="heading">
          <h1>Social Awareness</h1>
          <div className="floating-text">
            <h2>Join us in making a difference!</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StyledHeader;
