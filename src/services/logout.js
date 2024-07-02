import axios from "axios";

const logout = async(email) => {
    console.log(email, "check")
    try{
    const response = await axios.post("http://localhost:3001/api/auth/logout", {email}).then((response) => response.data);
    console.log(response);
    return response;
    }
    catch(error){
        console.log("error", error);
        return "User Invalid";
    }
}

export default logout