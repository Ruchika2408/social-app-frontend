import axios from "axios";

const getSocialPost = async (email,title) => {
    try {
        
        const response = await axios.get(`https://social-app-backend-my0w.onrender.com/api/socialPost/${title}`, {email}).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}

export default getSocialPost