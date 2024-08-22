import { CartUserType } from "@/_types/CartType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { summer } from "@/fake-api/products";

type InitalStateType = {
  cart: CartUserType[];
  total: number;
};

const fakeCart = summer.map((item) => ({ ...item, quantity: 1 }));

const initialState = {
  cart: fakeCart as CartUserType[],
  total: 0,
} as InitalStateType;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItems: (state) => {
      return state;
    },
    insertItem: (state, action: PayloadAction<CartUserType>) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseItem: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const increaseItem = state.cart.filter(
        (item) => item.id === action.payload.id
      )[0];

      increaseItem.quantity = action.payload.quantity;
    },
    increaseTotal: (state) => {
      const total = state.cart.reduce(
        (prev, curr) => prev + curr.price * curr.quantity,
        0
      );
      state.total = parseFloat(total.toFixed(2));
    },
  },
});

export const {
  getItems,
  insertItem,
  deleteItem,
  clearCart,
  increaseItem,
  increaseTotal,
} = cart.actions;
export default cart.reducer;
