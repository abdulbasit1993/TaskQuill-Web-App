import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authAction";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      (state.isLoading = false),
        (state.isSuccess = true),
        (state.data = payload);
    },
    [loginUser.rejected]: (state, { payload }) => {
      (state.isLoading = false),
        (state.isSuccess = false),
        (state.errorMessage = payload);
    },
  },
});

export default loginSlice.reducer;
