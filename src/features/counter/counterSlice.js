import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    increment: (state) => {
      state.value += 1;
    }
  }
});

// export action
export const { increment } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;
