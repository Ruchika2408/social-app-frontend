import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import StyledModal from "../Modal";
import SocialPost from "../SocialPost";
import Footer from "../Footer/index";
import StyledHeader from "../Header";
import SwipeableTextMobileStepper from "../AdvertisementCarousel";
import { signout } from "../../store/userSlice";
import { fetchPosts } from "../../store/socialPostSlice";
import "./index.css";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const socialPosts = useSelector((state) => state.socialPosts.posts);
  
  const handleLogout = async () => {
    if (isLoggedIn && user.email) {
      try {
        const response = await dispatch(signout(user.email));
        if (response.payload.code === 'logout') {
          navigate('/login');
        }
      } catch (error) {
        console.error('Logout failed', error);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledHeader handleLogout={handleLogout} name={`${user.firstName} ${user.lastName}`} />
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
          {socialPosts && socialPosts.map((post) => (
            <SocialPost
              title={post.title}
              description={post.description}
              img={post.imgUrl}
              key={post.id}
              email={post.email}
              likes={post.likes}
              time={post.time}
              comments={post.comments}
            />
          ))}
        </div>
        <Button variant="contained" onClick={() => setOpen(true)}>Create Post</Button>
        <StyledModal open={open} handleClose={handleClose} />
        <SwipeableTextMobileStepper />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;

