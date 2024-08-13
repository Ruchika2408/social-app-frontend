import axios from "axios";

const verifySocialPost = async (post) => {
    try {
        const response = await axios.post("http://localhost:3001/api/socialPost/verifyPost", post).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}

export default verifySocialPost