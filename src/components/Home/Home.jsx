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
import { useSocialPost } from "../../Providers/socialPostProvider";
import { Button } from "@mui/material";
import StyledModal from "../Modal";
import { useState } from "react";

const Home = () => {
  const { isLoggedIn, user, signout } = useUser();
  const { socialPosts } = useSocialPost();
  const navigate = useNavigate()

  const handleLogout = async () => {

    if (isLoggedIn && user.email) {
      const response = await signout(user.email)
      if (response.code === "logout") {
        navigate("/login")
      }
    }
  }
  
  const [open,setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      <StyledHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} name={user?.firstName + " " + user?.lastName} />
      <div className="header2">
        <p>
          The ability to take the perspective of and empathize with others,
          including those from diverse backgrounds and cultures. The ability to
          understand social and ethical norms for behavior and to recognize
          family, school, and community resources and supports.
        </p>
      </div>
      <div className="postContainer">

        <div className="topic1">
          {socialPosts && socialPosts.map((post) => <SocialPost
            title={post.title}
            description={post.description}
            img={post.imgUrl}
            key={postMessage.title}
          />)}
        </div>
        <Button variant="contained" onClick={() => setOpen(true)}>Create Post</Button>
      <StyledModal open={open} handleClose={handleClose}/>
     
      </div>
      <Footer />
    </>
  );
};
export default Home;
