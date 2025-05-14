import { ProductType } from "@/_types/ProductsType";
import Details from "@/components/buttons/Details";
import styles from "@/styles/pages/products/information/ProductsDetails.module.scss";

interface PropsType {
  product: ProductType;
}

export default function ProductDetails(props: PropsType) {
  const { product } = props;

  return (
    <div className={styles.product_details}>
      <Details title="Description">{product.description}</Details>
      <Details title="Compo & Care">
        <div className={styles.details_list}>
          {product.details &&
            product.details.map((detail) => (
              <div className={styles.list} key={detail.title}>
                <p>{detail.title}:</p>
                <ul>
                  {detail.contents.map((compo, i) => (
                    <li key={i}>{compo}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </Details>
      <Details title="Shipping & Returns">
        <p>
          Eum error quis a excepturi nesciunt est temporibus magnam id velit
          possimus cum repellendus autem sit dolorem nulla. Sit obcaecati iure
          ut deserunt libero et distinctio consequatur vel soluta tempore. Hic
          quia voluptas eum ipsam sunt quo quasi tempora eum voluptas odio non
          modi nihil? <br /> <br />
          Est voluptatem quis cum nesciunt doloribus eos numquam magni. Vel
          temporibus dolor et architecto voluptas et placeat quod. Aut vitae
          voluptatum ut blanditiis libero et voluptatem quod qui enim distinctio
          qui nostrum eligendi.
        </p>
      </Details>
    </div>
  );
}
