import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../assets/images/test-item1.png";
import img2 from "../../assets/images/test-itme2.png";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      { id: 1, name: "sword 1", price: 29000, quantity: 2, imageUrl: img1 },
      { id: 2, name: "sword 2", price: 150000, quantity: 1, imageUrl: img2 },
    ],
  },

  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) existing.quantity += item.quantity;
      else state.items.push({ ...item });
    },
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCart(state, action) {
      state.items = action.payload;
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  setCart,
} = cartSlice.actions;
export default cartSlice.reducer;
