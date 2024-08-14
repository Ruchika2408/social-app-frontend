import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getSocialPosts from '../services/socialPosts';
import createSocialPost from '../services/createPost';
import commentPost from '../services/commentPost';
import likePost from '../services/likePost';
import verifySocialPost from '../services/verifyPost';

export const fetchSocialPosts = createAsyncThunk(
  'socialPost/fetchSocialPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSocialPosts();
      if (response.code === 'socialPostsExist') {
        return response.socialPosts.posts;
      } else {
        throw new Error('Failed to fetch posts');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  'socialPost/createPost',
  async (post, { rejectWithValue }) => {
    try {
      const response = await createSocialPost(post);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const commentPosts = createAsyncThunk(
  'socialPost/commentPosts',
  async ({ email, title, comment, commentBy }, { rejectWithValue }) => {
    try {
      const response = await commentPost(email, title, comment, commentBy);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const likePosts = createAsyncThunk(
  'socialPost/likePosts',
  async ({ email, title, like, likeBy }, { rejectWithValue }) => {
    try {
      const response = await likePost(email, title, like, likeBy);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyPost = createAsyncThunk(
  'socialPost/verifyPost',
  async (post, { rejectWithValue }) => {
    try {
      const response = await verifySocialPost(post);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const socialPostSlice = createSlice({
  name: 'socialPost',
  initialState: {
    posts: [],
    currentPost: {
      email: '',
      title: "",
      description: "",
      imgUrl: "",
      time: "",
      comments: [],
      likes: []
    },
  },
  reducers: {
    setSocialPosts: (state, action) => {
      state.posts = action.payload
    },
    setCurrentPost: (state,action) => {
      console.log(action.payload)
      state.currentPost= action.payload
    },
    clearCurrentPost: (state) => {
      state.currentPost = {}
    }
  },
});

export const {setCurrentPost, setSocialPosts, clearCurrentPost} = socialPostSlice.actions;

export default socialPostSlice.reducer;
