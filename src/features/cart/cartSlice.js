import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
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
    setCartItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  setCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
