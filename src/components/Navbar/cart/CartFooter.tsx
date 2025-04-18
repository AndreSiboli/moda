import Submit from "@/components/buttons/Submit";
import styles from "@/styles/Navbar/cart/CartFooter.module.scss";
import { formatToDecimal } from "@/utils/formatter";

interface CartFooterType {
  total: number;
  handleSubmit: VoidFunction;
}

export default function CartFooter(props: CartFooterType) {
  const { total, handleSubmit } = props;
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_total}>
        <p>Order Total:</p>
        <p>${formatToDecimal(total, 2)}</p>
      </div>

      <div className={styles.footer_button}>
        <Submit text="Confirm Order" onClick={handleSubmit} variant="v2"/>
      </div>
    </footer>
  );
}
