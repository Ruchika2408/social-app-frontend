import axios from "axios";

const likePost = async (email,title, like, likeBy) => {
    console.log("check like")
    try {
        const response = await axios.post("http://localhost:3001/api/socialPost/like", { email, title, like, likeBy }).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default likePost