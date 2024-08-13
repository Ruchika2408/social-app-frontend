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
        return response.socialPosts;
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
    socialPosts: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialPosts.fulfilled, (state, action) => {
        state.socialPosts = action.payload;
        state.error = null;
      })
      .addCase(fetchSocialPosts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        // Handle post creation
        state.error = null;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(commentPosts.fulfilled, (state, action) => {
        // Handle commenting on posts
        state.error = null;
      })
      .addCase(commentPosts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(likePosts.fulfilled, (state, action) => {
        // Handle liking posts
        state.error = null;
      })
      .addCase(likePosts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(verifyPost.fulfilled, (state, action) => {
        // Handle post verification
        state.error = null;
      })
      .addCase(verifyPost.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default socialPostSlice.reducer;
