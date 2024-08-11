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
import { useUser } from "./userProvider";
import commentPost from "../services/commentPost";
import likePost from "../services/likePost";

const SocialPostContext = createContext();

export const SocialPostProvider = ({ children }) => {
    const [socialPosts, setSocialPosts] = useState([]);
    const {user} = useUser();

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
        await fetchPosts();
        return response;
    }, [])

    const commentPosts = useCallback(async(email,title, comment, commentBy) => {
        console.log(email,title,comment)
       if(email && title && comment && commentBy){
        const response = await commentPost(email, title, comment, commentBy);
        if(response.code === "socialPostExist")
            await fetchPosts()
        return response;    
       }
    },[])

    const likePosts = useCallback(async(email, title, like, likeBy) => {
        if(email && title && like && likeBy){
            const response = await likePost(email,title,like,likeBy);
            if(response.code === "socialPostLiked"){
                await fetchPosts();
            }
            return response;
        }
    },[])

    const value = useMemo(() => ({
        fetchPosts, socialPosts, fetchSocialPost, createPost, commentPosts, likePosts
    }), [fetchPosts, socialPosts, fetchSocialPost, createPost, commentPosts, likePosts])

    useEffect(() => {
       const fetch = async () => await fetchPosts()

       fetch() 
    }, [fetchPosts])

    return <SocialPostContext.Provider value={value}>{children}</SocialPostContext.Provider>
};

export const useSocialPost = () => useContext(SocialPostContext);
