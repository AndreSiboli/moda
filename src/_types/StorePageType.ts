import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export interface StorePageType {
  image: {
    src: StaticImageData;
    styles?: CSSProperties;
  };
  title: string;
  text: string;
  type: string;
}

export interface ColletctionPageType extends Omit<StorePageType, "type"> {
  collection: string;
}
