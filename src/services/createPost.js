import axios from "axios";

const createSocialPost = async (post) => {
    try {
        const response = await axios.post("http://localhost:3001/api/socialPost/createSocialPost", post).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}

export default createSocialPost