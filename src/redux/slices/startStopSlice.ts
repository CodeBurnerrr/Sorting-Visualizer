import {createSlice} from "@reduxjs/toolkit";

interface startStop{
    value: boolean;
}

const initialState: startStop = {
    value: false,
}

const startStopSlice = createSlice({
    name: "startStop",
    initialState,
    reducers: {
        change : (state)=>{
            state.value = !state.value;
        }
    }
})

export const {change} = startStopSlice.actions;
export default startStopSlice.reducer;