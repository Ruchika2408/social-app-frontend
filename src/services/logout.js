import axios from "axios";
import CryptoJs from "crypto-js"

const logout = async(email) => {
    try{
    const response = await axios.post("http://localhost:3001/api/auth/logout", email).then((response) => response.data);
    console.log(response);
    return response;
    }
    catch(error){
        console.log("error", error);
        return "User Invalid";
    }
}

export default logout