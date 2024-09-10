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

export default function Item(props: PropsType) {
  const { product, handleItem } = props;
  const { defineMessage } = useContext(MessageContext);
  const [loading, setLoading] = useState<"normal" | "dotting">("normal");
  const state = useAppSelector((state) => state.cartReducer);

  function insertInCart() {
    setLoading("dotting");
    setTimeout(() => {
      if (thereIsInCart(state.cart, product)) {
        setLoading("normal");
        return defineMessage("This item is already in cart.");
      }

      handleItem({ ...product, quantity: 1 });
      setLoading("normal");
      defineMessage("Item add successfully.");
    }, 1500);
  }

  function thereIsInCart(arr: ProductType[], obj: ProductType) {
    return !!arr.filter((item) => item.id === obj.id).length;
  }

  return (
    <div className={styles.item} key={product.id}>
      <figure className={styles.item_image}>
        <Img src={product.images.src} />
      </figure>

      <section className={styles.item_info}>
        <div className={styles.info_wrapper}>
          <div className={styles.info_header}>
            <p className={styles.header_title}>{product.title}</p>
            <CartButton handleFunction={insertInCart} loadingState={loading} />
          </div>
          <div>
            <p>U$ {formatToDecimal(product.price, 2)}</p>
          </div>
          <div>
            <Rating rating={product.rating} />
          </div>
        </div>
      </section>
    </div>
  );
}
