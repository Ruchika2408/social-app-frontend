import { Link } from "react-router-dom";
import "./index.css";
import SocialPost from "../SocialPost";
import CamPaignImg from "../../images/campaign1.jpg";
import Logo from "../../images/logo.jpg";
import HeaderBg from "../../images/background.jpg";
import CamPaignImg2 from "../../images/campaign2.jpg";
import CamPaignImg3 from "../../images/campaign3.jpg";
import CamPaignImg4 from "../../images/campaign4.jpg";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <img src={Logo} alt="img" width="48px" height="48px" />
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
        <div className="image">
          <img src={HeaderBg} width="100%" />
          <div className="heading">
            <h1> Social Awareness</h1>
            <div className="floating-text">
              <h2> Join us in making difference!</h2>
            </div>
          </div>
        </div>
      </header>

      <div className="header2">
        <p>
          {" "}
          The ability to take the perspective of and empathize with others,
          including those from diverse backgrounds and cultures. The ability to
          understand social and ethical norms for behavior and to recognize
          family, school, and community resources and supports.
        </p>
      </div>
      <div className="topic1">
        <SocialPost
          title="Environment Sustainability"
          description={
            "Greener tomorrow ? Need to RRR (Reduce, reuse, recycle) We can significantly improve our planet's health by implementing sustainable practices such as waste reduction, recycling, and energy conservation. Join us in our endeavour to safeguard the environment and ensure a sustainable future for generations to come. To read more about this cause"
          }
          img={CamPaignImg}
        />
        <SocialPost
          title={"Mental Health Awareness"}
          description={
            "“No one is alone Many people are hesitant to seek help for mental health concerns due to the stigma associated with them. Let's work together to break the stigma by raising awareness, offering support, and providing resources to people with mental health difficulties.To read more about this cause"
          }
          img={CamPaignImg2}
        />
        <SocialPost
          title={"Mental Health Awareness"}
          description={
            "“No one is alone Many people are hesitant to seek help for mental health concerns due to the stigma associated with them. Let's work together to break the stigma by raising awareness, offering support, and providing resources to people with mental health difficulties.To read more about this cause"
          }
          img={CamPaignImg3}
        />

        <SocialPost
          title={"Mental Health Awareness"}
          description={
            "“No one is alone Many people are hesitant to seek help for mental health concerns due to the stigma associated with them. Let's work together to break the stigma by raising awareness, offering support, and providing resources to people with mental health difficulties.To read more about this cause"
          }
          img={CamPaignImg4}
        />
        {/* <div className="campaign">
          <img src="campaign3.jpg" alt="Campaign 3 Image" />
          <h3>Gender Equality</h3>
          <p>
            “Equal voices, Equal choices.” Gender equality is a fundamental
            human right, but women and girls around the world continue to
            experience discrimination and inequality. By campaigning for equal
            rights and opportunities for all genders, we can build a more just
            and equitable society. To read more about this cause{" "}
            <a href=" https://www.un.org/sustainabledevelopment/gender-equality/">
              Click Here
            </a>
          </p>
          <button class="like">
            <img src="pictures/like.jpg" />
          </button>
          <button class="comment">
            <img src="pictures/comment.jpg" />
          </button>
        </div>

        <div className="campaign">
          <img src="campaign4.jpg" alt="Campaign 4 Image" />
          <h3>Poverty mitigation</h3>
          <p>
            “Poverty: Handmade, We can break it.” Poverty impacts millions of
            people around the world, denying them basic necessities such as
            food, housing, and education. We can help those in need by raising
            awareness and supporting poverty-relief efforts. Join us in our
            efforts to eradicate poverty and build a better future for
            everybody. To read more about this cause{" "}
            <a href="https://www.un.org/en/global-issues/ending-poverty">
              Click Here
            </a>
          </p>
          <button class="like">
            <img src="pictures/like.jpg" />
          </button>
          <button class="comment">
            <img src="pictures/comment.jpg" />
          </button>
        </div> */}
      </div>
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
