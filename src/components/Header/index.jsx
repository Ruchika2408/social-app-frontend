import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../images/logo.jpg";
import HeaderBg from "../../images/background.jpg";
import { clearUserData} from "../../store/userSlice";
import "./index.css";
import logout from "../../services/logout";

const StyledHeader = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoggedIn, user} = useSelector((state) => state.user);

  const handleLogout = async() => {
    if (isLoggedIn && user.email) {
      try {
        const response = await logout(user.email);
        if (response.code === 'logout') {
          navigate('/login');
          localStorage.removeItem("id")
          dispatch(clearUserData())
        }
      } catch (error) {
        console.error('Logout failed', error);
      }
    }
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
