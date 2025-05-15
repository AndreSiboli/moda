import { ProductType } from "./ProductsType";

export interface CartUserType extends Omit<ProductType, "sizes" | 'details' | 'images' > {
  size: { size: string; stock: number };
  quantity: number;
}
