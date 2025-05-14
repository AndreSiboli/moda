import { ProductType } from "./ProductsType";

export interface CartUserType extends Omit<ProductType, "sizes"> {
  size: { size: string | number; stock: number };
  quantity: number;
}
