import { ProductType } from "@/_types/ProductsType";
import { routesCollections, routesStore } from "@/data/routes";
import { collections } from "@/fake-api/AllColletions";
import { products } from "@/fake-api/allProducts";

export function chooseCollection(type: string): ProductType[] {
  return collections.filter((product) => product.collection === type);
}

export function chooseCollectionPage(type: string) {
  return routesCollections.filter((page) => page.collection === type);
}

export function chooseProductType(type: string): ProductType[] {
  return products.filter((product) => product.type.some((t) => t === type));
}

export function chooseProductPage(type: string) {
  return routesStore.filter((page) => page.type === type);
}
