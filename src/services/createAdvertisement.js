import axios from "axios";

const createAdvertisement = async (advertisement) => {
    try {
        const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/advertisement/createAdvertisement", advertisement).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "Invalid response";
    }
}


export default createAdvertisement