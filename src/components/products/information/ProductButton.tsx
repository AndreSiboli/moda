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

  function addToCart(): Promise<string> {
    return new Promise((res, rej) => {
      simulateDelay(() => {
        if (!selectedSize) return rej("SIZE NEEDED");
        const formatted = formatingProduct(product);
        if (!formatted) return rej("AN ERROR HAS OCURRED");
        if (isThereInCart(state.cart, formatted))
          return rej("ITEM ALREADY IN CART");

        dispatch(insertItem({ ...formatted }));
        res("ITEM ADDED");
      });
    });
  }

  function formatingProduct(product: ProductType) {
    const sizeFound = findSize();
    if (!sizeFound) return null;

    //Pass less content to cart
    const { sizes, details, images, description, ...rest } = product;

    return {
      ...rest,
      size: sizeFound,
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
      <ButtonLoading text="ADD TO CART" handleClick={addToCart} variant="v2" />
    </div>
  );
}
