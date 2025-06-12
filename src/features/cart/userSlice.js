import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: '',
    email: '',
    name: '',
    password: '',
    image: '',
  },
  isAuth: false,
  isLogin: false,
  error: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {     // 비동기 액션 처리용 리듀서(ex createAsyncThunk)
    builder
      // 회원 가입시 통신상태 (pending-진행중, fulfilled-완료, rejected-거부)
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default userSlice.reducer;
