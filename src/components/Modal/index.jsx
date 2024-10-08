// StyledModal.js
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import {  setCurrentPost } from '../../store/socialPostSlice';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import createSocialPost from '../../services/createPost';

const StyledModal = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const currentPost = useSelector(state => state.socialPosts.currentPost)
    const [post, setPost] = useState({...currentPost, email: user.email});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setPost({ ...post, [id]: value });
        dispatch(setCurrentPost({...post, [id]: value}))
    };

    const handleCreatePost = async () => {
        const postData = { ...post, time: new Date(), email: user.email };
        dispatch(setCurrentPost(postData))
        const response = await createSocialPost(postData);
        handleClose();
        if (response.code === "verificationEmailSent") {
            toast("Admin will approve your post. Please wait for 2-3 working days.");
        }
    };

    const handleCancel = () => {
        handleClose();
        setPost({
            email: user.email,
            title: "",
            description: "",
            imgUrl: "",
            time: "",
            comments: [],
            likes: []
        });
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="boxContainer">
                <TextField id="title" label="Title" variant="outlined" value={post.title} onChange={handleInputChange} />
                <TextField id="description" label="Description" variant="outlined" value={post.description} onChange={handleInputChange} />
                <TextField id="imgUrl" label="Image Url" variant="outlined" value={post.imgUrl} onChange={handleInputChange} />
                <div className="buttonsContainer">
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" onClick={handleCreatePost}>Submit</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default StyledModal;
