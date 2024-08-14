import axios from "axios";
import CryptoJs from "crypto-js"

const login = async (email, password) => {
    try {
        const encryptedPwd = CryptoJs.AES.encrypt(password, "login").toString();
        const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/auth/login", { email, password: encryptedPwd }).then((response) => response.data);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default login