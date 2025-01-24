import { AppDispatch } from '../../app/store';
import axios from 'axios';
import { loginSuccess, logoutSuccess, setUser } from './authSlice';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:8000/api/login', {
            email,
            password,
        });

        const token = response.data.access_token;
        localStorage.setItem('access_token', token);
        dispatch(loginSuccess(token));
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login gagal.');
    }
};

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        const token = localStorage.getItem('access_token');

        if (!token) {
            throw new Error('No token found');
        }

        await axios.post(
            'http://localhost:8000/api/logout',
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        dispatch(logoutSuccess());
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

export const fetchUserData = () => async (dispatch: AppDispatch, getState: any) => {
    const { auth } = getState();
    const token = auth.token;

    if (token) {
        try {
            const response = await axios.get('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(setUser(response.data)); // Simpan data user ke Redux
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    }
};
