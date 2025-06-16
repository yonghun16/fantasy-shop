import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../shared/api/axios";

// 로그인
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (body, thunkAPI) => {
    try {
      // console.log("body", JSON.stringify(body)); // 디버그용
      const response = await axiosInstance.post(
        "/users/login",
        JSON.stringify(body),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data // payload
    } catch (error) {
      console.log("login post error", error);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
