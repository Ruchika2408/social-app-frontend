import {
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
} from "react";

import login from "../services/login";
import findUser from "../services/getUser";
import signup from "../services/signup";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
    const authenticate = useCallback(async (email, password) => {
        const response = await login(email, password);
        if (response.code === "loggedIn") {
            localStorage.setItem("id", email);

            const userData = await findUser(email);
            if (userData.code === "userExist") {
                setUser(userData.user);
            }
            else {
               setUser({})
            }
        }
        else {
            setUser({})
        }
    },[])

    const registerUser = useCallback(async(userData) => {
        const response = await signup(userData);
        return response;
    },[])

    const setUserData = useCallback((userData) => setUser(userData), []);

    const value = useMemo(() => ({ authenticate, user, setUserData,  registerUser }), [
        authenticate, user, setUserData, registerUser
    ])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

export const useUser = () => useContext(UserContext);
