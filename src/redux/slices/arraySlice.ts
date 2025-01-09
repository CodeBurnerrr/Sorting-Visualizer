import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArrayState {
    value: number[];
}

const initialState: ArrayState = {
    value: [],
};

const arraySlice = createSlice({
    name: "array",
    initialState,
    reducers: {
        update: (state: ArrayState, action: PayloadAction<number[]>) => { // Match the type here
            state.value = action.payload;
        },
    },
});

export const { update } = arraySlice.actions;
export default arraySlice.reducer;
