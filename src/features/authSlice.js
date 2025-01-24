import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login action: Sets the user and marks as authenticated
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // This is the user data (like email or username)
    },
    // Logout action: Resets authentication state
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Export actions for dispatching login/logout
export const { login, logout } = authSlice.actions;

// Export reducer to be added to the store
export default authSlice.reducer;
