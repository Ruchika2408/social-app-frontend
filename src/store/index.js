// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import socialPostReducer from './socialPostSlice';
import userReducer from './userSlice'; // Assuming you have a user slice
import advertisementReducer from "./advertisementSlice";

const store = configureStore({
    reducer: {
        socialPosts: socialPostReducer,
        user: userReducer, // Add user reducer
        advertisementData: advertisementReducer
    }
});

export default store;
