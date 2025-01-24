import axios from 'axios';
import { AppDispatch } from '../../app/store';
import { setCourses, setCourseDetail, setIdUser } from './courseSlice';

export const fetchCourses = () => async (dispatch: AppDispatch) => {
    try {
        const token = localStorage.getItem('access_token'); // Ambil token dari localStorage
        const response = await axios.get('http://localhost:8000/api/course', {
            headers: {
                Authorization: `Bearer ${token}`, // Kirim token untuk autentikasi
            },
        });

        dispatch(setCourses(response.data.data)); // Simpan data ke Redux state
        dispatch(setIdUser(response.data.user));
    } catch (error) {
        console.error('Failed to fetch courses:', error);
    }
};

export const fetchDetailCourses = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const token = localStorage.getItem('access_token'); // Ambil token dari localStorage
        const response = await axios.get(`http://localhost:8000/api/course/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Kirim token untuk autentikasi
            },
        });

        dispatch(setCourseDetail(response.data.data)); // Simpan data ke Redux state
    } catch (error) {
        console.error('Failed to fetch courses:', error);
    }
};

export const addCourse = (courseData: any) => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem('access_token'); // Ambil token dari localStorage
    const response = await axios.post('http://localhost:8000/api/course', courseData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    // Setelah kursus berhasil ditambahkan, fetch daftar kursus terbaru
    dispatch(setCourses(response.data.data)); // Menyimpan kursus ke Redux store
  } catch (error) {
    console.error('Failed to add course:', error);
  }
};
