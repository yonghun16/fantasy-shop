/* import library */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

/* import modules */
import { registerUser } from '../../store/thunkFunctions';


const initialState = {
  userData: {
    id: '',
    email: '',
    name: '',
    password: '',
    avatarImg: '',
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
        toast.success('회원가입을 성공했습니다.')
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error('회원가입에 실패했습니다.');
      });
  }
});

export default userSlice.reducer;
