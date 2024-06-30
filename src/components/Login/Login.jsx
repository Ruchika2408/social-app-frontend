import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useUser } from "../../Providers/userProvider";

const Login = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const { authenticate, user } = useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    if (currentEmail && currentPassword) {
      const loginResponse = await authenticate(currentEmail, currentPassword);
      if(loginResponse.code === "loggedIn" && user){
        navigate("/");
        setError("")
      }
      if(loginResponse.code === "incorrectPassword" ) {
        setError("Please provide valid password");
      }
      if(loginResponse.code === "userNotFound" ) {
        setError("User not Found.");
      }else {
        setError("USer Already LoggedIn.")
      }
    }
  }

  const handleChange = (e) => {
      const {id,value} = e.target;
   
     if(id === "email"){
      setCurrentEmail(value);
     }
     if(id==="password"){
      setCurrentPassword(value);
     }
  }

  return (
    <>
      <div className="outbox">
        <form>
          <h1>Login</h1>
          <div className="inputbox">
            <input id="email" type="email"  value={currentEmail} onChange={handleChange} />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input id="password" type="password"  value={currentPassword} onChange={handleChange} />
            <i className="bx bxs-alt"></i>
          </div>
          {error && <p>{error}</p>}
          <div className="rforgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/">Forgot Password</Link>
          </div>
          <button className="btn" onClick={submitLogin}>
            LogIn
          </button>

          <div className="rlink">
            <p>
              Don't have an account?
              <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
