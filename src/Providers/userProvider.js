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
import logout from "../services/logout";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);
    
    const authenticate = useCallback(async (email, password) => {
        const response = await login(email, password);
        if (response.code === "loggedIn") {
            localStorage.setItem("id", email);
             setLoggedIn(true);
            const userData = await findUser(email);
            if (userData.code === "userExist") {
                setUser(userData.user);
            }
            else {
               setUser({})
               setLoggedIn(false)
            }
        }
        else {
            setLoggedIn(false)
            setUser({})
        }
        return response;
    },[])

    const signout = useCallback(async(email) => {
        const response = await logout(email);
        if(response.code === "logout"){
            setUser({});
            setLoggedIn(false);
            localStorage.removeItem("id");
        }
        return response;
    }, [])

    const registerUser = useCallback(async(userData) => {
        const response = await signup(userData);
        return response;
    },[])

    const setUserData = useCallback((userData) => setUser(userData), []);

    const value = useMemo(() => ({ authenticate, signout, user, setUserData,  registerUser, isLoggedIn }), [
        authenticate, user, setUserData, registerUser, isLoggedIn, signout
    ])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

export const useUser = () => useContext(UserContext);
