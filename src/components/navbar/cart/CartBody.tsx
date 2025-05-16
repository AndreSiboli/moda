import { CartUserType } from "@/_types/CartType";
import styles from "@/styles/navbar/cart/CartBody.module.scss";
import CartCard from "@/components/cards/CartCard";
interface CartBodyType {
  data: CartUserType[];
  handleDelete: ({ id, size }: { id: string; size: string }) => void;
}

export default function CartBody(props: CartBodyType) {
  const { data, handleDelete } = props;

  return (
    <div className={styles.cart_body}>
      <section className={styles.body_items}>
        {data.map((item) => (
          <CartCard
            data={item}
            handleDelete={() =>
              handleDelete({ id: item.id, size: item.size.size })
            }
            key={item.id + item.size.size}
          />
        ))}
      </section>
    </div>
  );
}
