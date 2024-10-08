import axios from "axios";
import CryptoJs from "crypto-js"

const forgetPassword = async (email, newPassword) => {
    try {
        const ciphertext = CryptoJs.AES.encrypt(
            newPassword,
            "forgetPassword"
        ).toString();

        const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/auth/forgetpassword", { email, newPassword: ciphertext }).then((response) => response.data);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default forgetPassword