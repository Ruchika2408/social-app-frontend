import {
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
    useEffect,
} from "react";
import getSocialPost from "../services/getSocialPost";
import createSocialPost from "../services/createPost";
import getSocialPosts from "../services/socialPosts";

const SocialPostContext = createContext();

export const SocialPostProvider = ({ children }) => {
    const [socialPosts, setSocialPosts] = useState([]);

    const fetchPosts = useCallback(async () => {
        const response = await getSocialPosts();
        console.log(response);
        if (response.code === "socialPostsExist") {
            console.log("check", response.socialPosts)
            setSocialPosts(response.socialPosts);
        }
        return response;
    },[])

    const createPost = useCallback(async( post) => {
        const response = await createSocialPost(post);
         if(response.code === "socialPostCreated"){
             await fetchPosts();
         }
        return response;
    }, [fetchPosts])

    const fetchSocialPost = useCallback(async (email, title) => {
        const response = await getSocialPost(email, title);
        return response;
    }, [])

    const value = useMemo(() => ({
        fetchPosts, socialPosts, fetchSocialPost, createPost
    }), [fetchPosts, socialPosts, fetchSocialPost, createPost])

    useEffect(() => {
       const fetch = async () => await fetchPosts()

       fetch()
    }, [fetchPosts])

    return <SocialPostContext.Provider value={value}>{children}</SocialPostContext.Provider>
};

export const useSocialPost = () => useContext(SocialPostContext);
