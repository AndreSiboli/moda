"use client";

import { CartUserType } from "@/_types/CartType";
import { useRef, useState } from "react";
import { formatToDecimal } from "@/utils/formatter";
import styles from "@/styles/cards/CartCard.module.scss";

import Rating from "@/components/common/Rating";
import Quantity from "@/components/inputs/Quantity";
import Img from "@/components/utils/Img";

import { PiTrash } from "react-icons/pi";
import Confirm from "../messages/Confirm";

interface PropsType {
  data: CartUserType;
  handleDelete: (id: string) => void;
}

export default function CartCard(props: PropsType) {
  const { data, handleDelete } = props;
  const { id, images, title, price } = data;
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
    <div className={styles.card} ref={cardRef}>
      <figure className={styles.card_image}>
        <Img src={images.src} alt={images.alt} />
      </figure>

      <div className={styles.card_info}>
        <div className={styles.info_wrapper}>
          <div className={styles.info_some}>
            <p className={styles.info_title}>{title}</p>
            <div className={styles.card_delete}>
              <button
                className={styles.trash}
                onClick={() => setAreYouSure(true)}
              >
                <PiTrash />
              </button>
            </div>
          </div>
          <div>
            <Rating rating={data.rating} />
          </div>
          <p className={styles.info_stock}>stock: {data.stock}</p>
        </div>

        <div className={styles.info_buttons}>
          <p className={styles.info_price}>${formatToDecimal(price, 2)}</p>
          <Quantity data={data} />
        </div>
      </div>

      {areYouSure && (
        <Confirm
          title="Do you want to delete it?"
          text="This item will be removed from your cart. Are you sure?"
          handleAgree={deleteItem}
          handleDesagree={() => setAreYouSure(false)}
          isOpened={areYouSure}
        />
      )}
    </div>
  );
}
