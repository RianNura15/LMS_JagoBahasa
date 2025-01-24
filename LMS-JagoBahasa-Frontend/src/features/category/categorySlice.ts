import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
    id: number;
    title: string;
    description: string;
}

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
