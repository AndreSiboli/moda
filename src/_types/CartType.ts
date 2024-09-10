import { ProductType } from "./ProductsType";

export interface CartUserType extends ProductType {
  quantity: number;
}
