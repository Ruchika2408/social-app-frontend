import { useNavigate } from "react-router-dom";

import SocialPost from "../SocialPost";
import CamPaignImg from "../../images/campaign1.jpg";
import CamPaignImg2 from "../../images/campaign2.jpg";
import CamPaignImg3 from "../../images/campaign3.jpg";
import CamPaignImg4 from "../../images/campaign4.jpg";
import { useUser } from "../../Providers/userProvider";
import Footer from "../Footer/index";
import StyledHeader from "../Header";

//css
import "./index.css";

const Home = () => {
  const { isLoggedIn, user, signout } = useUser();
  const navigate = useNavigate()

  const handleLogout = async () => {

    if (isLoggedIn && user.email) {
      const response = await signout(user.email)
      if (response.code === "logout") {
        navigate("/login")
      }
    }
  }

  return (
    <>
      <StyledHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="header2">
        <p>
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
      </div>
      <Footer />
    </>
  );
};
export default Home;
