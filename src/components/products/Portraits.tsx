import { ProductType } from "@/_types/ProductsType";
import styles from "@/styles/products/Portraits.module.scss";
import Image from "next/image";

interface PropsType {
  images: ProductType["images"];
}

export default function Portraits(props: PropsType) {
  const { images } = props;

  return (
    <section className={styles.portraits}>
      <section className={styles.portraits_flex}>
        {images.map((image, i) => (
          <figure className={styles.portraits_image} key={image.src.src + i}>
            <Image src={image.src} alt={image.alt} sizes="100vw" />
          </figure>
        ))}
      </section>
    </section>
  );
}
