import { ProductType } from "@/_types/ProductsType";
import { useAppSelector } from "@/redux/store";
import { addToCart } from "@/utils/CartManager";
import { useDispatch } from "react-redux";
import styles from "@/styles/pages/products/information/ProductButton.module.scss";
import ButtonLoading from "@/components/ui/buttons/ButtonLoading";

interface PropsType {
  product: ProductType;
  selectedSize: string | null;
}

export default function ProductButton(props: PropsType) {
  const { product, selectedSize } = props;
  const state = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  

  return (
    <div className={styles.product_button}>
      <ButtonLoading
        text="ADD TO CART"
        handleClick={() =>
          addToCart(state.cart, dispatch, product, selectedSize)
        }
        variant="v2"
      />
    </div>
  );
}
