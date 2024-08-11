import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useUser } from '../../Providers/userProvider';
import { Button, TextField } from '@mui/material';
import { useSocialPost } from '../../Providers/socialPostProvider';
import "./index.css"

const StyledModal = ({ open, handleClose }) => {
    const {user} = useUser()
    const {createPost}  = useSocialPost();

    const [post, setPost] = useState({
        email: user.email,
        title: "",
        description: "",
        imgUrl: "",
        time: "",
        comments: [],
        likes: []
    })

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setPost({...post, [id]: value})
    }

    const createSocialPost = async() => {
        setPost({...post, time: new Date() })
        const postData = {...post, time: new Date()}
       const response = await createPost(postData);
       handleClose();
    }

    const cancelPost = () => {
        handleClose()
        setPost({
            email: user.email,
            title: "",
            description: "",
            imgUrl: "",
            time: "",
            comments: [],
            likes: []
        })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="boxContainer">
            <TextField id="title" label="Title" variant="outlined" value={post.title} onChange={handleInputChange}/>
            <TextField id="description" label="Description" variant="outlined" value={post.description} onChange={handleInputChange}/>
            <TextField id="imgUrl" label="Image Url" variant="outlined" value={post.imgUrl} onChange={handleInputChange}/>
            <div className="buttonsContainer" >
                <Button variant="outlined" onClick={cancelPost}>Cancel</Button>
                <Button variant="contained" onClick={createSocialPost}>Submit</Button>
            </div>
            </Box>
        </Modal>
    )
}

export default StyledModal;