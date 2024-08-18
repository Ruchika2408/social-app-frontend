import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import StyledModal from "../Modal";
import SocialPost from "../SocialPost";
import Footer from "../Footer/index";
import StyledHeader from "../Header";
import SwipeableTextMobileStepper from "../AdvertisementCarousel";
import { setSocialPosts } from "../../store/socialPostSlice";
import { ToastContainer } from "react-toastify";
import getSocialPosts from "../../services/socialPosts";
import "./index.css";
import findUser from "../../services/getUser";
import { setUserData } from "../../store/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const {user} = useSelector((state) => state.user);
  const socialPosts = useSelector((state) => state.socialPosts.posts);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await getSocialPosts();
      if (response.code === "socialPostsExist") {
        dispatch(setSocialPosts(response.socialPosts));
      }
      const email = localStorage.getItem("id");
      if(email){
       const userData = await findUser(email);
       dispatch(setUserData(userData.user))
      }
     
    };
    
    fetch();
  }, []);

  return (
    <>
      <StyledHeader name={user?.firstName ? `${user?.firstName} ${user?.lastName}` :""} />
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
          {socialPosts &&
            socialPosts.map((post) => (
              <SocialPost
                title={post.title}
                description={post.description}
                img={post.imgUrl}
                key={post.title}
                email={post.email}
                likes={post.likes}
                time={post.time}
                comments={post.comments}
              />
            ))}
        </div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Create Post
        </Button>
        <StyledModal open={open} handleClose={handleClose} />
      </div>
      <SwipeableTextMobileStepper />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
