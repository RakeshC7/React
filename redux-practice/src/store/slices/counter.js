import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        // Actions
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;


