import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axios";

// 인증 확인
export const loginUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/users/auth",
      );
      return response.data // payload
    } catch (error) {
      console.log("login post error", error);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
