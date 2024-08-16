// VerificationPage.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerificationPage.css';
import verifySocialPost from '../../services/verifyPost';

const VerificationPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const post = {
        title: queryParams.get('title'),
        email: queryParams.get("email"),
        description: queryParams.get("description"),
        imgUrl: queryParams.get('img'),
        time: new Date(),
        comments: [],
        likes: []
    }
    
    useEffect(() => {
        const checkPost = async () => {
            if(post) {
                await verifySocialPost(post);
            }
        };
        checkPost();
    }, []);

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
