import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";

// initial state
const initialState = {
  categories: [],
  status: "idle" // loading, succeeded, failed
};

// fetch categories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    try {
      const res = await fetch(`${BASE_URL}job_categories/`).then((res) =>
        res.json()
      );
      const categories = await res;
      console.log("category in fetch function", categories);
      return categories;
    } catch (error) {
      console.log("error", error);
    }
  }
);

// create slice
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        console.log("action.payload category", action?.payload);
        state.status = "succeeded";
        state.categories = action?.payload?.results;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export default categorySlice.reducer;
