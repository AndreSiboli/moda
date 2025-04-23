"use client";

import { useContext, useState } from "react";
import { ProductType } from "@/_types/ProductsType";
import { CartUserType } from "@/_types/CartType";
import { formatToDecimal } from "@/utils/formatter";
import { MessageContext } from "@/context/Message";
import { useAppSelector } from "@/redux/store";
import styles from "@/styles/layout/Item.module.scss";

import CartButton from "@/components/buttons/CartButton";
import Img from "@/components/utils/Img";
import Rating from "@/components/layout/Rating";

interface PropsType {
  product: ProductType;
  handleItem: (prop: CartUserType) => void;
}

export default function Product(props: PropsType) {
  const { product, handleItem } = props;
  const { defineMessage } = useContext(MessageContext);
  const [isLoading, setIsLoading] = useState(false);
  const state = useAppSelector((state) => state.cartReducer);

  function insertInCart() {
    const insert = () => {
      if (isThereInCart(state.cart, product)) {
        setIsLoading(false);
        return defineMessage({
          title: "You can't do this action.",
          message: "This item is already in cart.",
          type: "error",
        });
      }

      handleItem({ ...product, quantity: 1 });
      setIsLoading(false);
      defineMessage({
        title: "Added to cart.",
        message: "Item added successfully.",
        type: "success",
      });
    };
    setIsLoading(true);
    simulateDelay(insert);
  }

  function isThereInCart(arr: ProductType[], obj: ProductType) {
    return arr.some((item) => item.id === obj.id);
  }

  function simulateDelay(callback: VoidFunction) {
    setTimeout(() => {
      callback();
    }, 1000);
  }

  return (
    <div className={styles.product}>
      <figure className={styles.product_image}>
        <Img src={product.images.src} loading="lazy" />
      </figure>

      <section className={styles.product_info}>
        <div className={styles.info_wrapper}>
          <div className={styles.info_header}>
            <p className={styles.header_title}>{product.title}</p>
            <p>U$ {formatToDecimal(product.price, 2)}</p>
            <p>Stock: {product.stock}</p>
            <Rating rating={product.rating} />
          </div>

          <div className={styles.info_button}>
            <CartButton onClick={insertInCart} isLoading={isLoading} />
          </div>
        </div>
      </section>
    </div>
  );
}
