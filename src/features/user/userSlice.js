/* import library */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

/* import modules */
import { registerUser } from '../../shared/api/registerUser';
import { loginUser } from '../../shared/api/loginUser';
import { authUser } from '../../shared/api/authUser';


const initialState = {
  userData: {
    userPk: '',
    userName: '',
    password: '',
    email: '',
    phoneNumber: '',
    address: '',
    profileImageUrl: '',
    isAdmin: false
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
      // 회원 가입시 액션 (pending-진행중, fulfilled-완료, rejected-거부)
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('회원가입을 성공했습니다.')
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error('회원가입에 실패했습니다.');
      })

      // 로그인시 액션
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        localStorage.setItem('accessToken', action.payload.token);
        // console.log("Access Token:", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error('로그인에 실패했습니다.');
      })

      // 인증 시 액션
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.userData = initialState.userData;
        state.isAuth = false;
        localStorage.removeItem('accessToken');
      })
  }
});

export default userSlice.reducer;
