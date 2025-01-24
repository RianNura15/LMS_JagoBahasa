import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
    id: number;
    title: string;
    description: string;
}

interface Program {
    id: number;
    title: string;
    description: string;
}

interface User {
    id: number;
    name: string;
    role: string;
}

interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    level: string;
    thumbnail: string;
    programs: Program;
    categories: Category;
    users: User;
}

interface CourseState {
    courses: Course[];
    courseDetail: Course | null;
    idUser: number | null;
}

const initialState: CourseState = {
    courses: [],
    courseDetail: null,
    idUser: null,
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourses: (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload;
        },
        setCourseDetail: (state, action: PayloadAction<Course>) => {
            state.courseDetail = action.payload;
        },
        setIdUser: (state, action: PayloadAction<number>) => {
            state.idUser = action.payload; // Simpan idUser
        },
    },
});

export const { setCourses, setCourseDetail, setIdUser } = courseSlice.actions;
export default courseSlice.reducer;
