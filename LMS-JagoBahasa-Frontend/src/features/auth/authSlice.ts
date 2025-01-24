import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    user: {
        id: number;
        name: string;
    } | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('access_token'),
    isAuthenticated: !!localStorage.getItem('access_token'),
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('access_token', action.payload);
        },
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('access_token');
        },
        setUser: (state, action: PayloadAction<{ id: number; name: string }>) => {
            state.user = action.payload; // Simpan user ke state
        },
    },
});

export const { loginSuccess, logoutSuccess, setUser } = authSlice.actions;

export default authSlice.reducer;
