import { StaticImageData } from "next/image";
export interface ProductType {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
  thumbnail: {
    src: StaticImageData;
    alt: string;
  };
  sizes: { size: number | string; stock: number }[];
  rating: {
    score: number;
    votes: number;
  };
  id: string;
  title: string;
  description: string;
  price: number;
  type: string[];
  author: {
    name: string;
    url: string;
  };
  details: {
    title: string;
    contents: string[];
  }[];
}
