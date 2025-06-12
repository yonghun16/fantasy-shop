import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../shared/api/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      // console.log("body", JSON.stringify(body)); // 디버그용
      const response = await axiosInstance.post(
        "/users/signup",
        JSON.stringify(body),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data     // payload
    } catch (error) {
      console.log("error1", error);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
