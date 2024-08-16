import { Link } from "react-router-dom";
import "./contact.css";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <div className="heading">
        <header>
          <nav>
            <ul className="menubar">
              <li><Link to="/">Back to Home</Link></li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="group">
        <div className="projectmembers">
          <div className="projectmanager">
            <h2>Ekamjot Singh</h2>
            <p>Project Manager</p>
          </div>
          <div className="dataanalyst">
            <h2>Nikita Chopra</h2>
            <p>Data Analyst</p>
          </div>
          <div className="developer">
            <h2>Zalak Korat</h2>
            <p>Developer (Programmer)</p>
          </div>
          <div className="tester">
            <h2>Ahad Majeed</h2>
            <p>Tester</p>
          </div>
          <div className="technicalss">
            <h2>Ali Hussain</h2>
            <p>Technical Support Specialist</p>
          </div>
          <div className="databasedev">
            <h2>Rohit Singh</h2>
            <p>DataBase Developer</p>
          </div>
          <div className="network">
            <h2>Mubashar Cheema</h2>
            <p>Network Designer</p>
          </div>
          <div className="supportfrontend">
            <h2>Rabin Kumar</h2>
            <p>Support FrontEnd Designer</p>
          </div>
          <div className="frontend">
            <h2>Ruchika Arora</h2>
            <p>FrontEnd Designer</p>
          </div>
          <div className="frontend">
            <h2>Muhammad Umair Toheed</h2>
            <p>Support developer & network</p>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default Contact;
