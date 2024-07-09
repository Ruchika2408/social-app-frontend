import axios from "axios";

const getSocialPosts = async () => {
    try { 
        const response = await axios.get("http://localhost:3001/api/socialPost").then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}

export default getSocialPosts