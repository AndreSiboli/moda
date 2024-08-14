"use client";

import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  clearCart,
  deleteItem,
  increaseTotal,
} from "@/redux/features/cart-slice";
import styles from "@/styles/Navbar/Cart.module.scss";

import Submit from "@/components/buttons/Submit";

import { PiX } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

import { formatToDecimal } from "@/utils/formatter";

import CartCard from "../cards/CartCard";

import Purchase from "../messages/Purchase";
import { useRouter } from "next/navigation";

interface PropsType {
  isOpen: boolean;
  handleCart: () => void;
}

export default function Cart(props: PropsType) {
  const { isOpen, handleCart } = props;
  const data = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [isPurchase, setIsPurchase] = useState(false);

  useEffect(() => {
    changeTotal();
  }, []);

  function changeTotal() {
    dispatch(increaseTotal());
  }

  function deleteCartItem(id: string) {
    //Db solution
    //...

    //Client solution
    dispatch(deleteItem(id));
    changeTotal();
  }

  function submit() {
    setIsPurchase(true);
  }

  function proceedPurchase() {
    //All external logic
    //...

    alert("For not being a real site, you can not buy this items.");
    dispatch(clearCart());
    changeTotal();
    setIsPurchase(false);
  }

  function cancelPurchase() {
    setIsPurchase(false);
  }

  return (
    <aside className={`${styles.cart} ${isOpen && styles.open}`}>
      <div className={styles.cart_container}>
        <header className={styles.cart_header}>
          <div className={styles.header_button}>
            <button onClick={handleCart}>
              <PiX />
            </button>
          </div>
          <div className={styles.header_title}>
            <p>Your Cart</p>
          </div>
        </header>

        <div className={styles.cart_body}>
          <section className={styles.body_items}>
            {data.cart.map((item) => (
              <CartCard
                data={item}
                handleDelete={deleteCartItem}
                key={item.id}
              />
            ))}
          </section>
        </div>

        <footer className={styles.cart_footer}>
          <div className={styles.footer_total}>
            <p>Order Total:</p>
            <p>${formatToDecimal(data.total, 2)}</p>
          </div>

          <div className={styles.footer_button}>
            <Submit text="Confirm Order" handleSubmit={submit} />
          </div>
        </footer>
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
