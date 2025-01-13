import { createSlice } from "@reduxjs/toolkit";

interface OngoingState {
    value: boolean;
}

const initialState: OngoingState = {
    value: false,
};

const ongoingSlice = createSlice({
    name: "ongoing",
    initialState,
    reducers: {
        change: (state) => {
            state.value = !state.value;
        },
    },
});

export const { change } = ongoingSlice.actions;
export default ongoingSlice.reducer;
