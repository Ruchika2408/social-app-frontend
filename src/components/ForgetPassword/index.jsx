import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, forgetPasswordThunk } from '../../store/userSlice'; // Import your thunks
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(0);
  
  const { status, error } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (step === 0 && email) {
      const action = await dispatch(fetchUser(email));
      if (fetchUser.fulfilled.match(action) && action.payload.code === "userExist") {
        setStep(1);
      } else {
        // Handle error or invalid email
        console.error("User does not exist or an error occurred");
      }
    }

    if (step === 1 && password) {
      const action = await dispatch(forgetPasswordThunk({ email, password }));
      if (forgetPasswordThunk.fulfilled.match(action) && action.payload.code === "forgetPwdSuccess") {
        navigate("/login");
      } else {
        // Handle error or invalid password
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
