import { ProductType } from "@/_types/ProductsType";

export const uuidV7 = () => {
  return "tttttttt-tttt-7xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      const r = Math.trunc(Math.random() * 16);
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .replace(/^[t]{8}-[t]{4}/, function () {
      const unixtimestamp = Date.now().toString(16).padStart(12, "0");
      return unixtimestamp.slice(0, 8) + "-" + unixtimestamp.slice(8);
    });
};

export function productss(arr: ProductType[]) {
  const a = arr.map((item) => ({
    ...item,
    id: uuidV7(),
    images: {
      src: "",
      alt: "",
    },
    author: {
      name: "",
      url: "",
    },
  }));
  console.log(a);
}
