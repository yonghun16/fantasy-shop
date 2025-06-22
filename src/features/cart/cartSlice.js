import { createSlice } from "@reduxjs/toolkit";
import { decreaseQuantityAsync, increaseQuantityAsync } from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isLoading: false,
  },

  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.cartPk === item.cartPk);
      if (existing) existing.quantity += item.quantity;
      else state.items.push({ ...item });
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        (item) => item.cartPk !== action.payload
      );
    },
    setCartItems(state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    setCartLoading(state, action) {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(increaseQuantityAsync.fulfilled, (state, action) => {
        const { cartPk, quantity } = action.payload;
        const item = state.items.find((i) => i.cartPk === cartPk);
        if (item) item.quantity = quantity;
      })
      .addCase(decreaseQuantityAsync.fulfilled, (state, action) => {
        const { cartPk, quantity } = action.payload;
        const item = state.items.find((i) => i.cartPk === cartPk);
        if (item) item.quantity = quantity;
      });
  },
});

export const { addItem, deleteItem, setCartItems, setCartLoading } =
  cartSlice.actions;
export default cartSlice.reducer;
