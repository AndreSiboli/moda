import { CartUserType } from "@/_types/CartType";
import { ProductType } from "@/_types/ProductsType";
import { insertItem } from "@/redux/features/cart-slice";

export function addToCart(
  state: CartUserType[],
  dispatch: (action: { type: string; payload: CartUserType }) => void,
  product: ProductType,
  size: string | null
): Promise<string> {
  return new Promise((res, rej) => {
    simulateDelay(() => {
      if (!size) return rej("SIZE NEEDED");
      const formatted = formatingProduct(product, size);
      if (!formatted) return rej("AN ERROR HAS OCURRED");
      if (isThereInCart(state, formatted))
        return rej("ITEM ALREADY IN CART");

      dispatch(insertItem({ ...formatted }));
      res("ITEM ADDED");
    });
  });
}

export function isThereInCart(arr: CartUserType[], obj: CartUserType) {
  return arr.some((item) => item.id === obj.id && item.size === obj.size);
}

function formatingProduct(product: ProductType, size: string) {
  const sizeFound = findSize(product, size);
  if (!sizeFound) return null;

  //Pass less content to cart
  const { sizes, details, images, description, ...rest } = product;

  return {
    ...rest,
    size: sizeFound,
    quantity: 1,
  } as CartUserType;
}

function findSize(product: ProductType, choosenSize: string) {
  return product.sizes.find((size) => size.size === choosenSize);
}

function simulateDelay(callback: VoidFunction) {
  setTimeout(() => {
    callback();
  }, 1000);
}
