import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateCartItems } from "../../shared/api/cart";

// 수량 증가 Thunk
export const increaseQuantityAsync = createAsyncThunk(
  "cart/increaseQuantityAsync",
  async (item, { rejectwitValue }) => {
    try {
      const newQuantity = item.quantity + 1;
      await updateCartItems([{ cartPk: item.cartPk, quantity: newQuantity }]);
      return { cartPk: item.cartPk, quantity: newQuantity };
    } catch (err) {
      console.error("수량 증가 실패", err);
      return rejectwitValue(err.response?.data || err.message);
    }
  }
);

// 수량 감소 Thunk
export const decreaseQuantityAsync = createAsyncThunk(
  "cart/decreaseQuantityAsync",
  async (item, { rejectwitValue }) => {
    try {
      const newQuantity = item.quantity - 1;
      if (newQuantity < 1) return rejectwitValue("최소 수량은 1개입니다.");
      await updateCartItems([{ cartPk: item.cartPk, quantity: newQuantity }]);
      return { cartPk: item.cartPk, quantity: newQuantity };
    } catch (err) {
      console.error("수량 감소 실패", err);
      return rejectwitValue(err.response?.data || err.message);
    }
  }
);
