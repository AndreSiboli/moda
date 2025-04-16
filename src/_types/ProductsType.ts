import { StaticImageData } from "next/image";

export interface ProductType {
  images: {
    src: StaticImageData;
    alt: string;

    subImages?: {
      src: StaticImageData;
      alt: string;
    }[];
  };
  rating: {
    score: number;
    votes: number;
  };

  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  type: string[];
  author: {
    name: string
    url: string
  }
}
