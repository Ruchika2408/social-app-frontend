import React, { useEffect } from 'react';
import './VerificationPage.css';
import { Link } from 'react-router-dom';
import { useSocialPost } from '../../Providers/socialPostProvider';

const VerificationPage = () => {
    const {verifyPost} = useSocialPost();
    
    useEffect(() => {
        const checkPost = async () => {
         await verifyPost()
        }
        checkPost()
    }, []);
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
