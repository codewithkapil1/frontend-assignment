"use client";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cart.push(tempProduct);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    remove(state, action) {
      const nextCartItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = nextCartItems;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
