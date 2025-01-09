import {configureStore} from "@reduxjs/toolkit";
import lengthReducer from './slices/arrayLengthSlice.ts'
import arrayReducer from './slices/arraySlice.ts'

export  const store = configureStore({
    reducer: {
        length: lengthReducer,
        array: arrayReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;