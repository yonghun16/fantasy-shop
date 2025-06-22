import { createTransform } from 'redux-persist';
import { initialState as userInitialState } from '../features/user/userSlice';

// 커스텀 Transform 생성
const userTransform = createTransform(
  // 저장할 때
  (inboundState, key) => {
    return {
      userData: {
        userPk: inboundState.userData.userPk,
        isAdmin: inboundState.userData.isAdmin,
      },
      isAuth: inboundState.isAuth,
    };
  },
  // 불러올 때
  (outboundState, key) => {
    return {
      ...userInitialState,
      ...outboundState,
      userData: {
        ...userInitialState.userData,
        ...outboundState.userData,
      }
    };
  },
  { whitelist: ['user'] }  // 이 slice 이름이 store에서 'user'로 등록되어 있어야 함
);

export default userTransform;
