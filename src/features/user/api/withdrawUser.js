import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../shared/api/axios";

// 회원 탈퇴 API 
export const withdrawUser = createAsyncThunk(
  "user/withdrawUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.delete("/users/withdraw", {
        headers: { "Content-Type": "application/json", },
      });
      return response.data // payload
    } catch (error) {
      console.log("Withdraw error", error);
      return thunkAPI.rejectWithValue(error.response.data || error.message)
    }
  }
)
