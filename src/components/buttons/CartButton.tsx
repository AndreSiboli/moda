import styles from "@/styles/buttons/CartButton.module.scss";
import { PiBag, PiCheck } from "react-icons/pi";

interface PropsType {
  handleFunction: () => void;
  loadingState: "normal" | "dotting";
}

export default function CartButton(props: PropsType) {
  const { handleFunction, loadingState } = props;

  return (
    <button
      className={`${styles.button} ${styles[loadingState]}`}
      onClick={handleFunction}
    >
      <PiBag />

      <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </button>
  );
}
