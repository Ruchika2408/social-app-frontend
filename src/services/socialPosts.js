import axios from "axios";

const getSocialPosts = async () => {
    try { 
        const response = await axios.get("https://social-app-backend-my0w.onrender.com/api/socialPost").then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}

export default getSocialPosts