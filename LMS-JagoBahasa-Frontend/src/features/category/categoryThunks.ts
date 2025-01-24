import axios from 'axios';
import { AppDispatch } from '../../app/store';
import { setCategories } from './categorySlice';

export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get('http://localhost:8000/api/get-data-category');

        dispatch(setCategories(response.data.data));
    } catch (error) {
        console.error('Failed to fetch categories:', error);
    }
};