import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";

// initial state
const initialState = {
  jobs: [],
  jobDetail: {},
  status: "idle" // loading, succeeded, failed
};

// fetch jobs
export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
  try {
    const res = await fetch(`${BASE_URL}jobs/`).then((res) => res.json());
    const jobs = await res;
    return jobs;
  } catch (error) {
    console.log("error", error);
  }
});

// fetch jobs
export const fetchJobById = createAsyncThunk("job/fetchJobById", async (id) => {
  try {
    const res = await fetch(`${BASE_URL}jobs/${id}/`).then((res) => res.json());
    const jobs = await res;
    return jobs;
  } catch (error) {
    console.log("error", error);
  }
});

// create slice
export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        console.log("action.payload", action?.payload?.results);
        state.status = "succeeded";
        state.jobs = action?.payload?.results;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchJobById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        // console.log("action.payload", action?.payload?.results);
        state.status = "succeeded";
        state.jobDetail = action?.payload;
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.status = "failed";
      });
  }
});

// export reducer
export default jobSlice.reducer;

// export selector
export const selectJobs = (state) => state.job.jobs;
// export const selectJobs = (state) => state.job.jobs;
