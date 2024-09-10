import { CartUserType } from "@/_types/CartType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitalStateType = {
  cart: CartUserType[];
  total: number;
};

const initialState = {
  cart: [] as CartUserType[],
  total: 0,
} as InitalStateType;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertItem: (state, action: PayloadAction<CartUserType>) => {
      if (state.cart.filter((item) => item.id === action.payload.id).length)
        return;
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
  insertItem,
  deleteItem,
  clearCart,
  increaseItem,
  increaseTotal,
} = cart.actions;
export default cart.reducer;
