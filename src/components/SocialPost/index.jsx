import Comment from "../../images/comment.jpeg";
import Like from "../../images/like.jpeg";

const SocialPost = ({ title, description, img, url }) => {
    return (
        <div className="campaign">
            <img src={img} className="campaignImg" alt="campaign" />
            <h3>{title}</h3>
            <p>
                {description} <a href="https://www.who.int/health-topics/mental-health#tab=tab_1">Click Here</a>
            </p>
            <div className="buttonsWrapper">
                <button className="like">
                    <img src={Like} alt="like" />
                </button>
                <button className="comment">
                    <img src={Comment} width="200px" height="200px" alt="comment" />
                </button>
            </div>

        </div>
    );
}

export default SocialPost;