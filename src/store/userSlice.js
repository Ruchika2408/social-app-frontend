import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import login from '../services/login';
import findUser from '../services/getUser';
import logout from '../services/logout';
import signup from '../services/signup';
import forgetPassword from '../services/forgetPassword';

// Thunks
export const authenticate = createAsyncThunk(
  'user/authenticate',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      if (response.code === 'loggedIn') {
        localStorage.setItem('id', email);
        const userData = await findUser(email);
        if (userData.code === 'userExist') {
          return userData.user;
        } else {
          throw new Error('User not found');
        }
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signout = createAsyncThunk(
  'user/signout',
  async (email, { rejectWithValue }) => {
    try {
      const response = await logout(email);
      if (response.code === 'logout') {
        localStorage.removeItem('id');
        return {};
      } else {
        throw new Error('Signout failed');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, { rejectWithValue }) => {
      try {
        const response = await signup(userData);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (email, { rejectWithValue }) => {
      try {
        // Your API call here
        const response = await findUser(email); // Ensure findUser is correctly implemented
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const forgetPasswordThunk = createAsyncThunk(
    'user/forgetPassword',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        // Your API call here
        const response = await forgetPassword(email, password);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

// User Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUserData: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(signout.fulfilled, (state) => {
        state.user = {};
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

// Selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
