import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../shared/api/axios";

// 회원 가입
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      // console.log("body", JSON.stringify(body)); // 디버그용
      const response = await axiosInstance.post("/users/signup", body, {
        headers: { "Content-Type": "application/json", },
      });
      return response.data
    } catch (error) {
      const errorMessage = error?.response?.data || error.message || "Register failed";
      console.error("Login Error:", errorMessage);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
