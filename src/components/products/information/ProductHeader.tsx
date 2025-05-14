import { ProductType } from "@/_types/ProductsType";
import styles from "@/styles/pages/products/information/ProductHeader.module.scss";
import Rating from "@/components/common/Rating";

interface PropsType {
  product: ProductType;
}

export default function ProductHeader(props: PropsType) {
  const { product } = props;

  return (
    <header className={styles.product_header}>
      <section className={styles.product_header_title}>
        <h1>{product.title}</h1>
      </section>

      <section className={styles.product_header_price}>
        <p>${product.price}</p>
      </section>

      <section className={styles.product_header_rating}>
        <Rating rating={product.rating} />
      </section>
    </header>
  );
}
