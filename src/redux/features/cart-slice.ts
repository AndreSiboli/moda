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
      if (
        state.cart.some(
          (item) =>
            item.id === action.payload.id &&
            item.size.size === action.payload.size.size
        )
      )
        return;
      state.cart.push(action.payload);
    },
    deleteItem: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size.size === action.payload.size
          )
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number; size: string }>
    ) => {
      const increaseItem = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.size.size === action.payload.size
      );

      if (!increaseItem) return;
      increaseItem.quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.cart = [];
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
  updateQuantity,
  increaseTotal,
} = cart.actions;
export default cart.reducer;
