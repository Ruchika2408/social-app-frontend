// VerificationPage.js
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerificationPage.css';
import verifySocialPost from '../../services/verifyPost';

const VerificationPage = () => {
    const location = useLocation();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        const postDetails = {
            title: queryParams.get('title'),
            email: queryParams.get('email'),
            description: queryParams.get('description'),
            imgUrl: queryParams.get('img'),
            time: new Date(),
            comments: [],
            likes: []
        };

        setPost(postDetails);
    }, [location.search]);

    const checkPost = useCallback(async () => {
        if (post) {
            await verifySocialPost(post);
        }
    }, [post]);

    useEffect(() => {
        if (post) {
            checkPost();
        }
    }, [checkPost, post]);

    return (
        <div className="verificationContainer">
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
