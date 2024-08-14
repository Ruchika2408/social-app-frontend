import axios from "axios";

const getAdvertisements = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/api/advertisement`).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default getAdvertisements