import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
  return (
    <>
      <div className="main">
        <p> Lets take a step forward to change the world</p>
      </div>
      <div className="image">
        <img src="pictures/logo.jpg" />
      </div>
      <header>
        <nav>
          <ul className="menubar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="button">
            <Link to="/login" className="buttons">
              Login
            </Link>
            <Link to="/signup" className="buttons">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
      <div className="heading">
        <h1> Social Awareness</h1>
        <div className="floating-text">
          <h2> Join us in making difference!</h2>
        </div>
      </div>
      <div className="header2">
        <p>
          {" "}
          The ability to take the perspective of and empathize with others,
          including those from diverse backgrounds and cultures. The ability to
          understand social and ethical norms for behavior and to recognize
          family, school, and community resources and supports.
        </p>
      </div>
      <div className="campaign">
        <div className="cause2">
          <img src="campaign1.jpg" alt="Campaign 1 Image" />
          <h3>Campaign 1: Clean Water for All</h3>
          <p>
            Access to clean water is a basic human right. Help us provide clean
            and safe water to communities in need.
          </p>
        </div>

        <div className="cause2">
          <img src="campaign2.jpg" alt="Campaign 2 Image" />
          <h3>Campaign 2: Education for Every Child</h3>
          <p>
            Every child deserves access to quality education. Support our
            mission to build schools and provide educational resources.
          </p>
        </div>

        <div className="cause2">
          <img src="campaign3.jpg" alt="Campaign 3 Image" />
          <h3>Campaign 3: End Hunger</h3>
          <p>
            Millions of people go to bed hungry every night. Join our efforts to
            distribute food and end hunger worldwide.
          </p>
        </div>

        <div className="cause2">
          <img src="campaign4.jpg" alt="Campaign 4 Image" />
          <h3>Campaign 4: Protect the Environment</h3>
          <p>
            Our planet needs us. Participate in our initiatives to reduce
            pollution and promote sustainable living.
          </p>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="footer1">
            <p>
              <b>About Us:</b>
            </p>
            <p>
              We are a group of 10 people working on this project. This projects
              aims to provide the platform to raise awareness.
            </p>
          </div>
          <div className="footer2">
            <h4>
              <b>Contact Us:</b>
            </h4>
            <p>
              Email:{" "}
              <a href="mailto:actacs202303005@indusinstitute.edu.au">
                ACTACS202303005@indusinstitute.edu.au
              </a>
            </p>
            <p>Phone: 123-234-345 </p>
          </div>
        </div>
        <div className="footer3">
          <p>&copy; Social Awareness. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default Home;
