import { Link } from "react-router-dom";
import "./login.css";
import Image from "../../images/login.jpg";


const Login = () => {
  return (
    <>
    <div style={{backgroundImage: `url(${Image})`}}>
        <div className="outbox">
            <form action="">
            <h1>Login</h1>
            <div className="inputbox">
                <input type="text" placeholder="Username" required />
                <i className="bx bxs-user"></i>
            </div>
            <div className="inputbox">
                <input type="password" placeholder="Password" resquired />
                <i className="bx bxs-alt"></i>
            </div>
            <div className="rforgot">
                <label>
                <input type="checkbox" />
                Remember me
                </label>
                <a href="#">Forgot Password</a>
            </div>
            <button type="Submit" className="btn">
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
        </div>
    </>
  );
};
export default Login;
