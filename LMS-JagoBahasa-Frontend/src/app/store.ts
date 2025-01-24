import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import courseReducer from '../features/course/courseSlice';
import programReducer from '../features/program/programSlice';
import categoryReducer from '../features/category/categorySlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        program: programReducer,
        category: categoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
