import React from "react";
import "./index.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer1">
                    <p>
                        <b>About Us:</b>
                    </p>
                    <p>
                        We are a group of 10 people working on this project. The company’s
                        vision is to raise awareness of social issues and give our users a
                        platform where they can advertise for small businesses. This web
                        application will allow users to create and participate in the
                        causes that are close to their hearts and also provide a platform
                        for small business owners to promote their businesses and get
                        leads.
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
                    <p>Phone: +61 451-392-990 </p>
                </div>
            </div>
            <div className="footer3">
                <p>&copy; Social Awareness. All Rights Reserved.</p>
            </div>
        </footer>

    )
}

export default Footer;