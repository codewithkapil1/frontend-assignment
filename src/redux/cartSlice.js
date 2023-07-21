"use client";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cart.push(action.payload);
    },
    remove(state, action) {
      const nextCartItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = nextCartItems;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
