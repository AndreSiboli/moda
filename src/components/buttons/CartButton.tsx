import styles from "@/styles/buttons/CartButton.module.scss";
import { ComponentProps } from "react";
import { PiBag } from "react-icons/pi";

interface PropsType extends ComponentProps<"button"> {
  isLoading: boolean;
}

export default function CartButton(props: PropsType) {
  const { isLoading, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${styles.button} ${isLoading && styles.loading}`}
      aria-label="Add to cart"
    >
      <PiBag />

      <div className={styles.button_loading}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </button>
  );
}
