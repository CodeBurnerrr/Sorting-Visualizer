import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LengthState {
    value: number;
}

const initialState: LengthState = {
    value: 50,
};

const lengthSlice = createSlice({
    name: "length",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
});

export const { update } = lengthSlice.actions;
export default lengthSlice.reducer;
