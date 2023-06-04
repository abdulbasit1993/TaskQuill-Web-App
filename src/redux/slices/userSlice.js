import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../actions/userAction";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      (state.isLoading = false),
        (state.isSuccess = true),
        (state.data = payload);
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      (state.isLoading = false),
        (state.isSuccess = false),
        (state.errorMessage = payload);
    },
  },
});

export default userSlice.reducer;
