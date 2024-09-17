import { StaticImageData } from "next/image";

export interface ProductType {
  images: {
    src: StaticImageData | string;
    alt: string;

    subImages?: {
      src: StaticImageData | string;
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
}
