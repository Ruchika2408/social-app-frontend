import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

import { useSocialPost } from "../../Providers/socialPostProvider";
import StyledModal from "../Modal";
import SocialPost from "../SocialPost";
import { useUser } from "../../Providers/userProvider";
import Footer from "../Footer/index";
import StyledHeader from "../Header";
import SwipeableTextMobileStepper from "../AdvertisementCarousel";

//css
import "./index.css";

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
      <StyledHeader handleLogout={handleLogout} name={`${user.firstName} ${user.lastName}`}/>
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
            key={post.id}
            email={post.email}
            likes={post.likes}
            time={post.time}
            comments={post.comments}
          />)}
        </div>
        <Button variant="contained" onClick={() => setOpen(true)}>Create Post</Button>
      <StyledModal open={open} handleClose={handleClose}/>
     <SwipeableTextMobileStepper />
      </div>
      <Footer />
    </>
  );
};
export default Home;
