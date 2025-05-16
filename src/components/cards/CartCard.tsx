"use client";

import { CartUserType } from "@/_types/CartType";
import { useRef, useState } from "react";
import { formatToDecimal } from "@/utils/formatter";
import styles from "@/styles/cards/CartCard.module.scss";

import Rating from "@/components/common/Rating";
import Quantity from "@/components/inputs/Quantity";
import Confirm from "../messages/Confirm";
import Img from "@/components/utils/Img";

import { PiTrash } from "react-icons/pi";

interface PropsType {
  data: CartUserType;
  handleDelete: (id: string) => void;
}

export default function CartCard(props: PropsType) {
  const { data, handleDelete } = props;
  const { id, thumbnail, title, price } = data;
  const [areYouSure, setAreYouSure] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  function deleteItem() {
    if (!cardRef.current) return;
    cardRef.current.className = `${styles.card} ${styles.deleted}`;

    cardRef.current.addEventListener("transitionend", () => handleDelete(id), {
      once: true,
    });
  }

  return (
    <article className={styles.card} ref={cardRef}>
      <figure className={styles.card_image}>
        <Img src={thumbnail.src} alt={thumbnail.alt} />
      </figure>

      <section className={styles.card_info}>
        <div className={styles.info_wrapper}>
          <header className={styles.info_header}>
            <div className={styles.header_title}>
              <h2>{title}</h2>
            </div>

            <div className={styles.header_delete}>
              <button
                className={styles.trash}
                onClick={() => setAreYouSure(true)}
                aria-label="Delete item"
              >
                <PiTrash />
              </button>
            </div>
          </header>

          <Rating rating={data.rating} />

          <section className={styles.info_sizes}>
            <p>Size: {data.size.size}</p>
            <p>Stock: {data.size.stock}</p>
          </section>
        </div>

        <footer className={styles.info_footer}>
          <div className={styles.footer_price}>
            <p>${formatToDecimal(price, 2)}</p>
          </div>
          <Quantity data={data} />
        </footer>
      </section>

      {areYouSure && (
        <Confirm
          title="Do you want to delete it?"
          text="This item will be removed from your cart. Are you sure?"
          handleAgree={deleteItem}
          handleDesagree={() => setAreYouSure(false)}
          isOpened={areYouSure}
        />
      )}
    </article>
  );
}
