import axios from "axios";

const createSocialPost = async (post) => {
    try {
        const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/socialPost/createSocialPost", post).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}

export default createSocialPost