import axios from "axios";

const commentPost = async (email,title, comment, commentedBy) => {
    try {
        const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/socialPost/comment", { email, title, comment, commentedBy }).then((response) => response.data);
        console.log(response)
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default commentPost