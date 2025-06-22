import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../shared/api/axios";

// 로그인 API
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (body, thunkAPI) => {
    try {
      // console.log("body", JSON.stringify(body)); // debug
      const response = await axiosInstance.post("/users/login", body, {
        headers: { "Content-Type": "application/json", },
      });
      return response.data
    } catch (error) {
      const errorMessage = error?.response?.data || error.message || "Login failed";
      console.error("Login Error:", errorMessage);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
