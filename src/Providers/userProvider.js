import {
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
    useEffect,
} from "react";

import login from "../services/login";
import findUser from "../services/getUser";
import signup from "../services/signup";
import logout from "../services/logout";
import forgetPassword from "../services/forgetPassword";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);

    const fetchUser = useCallback(async (email) => {
        const response = await findUser(email);
        console.log(response);
        if(response.code === "userExist"){
            setLoggedIn(true)
            setUser(response.user)
        }
            else setLoggedIn(false);
        return response;
    }, []);

    const authenticate = useCallback(async (email, password) => {
        const response = await login(email, password);
        if (response.code === "loggedIn") {
            localStorage.setItem("id", email);
            setLoggedIn(true);
            const userData = await fetchUser(email);
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
    }, [fetchUser])

    const signout = useCallback(async (email) => {
        const response = await logout(email);
        if (response.code === "logout") {
            setUser({});
            setLoggedIn(false);
            localStorage.removeItem("id");
        }
        return response;
    }, [])

    const forgetpassword = useCallback(async (email, newPassword) => {
        const response = await forgetPassword(email, newPassword);
        return response;
    }, [])

    const registerUser = useCallback(async (userData) => {
        const response = await signup(userData);
        return response;
    }, [])

    const setUserData = useCallback((userData) => setUser(userData), []);

    const value = useMemo(() => ({ authenticate, signout, user, setUserData, fetchUser, forgetpassword, registerUser, isLoggedIn }), [
        authenticate, user, setUserData, registerUser, isLoggedIn, signout, fetchUser, forgetpassword
    ])

    useEffect(() => {
        const email = localStorage.getItem("id");
        console.log(email);
        const getUser = async () => {
            if (email) {
                await fetchUser(email)
            }
        }
        getUser()
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

export const useUser = () => useContext(UserContext);
