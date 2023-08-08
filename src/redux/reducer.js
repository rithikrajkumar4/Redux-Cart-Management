import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const isitemExist = state.cartItems.find((i) => i.id === item.id);
      if (isitemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    calculatePrice(state) {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.shipping =
        state.subTotal === 0 ? 0 : state.subTotal > 1000 ? 0 : 200;
      state.total =
        parseInt(state.subTotal) +
        parseFloat(state.tax) +
        parseInt(state.shipping);
    },
  },
});
export const { addToCart, decrement, deleteFromCart, calculatePrice } =
  cartSlice.actions;
export default cartSlice.reducer;
