import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_PROFILE } from "../../constants/actionTypes";
import { apiService } from "../../services/apiService";

export const getUserProfile = createAsyncThunk(
  USER_PROFILE,
  async (token, { rejectWithValue }) => {
    try {
      const response = await apiService.getCall("users/profile", token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
