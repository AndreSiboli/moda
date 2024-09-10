"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatToDecimal } from "@/utils/formatter";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  clearCart,
  deleteItem,
  increaseTotal,
} from "@/redux/features/cart-slice";
import styles from "@/styles/Navbar/Cart.module.scss";

import Submit from "@/components/buttons/Submit";
import CartCard from "@/components/cards/CartCard";
import Purchase from "@/components/messages/Purchase";

import { PiX } from "react-icons/pi";
import { CartUserType } from "@/_types/CartType";

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
    dispatch(increaseTotal());
  }, [data]);

  function deleteCartItem(id: string) {
    //Db solution
    //...

    //Client solution
    dispatch(deleteItem(id));
  }

  function submit() {
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

        {!data.cart.length ? (
          <div className={styles.cart_empty}>
            <p>You cart is empty.</p>
          </div>
        ) : (
          <>
            <CartBody data={data.cart} handleDelete={deleteCartItem} />
            <CartFooter total={data.total} handleSubmit={submit} />
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

interface CartBodyType {
  data: CartUserType[];
  handleDelete: (id: string) => void;
}

function CartBody(props: CartBodyType) {
  const { data, handleDelete } = props;

  return (
    <div className={styles.cart_body}>
      <section className={styles.body_items}>
        {data.map((item) => (
          <CartCard
            data={item}
            handleDelete={() => handleDelete(item.id)}
            key={item.id}
          />
        ))}
      </section>
    </div>
  );
}

interface CartFooterType {
  total: number;
  handleSubmit: () => void;
}

function CartFooter(props: CartFooterType) {
  const { total, handleSubmit } = props;
  return (
    <footer className={styles.cart_footer}>
      <div className={styles.footer_total}>
        <p>Order Total:</p>
        <p>${formatToDecimal(total, 2)}</p>
      </div>

      <div className={styles.footer_button}>
        <Submit text="Confirm Order" handleSubmit={handleSubmit} />
      </div>
    </footer>
  );
}
