import { combineReducers } from "@reduxjs/toolkit";

/* reducers */
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import companyReducer from "../features/company/companySlice";
import modalReducer from "../features/DetailProduct/modalSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  company: companyReducer,
  modal: modalReducer,
});

export default rootReducer;
