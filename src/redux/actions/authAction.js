import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOGIN, USER_REGISTER } from "../../constants/actionTypes";
import { authService } from "../../services/authService";

export const loginUser = createAsyncThunk(
  USER_LOGIN,
  async (data, { rejectWithValue }) => {
    try {
      const response = await authService.login(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
