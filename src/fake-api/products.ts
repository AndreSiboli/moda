import { ProductType } from "@/_types/ProductsType";
import { products } from "./allProducts";

export const jewelry: ProductType[] = products.filter((product) =>
  product.type.some((t) => t === "jewelry")
);

export const dresses: ProductType[] = products.filter((product) =>
  product.type.some((t) => t === "dress")
);

export const intimate: ProductType[] = products.filter((product) =>
  product.type.some((t) => t === "intimate")
);