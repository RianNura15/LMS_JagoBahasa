import axios from 'axios';
import { AppDispatch } from '../../app/store';
import { setPrograms } from './programSlice';

export const fetchPrograms = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get('http://localhost:8000/api/get-data-program');

        dispatch(setPrograms(response.data.data));
    } catch (error) {
        console.error('Failed to fetch categories:', error);
    }
};