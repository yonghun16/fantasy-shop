import { combineReducers } from "@reduxjs/toolkit";

/* reducers */
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import companyReducer from "../features/company/companySlice";
import modalReducer from "../features/modal/modalSlice";
import chatReducer from "../features/gemini/chatSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  company: companyReducer,
  modal: modalReducer,
  chat: chatReducer,
});

export default rootReducer;
