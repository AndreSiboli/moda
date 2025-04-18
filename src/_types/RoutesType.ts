import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export interface RoutesStoreType {
  image: {
    src: StaticImageData;
    styles?: CSSProperties;
  };
  title: string;
  text: string;
  type: string;
}

export interface RoutesCollectionType extends Omit<RoutesStoreType, "type"> {
  collection: string;
}
