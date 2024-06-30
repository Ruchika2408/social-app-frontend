import axios from "axios";

const findUser = async (email) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/auth/${email}`).then((response) => response.data);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default findUser