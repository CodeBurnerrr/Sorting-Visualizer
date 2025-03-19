import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface SortSelector {
    value: string;
}

const initialState: SortSelector = {
    value: "Bubble",
};

const sortSelectSlice = createSlice({
    name: "sortSelect",
    initialState,
    reducers: {
        change: (state, action: PayloadAction<string> ) => {
            state.value = action.payload;
        },
    },
});

export const { change } = sortSelectSlice.actions;
export default sortSelectSlice.reducer;
