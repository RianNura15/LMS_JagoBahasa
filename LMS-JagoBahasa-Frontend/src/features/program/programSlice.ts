import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Program {
    id: number;
    title: string;
    description: string;
}

interface ProgramState {
    programs: Program[];
}

const initialState: ProgramState = {
    programs: [],
};

const programsSlice = createSlice({
    name: 'programs',
    initialState,
    reducers: {
        setPrograms: (state, action: PayloadAction<Program[]>) => {
            state.programs = action.payload;
        },
    },
});

export const { setPrograms } = programsSlice.actions;
export default programsSlice.reducer;
