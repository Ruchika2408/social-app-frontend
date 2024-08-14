import axios from "axios";

const logout = async(email) => {
    console.log(email, "check")
    try{
    const response = await axios.post("https://social-app-backend-my0w.onrender.com/api/auth/logout", {email}).then((response) => response.data);
    console.log(response);
    return response;
    }
    catch(error){
        console.log("error", error);
        return "User Invalid";
    }
}

export default logout