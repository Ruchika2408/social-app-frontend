import {  useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from '@emotion/styled';
import Collapse from '@mui/material/Collapse';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import commentPost from '../../services/commentPost';
import likePost from '../../services/likePost';
import { setSocialPosts } from '../../store/socialPostSlice';
import getSocialPosts from '../../services/socialPosts';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

const SocialPost = ({ title, description, img, time, email, likes = [], comments = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch()
  const {user, isLoggedIn} = useSelector(state => state.user);
  const liked = likes.some(item => item.likeBy === user.email);
  const [likedState, setLikedState] = useState(liked);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onComment = async () => {
    if (comment && user.email) {
      const resp = await commentPost( email, title, comment, user.email );
      if (resp.code === "socialPostCommented") {
        toast("Comment successfully added");
        setComment("");
        const response = await getSocialPosts();
        if (response.code === "socialPostsExist") {
          dispatch(setSocialPosts(response.socialPosts));
        }
      }
    }
  };

  const onLike = async () => {
    if(user.email){
    const response = await likePost(email, title, !likedState, user.email);
    if (response.code === "socialPostLiked") {
      setLikedState(!likedState);
      toast(likedState ? "Like removed." : "Post liked.");
      const response = await getSocialPosts();
      if (response.code === "socialPostsExist") {
        dispatch(setSocialPosts(response.socialPosts));
      }
    }
  }
  };

  return (
    <Card sx={{ maxWidth: "31%", minWidth: "31%", width: "31%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {email.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={title}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Post image"
      />
      <CardContent sx={{ minHeight: "252px" }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={onLike}>
          {likedState ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          {likes.length}
        </IconButton>
        <IconButton aria-label="comment" onClick={onComment}>
          <CommentIcon color={isLoggedIn ? 'primary' : 'inherit'} />
        </IconButton>
        {isLoggedIn && 
          <input
            type="text"
            className='commentInput'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
        }
        {comments.length > 0 && 
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comments.map((item) => (
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }} key={item.commentBy + item.comment}>
              <Avatar sx={{ bgcolor: red[400], width: 24, height: 24 }} aria-label="commenter">
                {item?.commentBy?.toString().charAt(0)}
              </Avatar>
              <Typography sx={{ margin: 0 }} paragraph>
                {item.comment}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SocialPost;
