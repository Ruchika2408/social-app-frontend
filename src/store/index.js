// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import socialPostReducer from './socialPostSlice';
import userReducer from './userSlice'; // Assuming you have a user slice

const store = configureStore({
    reducer: {
        socialPosts: socialPostReducer,
        user: userReducer // Add user reducer
    }
});

export default store;
