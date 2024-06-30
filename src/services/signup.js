import axios from "axios";
import CryptoJs from "crypto-js"

const signup = async(userData) => {
    try{
    const encryptedPwd = CryptoJs.AES.encrypt(userData.password, "register").toString();
    
    const userDetails = {...userData, password: encryptedPwd};
    console.log(userDetails)
    const response = await axios.post("http://localhost:3001/api/auth/register", userDetails).then((response) => response.data);
    return response;
    }
    catch(error){
        console.log("error", error);
        return "User Invalid";
    }
}

export default signup