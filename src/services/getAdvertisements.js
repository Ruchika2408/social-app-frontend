import axios from "axios";

const getAdvertisements = async () => {
    try {
        const response = await axios.get(`https://social-app-backend-my0w.onrender.com/api/advertisement`).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default getAdvertisements