import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <div className="outbox">
        <form action="">
          <h1>Please fill the form to SignUp!!</h1>
          <div className="inputbox">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Email" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-alt"></i>
          </div>
          <div className="inputbox">
            <input
              type="Confirm password"
              placeholder="Confirm Password"
              required
            />
            <i className="bx bxs-alt"></i>
          </div>

          <button type="Submit" className="btn">
            SignIn
          </button>

          <div className="acc">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
