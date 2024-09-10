import { ProductType } from "@/_types/ProductsType";

export function sortByPriceLowerToHigher(arr: ProductType[]) {
  return arr.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });
}

export function sortByPriceHigherToLower(arr: ProductType[]) {
  return arr.sort((a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  });
}

export function sortByRating(arr: ProductType[]) {
  return arr.sort((a, b) => {
    const ratingA = a.rating.score;
    const ratingB = b.rating.score;

    if (ratingA < ratingB) return 1;
    if (ratingA > ratingB) return -1;
    return 0;
  });
}
