import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Compare {
    i: number | null;
    j: number | null;
}

interface ArrayValue {
    arr: { value: number; id: string, style:string }[];
    compare: Compare;
    sorted: number[];
}

interface ArrayState {
    value: ArrayValue;
}

const initialState: ArrayState = {
    value: {
        arr: [],
        compare: {
            i: null,
            j: null,
        },
        sorted: [],
    },
};

const arraySlice = createSlice({
    name: "array",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<ArrayValue>) => {
            state.value = action.payload;
        },
    },
});

export const { update } = arraySlice.actions;
export default arraySlice.reducer;
