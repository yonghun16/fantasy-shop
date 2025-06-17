import { combineReducers } from "@reduxjs/toolkit";

/* reducers */
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
