"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  clearCart,
  deleteItem,
  increaseTotal,
} from "@/redux/features/cart-slice";
import styles from "@/styles/navbar/Cart.module.scss";

import CartHeader from "./cart/CartHeader";
import CartBody from "./cart/CartBody";
import CartFooter from "./cart/CartFooter";
import Purchase from "@/components/messages/Purchase";

interface PropsType {
  isOpen: boolean;
  handleCart: () => void;
}

export default function Cart(props: PropsType) {
  const { isOpen, handleCart } = props;
  const [isPurchase, setIsPurchase] = useState(false);
  const data = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(increaseTotal());
  }, [data]);

  function deleteCartItem(id: string) {
    //Db solution
    //...

    //Client solution
    dispatch(deleteItem(id));
  }

  function submitPurchase() {
    setIsPurchase(true);
  }

  function proceedPurchase() {
    //All external logic
    //...

    alert("For not being a real site, you can not buy this items.");
    dispatch(clearCart());
    setIsPurchase(false);
  }

  function cancelPurchase() {
    setIsPurchase(false);
  }

  return (
    <aside className={`${styles.cart} ${isOpen && styles.open}`}>
      <div className={styles.cart_container}>
        <CartHeader handleCart={handleCart} />

        {!data.cart.length ? (
          <div className={styles.cart_empty}>
            <p>You cart is empty.</p>
          </div>
        ) : (
          <>
            <CartBody data={data.cart} handleDelete={deleteCartItem} />
            <CartFooter total={data.total} handleSubmit={submitPurchase} />
          </>
        )}
      </div>

      {isPurchase && (
        <Purchase
          total={data.total}
          handleAgree={proceedPurchase}
          handleDesagree={cancelPurchase}
        />
      )}
    </aside>
  );
}
