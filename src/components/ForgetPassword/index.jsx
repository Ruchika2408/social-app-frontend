import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling
import {  useSelector } from 'react-redux';// Import your thunks
import { useNavigate } from 'react-router-dom';
import findUser from '../../services/getUser';
import forgetPassword from '../../services/forgetPassword';

const ForgetPassword = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(0);
  
  const { status, error } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (step === 0 && email) {
      const response = await findUser(email);
      if (response.code === "userExist") {
        setStep(1);
      } else {
        console.error("User does not exist or an error occurred");
      }
    }

    if (step === 1 && password) {
      const response = await forgetPassword( email, password);
      if (response.code === "forgetPwdSuccess") {
        navigate("/login");
      } else {
        console.error("Password reset failed or an error occurred");
      }
    }
  };

  return (
    <div className="forget-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </>
        )}
        {step === 1 && (
          <>
            <label>
              New Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </>
        )}
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Processing...' : 'Submit'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ForgetPassword;
