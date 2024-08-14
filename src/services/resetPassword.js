import axios from "axios";
import CryptoJs from "crypto-js"

const resetPassword = async (email, oldPassword, newPassword) => {
    try {
        const oldCiphertext = CryptoJs.AES.encrypt(oldPassword, "resetPassword").toString();
        const ciphertext = CryptoJs.AES.encrypt(newPassword, "resetPassword").toString();
        const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/auth/resetpassword", { email, oldPassword: oldCiphertext, newPassword: ciphertext }).then((response) => response.data);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log("error", error);
        return "User Invalid";
    }
}

export default resetPassword