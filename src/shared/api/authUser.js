import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axios";

// 인증 확인
export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/users/me",
      );
      return response.data // payload
    } catch (error) {
      console.log("auth get error", error);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
