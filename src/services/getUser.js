import axios from "axios";

const findUser = async (email) => {
    try {
        const response = await axios.get(`https://social-app-backend-my0w.onrender.com/api/auth/${email}`).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default findUser