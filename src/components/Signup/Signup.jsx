import React, { useState } from 'react';
import './signup.css';
import SignUpImg from "../../images/signup.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/userSlice';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [userData, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, status } = useSelector((state) => state.user); // Use Redux to get error and status

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...userData, [id]: value });
  }

  // Handle form submission
  const submitUser = async (e) => {
    e.preventDefault();
    if (userData.firstName && userData.lastName && userData.email && userData.phoneNumber && userData.password) {
      const action = await dispatch(registerUser(userData));
      if (registerUser.fulfilled.match(action)) {
        if (action.payload.code === "registered") {
          navigate("/login");
          setUser({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: ""
          });
        }
      }
    } else {
      // You can handle client-side validation errors here if needed
    }
  }

  return (
    <div className="container">
      <img className="image" src={SignUpImg} alt="signup" />
      <div className="outbox">
        <form onSubmit={submitUser}>
          <h1>Please fill the form to SignUp!!</h1>
          <div className="inputbox">
            <input type="text" id="firstName" placeholder="First Name" value={userData.firstName} onChange={handleChange} />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input type="text" id="lastName" placeholder="Last Name" value={userData.lastName} onChange={handleChange} />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input type="text" id="email" placeholder="Email" value={userData.email} onChange={handleChange} />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input type="password" id="password" placeholder="Password" value={userData.password} onChange={handleChange} />
            <i className="bx bxs-alt"></i>
          </div>
          <div className="inputbox">
            <input type="text" id="phoneNumber" placeholder="Phone Number" value={userData.phoneNumber} onChange={handleChange} />
            <i className="bx bxs-alt"></i>
          </div>
          {error && <p>{error}</p>} {/* Display error from Redux */}
          <button type="submit" className="btn" disabled={status === 'loading'}>
            {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className="acc">
            <p>
              Already have an account? <Link to="/login" className="link">Login Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
