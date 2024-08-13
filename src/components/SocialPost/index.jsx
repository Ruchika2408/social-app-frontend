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
import { useState } from 'react';
import styled from '@emotion/styled';
import Collapse from '@mui/material/Collapse';
import { useUser } from '../../Providers/userProvider';
import "./index.css"
import { useSocialPost } from '../../Providers/socialPostProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

const SocialPost = ({ title, description, img, time, url, email, likes, comments }) => {
  const [expanded, setExpanded] = useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const {isLoggedIn, user} = useUser();
  const liked = likes.filter(item => item.likeBy === user.email);
  const [like, setLike] = useState(liked[0]?.like || false)
  const {commentPosts, likePosts} = useSocialPost();
  const [comment, setComment] = useState();
  
  const onComment = async() => {
     if(comment){
       const resp = await commentPosts(email, title, comment, user.email);
       if(resp.code === "socialPostCommented"){
        toast("comment successfully")
       }
     }
  }

  const onLike = async() => {
    const response = await likePosts(email,title, !like, user.email)
    setLike(!like)
    if(response.code === "socialPostLiked"){
      toast("Post liked.")
    }
  }

  return (
    <>
    <Card sx={{ maxWidth: "31%", minWidth: "31%", width: "31%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {email.charAt(0).toUpperCase()}
          </Avatar>
        }
        sx={{}}
        title={title}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent sx={{ minHeight: "252px" }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          {like ? <FavoriteIcon variant="primary" onClick={onLike}/>:<FavoriteBorderOutlinedIcon onClick={onLike}/>} {likes ? likes.length : 0}
        </IconButton>
        <IconButton aria-label="share" onClick={onComment}>
          <CommentIcon color={isLoggedIn ? 'primary' : "inherit"} />
        </IconButton>
        {isLoggedIn && <input type="text" className='commentInput' value={comment} onChange={(e) => setComment(e.target.value)}/>}
        {comments && <ExpandMore
          expand={expanded} 
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comments && comments.map(item => <div style={{display: "flex", gap: "12px", alignItems: "center"}} key={item.comment}>
            <Avatar sx={{ bgcolor: red[400], width: 24, height: 24 }}  aria-label="recipe">
            {item.commentBy}
          </Avatar>
          <Typography sx={{margin:0}} paragraph>{item.comment}</Typography>
          </div>)}
        </CardContent>
      </Collapse>
    </Card>
    <ToastContainer />
    </>
  );
}

export default SocialPost;