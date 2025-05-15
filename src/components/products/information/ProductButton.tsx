import { ProductType } from "@/_types/ProductsType";
import { insertItem } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { isThereInCart } from "@/utils/CartManager";
import { useDispatch } from "react-redux";
import styles from "@/styles/pages/products/information/ProductButton.module.scss";
import ButtonLoading from "@/components/ui/buttons/ButtonLoading";
import { CartUserType } from "@/_types/CartType";

interface PropsType {
  product: ProductType;
  selectedSize: string | null;
}

export default function ProductButton(props: PropsType) {
  const { product, selectedSize } = props;
  const state = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  function add2Cart() {
    return new Promise((res, rej) => {
      simulateDelay(() => {
        const formatted = formatingProduct(product);
        if (!formatted || isThereInCart(state.cart, formatted))
          return rej(false);

        dispatch(insertItem({ ...formatted }));
        res(true);
      });
    });
  }

  function formatingProduct(product: ProductType) {
    if (!selectedSize) return null;
    const find = findSize();
    if (!find) return null;

    const { sizes, ...rest } = product;
    return {
      ...rest,
      size: find,
      quantity: 1,
    } as CartUserType;
  }

  function findSize() {
    return product.sizes.find((size) => size.size === selectedSize);
  }

  function simulateDelay(callback: VoidFunction) {
    setTimeout(callback, 2000);
  }

  return (
    <div className={styles.product_button}>
      <ButtonLoading
        text="ADD TO CART"
        message="PRODUCT ADDED"
        handleClick={add2Cart}
        variant="v2"
      />
    </div>
  );
}
