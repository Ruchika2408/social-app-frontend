import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import { useUser } from "../../Providers/userProvider";

const Signup = () => {
  const [userData, setUser] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", password: "" });
  const { registerUser } = useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...userData, [id]: value });
  }

  const submitUser = async (e) => {
    e.preventDefault();
    if (userData.firstName && userData.lastName && userData.email && userData.phoneNumber && userData.password) {
      const response = await registerUser(userData);
      if (response.code === "registered") {
        navigate("/login")
        setError("")
        setUser({ firstName: "", lastName: "", email: "", phoneNumber: "", password: "" })
      }
      if(response.code === "existUser") {
        setError("User Already Exist.")
      }
    }
    else {
      setError("Please provide Valid Data");
    }
  }

  return (
    <div className="container">
      <img className="video" src="https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif" alt="gif" />
      <div className="outbox">
        <form>
          <h1>Please fill the form to SignUp!!</h1>
          <div className="inputbox">
            <input type="text" id="firstName" placeholder="FirstName" value={userData.firstName} onChange={handleChange} />
            <i className="bx bxs-user"></i>
          </div>
          <div className="inputbox">
            <input type="text" id="lastName" placeholder="LastName" value={userData.lastName} onChange={handleChange} />
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
          {error && <p>{error}</p>}
          <button onClick={submitUser} className="btn">
            SignIn
          </button>

          <div className="acc">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
