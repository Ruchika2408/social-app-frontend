import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling
import { useUser } from '../../Providers/userProvider';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const { fetchUser, forgetpassword } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step === 0 && email) {
      const response = await fetchUser(email);
      if (response.code === "userExist") {
        setStep(1);
      }
    }
    if(step === 1 && password){
      const response = await forgetpassword(email,password);
      if(response.code === "forgetPwdSuccess"){
        navigate("/login");
      }
    }
  };

  return (
    <div className="forget-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {step === 0 && <>
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
        }
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
