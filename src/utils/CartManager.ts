import { CartUserType } from "@/_types/CartType";

export function isThereInCart(arr: CartUserType[], obj: CartUserType) {
  return arr.some((item) => item.id === obj.id && item.size === obj.size);
}
