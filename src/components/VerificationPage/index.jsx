// VerificationPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyPost } from '../../store/socialPostSlice';
import './VerificationPage.css';

const VerificationPage = () => {
    const dispatch = useDispatch();
    const currentPost = useSelector(state => state.socialPosts.currentPost);

    useEffect(() => {
        const checkPost = async () => {
            if (currentPost) {
                await dispatch(verifyPost(currentPost));
            }
        };
        checkPost();
    }, [dispatch, currentPost]);

    return (
        <div className="container">
            <div className="success-box">
                <h1>Post Added Successfully!</h1>
                <p>Your social post has been added.</p>
                <p>Please <Link to="/login">log in</Link> to continue.</p>
                <p>After logging in, navigate to the following URL to view your post:</p>
                <p><Link to="/">https://example.com/your-post-url</Link></p>
            </div>
        </div>
    );
};

export default VerificationPage;
