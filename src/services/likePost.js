import axios from "axios";

const likePost = async (email,title) => {
    try {
        const response = await axios.post("http://localhost:3001/api/socialPost/like", { email, title }).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default likePost