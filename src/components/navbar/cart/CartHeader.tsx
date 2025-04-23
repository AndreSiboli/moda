import styles from "@/styles/navbar/cart/CartHeader.module.scss";
import { PiX } from "react-icons/pi";

interface PropsType {
  handleCart: VoidFunction;
}

export default function CartHeader(props: PropsType) {
  const { handleCart } = props;

  return (
    <header className={styles.header}>
      <div className={styles.header_button}>
        <button onClick={handleCart} aria-label="Close cart">
          <PiX />
        </button>
      </div>
      <div className={styles.header_title}>
        <p>Your Cart</p>
      </div>
    </header>
  );
}
