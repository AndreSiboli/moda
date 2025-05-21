"use client";

import { MouseEvent, useState } from "react";
import { ProductType } from "@/_types/ProductsType";
import { formatToDecimal } from "@/utils/formatter";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addToCart } from "@/utils/CartManager";
import styles from "@/styles/cards/ProductCard.module.scss";

import Img from "@/components/utils/Img";
import Link from "next/link";

interface PropsType {
  product: ProductType;
  isBlocking: boolean;
  handleBlockingTime: (is: boolean) => void;
}

export default function ProductCard(props: PropsType) {
  const { product, isBlocking, handleBlockingTime } = props;
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState("");
  const state = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  async function insertInCart(e: MouseEvent<HTMLButtonElement>, size: string) {
    e.preventDefault();
    e.stopPropagation();

    if (isBlocking) return;
    handleBlockingTime(true);

    try {
      const solved = await addToCart(state.cart, dispatch, product, size);
      setMessage(solved);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setMessage(errorMessage);
    } finally {
      setIsMessage(true);
      animatingMessage();
    }
  }

  function animatingMessage() {
    setTimeout(() => {
      setIsMessage(false);
      setTimeout(() => {
        setMessage("");
        handleBlockingTime(false);
      }, 150);
    }, 1500);
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className={`${styles.product} ${isBlocking ? styles.loading : ""}`}
    >
      <section className={styles.product_wrapper}>
        <figure className={styles.product_image}>
          <Img
            src={product.thumbnail.src}
            alt={product.thumbnail.alt}
            loading="lazy"
          />
        </figure>

        <div className={styles.info_sizes}>
          {product.sizes.map((size) => (
            <button
              onClick={(e) => insertInCart(e, size.size)}
              key={size.size}
              disabled={size.stock === 0}
              aria-label={`Select size ${size.size}`}
            >
              {size.size}
            </button>
          ))}
        </div>

        <div
          className={`${styles.product_message} ${
            isMessage ? styles.active : ""
          }`}
        >
          <p>{message}</p>
        </div>
      </section>

      <section className={styles.product_info}>
        <footer className={styles.info_footer}>
          <p className={styles.footer_title}>{product.title}</p>
          <p className={styles.footer_price}>
            U$ {formatToDecimal(product.price, 2)}
          </p>
        </footer>
      </section>
    </Link>
  );
}
