import { CartUserType } from "@/_types/CartType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitalStateType = {
  cart: CartUserType[];
  total: number;
};

import image1 from "@/assets/summer/pexels-jayrinho-17950873.jpg";
import image2 from "@/assets/summer/alexander-jawfox-zXa0Peaq30U-unsplash.jpg";
import image3 from "@/assets/summer/sule-makaroglu-BSOVhRtTH7c-unsplash.jpg";
import image4 from "@/assets/summer/matas-katinas-jYDRaDUfYsA-unsplash.jpg";
import image5 from "@/assets/summer/alexander-grey-NXom4fEGDes-unsplash.jpg";

const fakeCart = [
  {
    id: "1",
    title: "Lorem Ipsum Dolor Sit Amet",
    images: {
      src: image1,
      alt: "Lorem",
    },
    price: 39.9,
    quantity: 2,
    stock: 13,
    rating: {
      score: 4.7,
      votes: 1467,
    },
    description: "lorem",
  },
  {
    id: "2",
    title: "Lorem Ipsum Dolor Sit Amet",
    images: {
      src: image2,
      alt: "Lorem",
    },
    price: 39.9,
    quantity: 2,
    stock: 13,
    rating: {
      score: 3.1,
      votes: 1030,
    },
    description: "lorem",
  },
  {
    id: "3",
    title: "Lorem Ipsum Dolor Sit Amet",
    images: {
      src: image3,
      alt: "Lorem",
    },
    price: 39.9,
    quantity: 2,
    stock: 13,
    rating: {
      score: 1,
      votes: 10,
    },
    description: "lorem",
  },
  {
    id: "4",
    title: "Lorem Ipsum Dolor Sit Amet",
    images: {
      src: image4,
      alt: "Lorem",
    },
    price: 39.9,
    quantity: 2,
    stock: 13,
    rating: {
      score: 5,
      votes: 357,
    },
    description: "lorem",
  },
  {
    id: "5",
    title: "Lorem Ipsum Dolor Sit Amet",
    images: {
      src: image5,
      alt: "Lorem",
    },
    price: 39.9,
    quantity: 2,
    stock: 13,
    rating: {
      score: 5,
      votes: 354,
    },
    description: "lorem",
  },
];

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
