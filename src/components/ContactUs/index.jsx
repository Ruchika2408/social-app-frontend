import { Link } from "react-router-dom";
import "./contact.css";
import ContactImg from "../../images/contact.jpg";

const Contact = () => {
  return (
    <>
    <div class ="heading">
        <div class="line">
    <header>
        <nav>
            <ul class="menubar">
                <li><Link to="/home">Back to Home</Link></li>
                </ul>
        </nav>
    </header>
    </div>
    </div>
    <div class="group">
        <div class="projectmembers">
            <div class="projectmanager">
                <h2>Ekamjot Singh</h2>
                <p>Project Manager</p>
            </div>
            <div class="dataanalyst">
                <h2>Nikita Chopra</h2>
                <p>Data Analyst</p>
            </div>
            <div class="developer">
                <h2>Zalak Korat</h2>
                <p>Developer (Programmer)</p>
            </div>
            <div class="tester">
                <h2>Ahad Majeed</h2>
                <p>Tester</p>
            </div>
            <div class="technicalss">
                <h2>Ali Hussain</h2>
                <p>Technical Support Specialist</p>
            </div>
            <div class="databasedev">
                <h2>Rohit Singh</h2>
                <p>DataBase Developer</p>
            </div>
            <div class="network">
                <h2>Mubashar Cheema</h2>
                <p>Network Designer</p>
            </div>  
            <div class="supportfrontend">
                <h2>Rabin Kumar</h2>
                <p>Support FrontEnd Designer</p>
            </div>
            <div class="frontend">
                <h2>Ruchika Arora</h2>
                <p>FrontEnd Designer</p>
            </div>

            </div>
            </div>
            
        <footer>
            <div class="footer">
                <div class="footer1">
                    <p><b>About Us:</b></p>
                    <p>We are a group of 10 people working on this project. This projects aims to provide the platform to raise awareness.</p>
                </div>
                <div class="footer2">
                    <h4><b>Contact Us:</b></h4>
                    <p>Email: <a href="mailto:actacs202303005@indusinstitute.edu.au">ACTACS202303005@indusinstitute.edu.au</a></p>
                    <p>Phone: 123-234-345 </p>
                </div>
            </div>
            <div class="footer3">
                <p>&copy; Social Awareness. All Rights Reserved.</p>
            </div>
        </footer>

    </>
  );
};
export default Contact;
