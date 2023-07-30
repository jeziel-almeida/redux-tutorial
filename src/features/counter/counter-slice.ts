import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface typeState {
    value: number
}

const initialState: typeState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementAmout: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})

export const {increment, incrementAmout} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;