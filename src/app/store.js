import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import jobSlice from "../features/job/jobSlice";

export const store = configureStore({
  reducer: {
    counterR: counterSlice,
    jobR: jobSlice
  }
});
