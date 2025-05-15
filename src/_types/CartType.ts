import { ProductType } from "./ProductsType";

export interface CartUserType extends Omit<ProductType, "sizes"> {
  size: { size: string; stock: number };
  quantity: number;
}
