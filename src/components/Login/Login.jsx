import {  useDispatch } from 'react-redux';
import { setUserData } from '../../store/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginImg from '../../images/login.jpg';
import './login.css';
import login from '../../services/login';
import findUser from '../../services/getUser';

const Login = () => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const submitLogin = async (e) => {
    e.preventDefault();
    if (currentEmail && currentPassword) {
      const loginResponse = await login(currentEmail, currentPassword);

      if (loginResponse.code === "loggedIn") {
        localStorage.setItem('id', currentEmail);
        const userData = await findUser(currentEmail);
        if (userData.code === 'userExist') {
          dispatch(setUserData(userData.user));
        } else {
          throw new Error('User not found');
        }
        navigate('/');
        setError('');
      } else if (loginResponse.code === 'incorrectPassword') {
        setError('Please provide a valid password.');
      } else if (loginResponse.code === 'userNotFound') {
        setError('User not found.');
      } else {
        setError('User already logged in.');
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'email') {
      setCurrentEmail(value);
    }
    if (id === 'password') {
      setCurrentPassword(value);
    }
  };

  return (
    <div className="loginContainer">
      <img className="image" src={LoginImg} alt="login-bg" />
      <div className="outbox">
        <form>
          <h1>Login</h1>
          <div className="inputbox">
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={currentEmail}
              onChange={handleChange}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={currentPassword}
              onChange={handleChange}
            />
            <i className="bx bxs-alt"></i>
          </div>
          <div className="errorContainer">
            {error && <p>{error}</p>}
            <div className="rforgot">
              <Link to="/resetpassword">Forgot Password</Link>
            </div>
          </div>
          <button className="btn" onClick={submitLogin}>
            Log In
          </button>
          <div className="rlink">
            <p>
              Don't have an account?
              <Link to="/signup" className="link">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
