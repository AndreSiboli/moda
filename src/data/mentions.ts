import { products } from "@/fake-api/allProducts";
import { collections } from "@/fake-api/AllColletions";

import intimate from "@/assets/products/thumbnails/intimate.jpg";
import dresses from "@/assets/products/thumbnails/dresses.jpg";
import jewelry from "@/assets/products/thumbnails/jewelry.jpg";
import necklace from "@/assets/products/thumbnails/necklace.jpg";
import ring from "@/assets/products/thumbnails/ring.jpg";
import earring from "@/assets/products/thumbnails/earring.jpg";
import bracelet from "@/assets/products/thumbnails/bracelet.jpg";
import shirt from "@/assets/products/thumbnails/shirt.jpg";
import shorts from "@/assets/products/thumbnails/shorts.jpg";
import pants from "@/assets/products/thumbnails/pants.jpg";
import tops from "@/assets/products/thumbnails/tops.jpg";
import contact from "@/assets/contact.jpg";
import hero from "@/assets/hero.png";
import signIn from "@/assets/sign-in.jpg";
import signUp from "@/assets/sign-up.jpg";

const references = [
  {
    id: "0196442e-f234-77b2-b5fa-fc7cfc6b1160",
    images: {
      src: signIn,
      alt: "",
    },
    author: {
      name: "Hatice Baran",
      url: "https://www.pexels.com/pt-br/@hatice-baran-153179658/",
    },
  },
  {
    id: "0196442e-f234-77b2-b5fa-fc7cfe6b1160",
    images: {
      src: signUp,
      alt: "",
    },
    author: {
      name: "Josh Pereira",
      url: "https://unsplash.com/pt-br/@joshpereiraphotography",
    },
  },
  {
    id: "0196442e-f234-77b2-b5fa-fc7cfa6b1160",
    images: {
      src: dresses,
      alt: "",
    },
    author: {
      name: "Min An",
      url: "https://www.pexels.com/pt-br/@minan1398/",
    },
  },
  {
    id: "0196442f-4013-7790-b4de-72832e2a7c7d",
    images: {
      src: jewelry,
      alt: "",
    },
    author: {
      name: "Katie Mukhina",
      url: "https://unsplash.com/pt-br/@muukhina",
    },
  },
  {
    id: "0196442f-419c-7a46-808c-00a31f98b1b7",
    images: {
      src: necklace,
      alt: "",
    },
    author: {
      name: "Cottonbro studio",
      url: "https://www.pexels.com/pt-br/@cottonbro/",
    },
  },
  {
    id: "0196442f-436a-707b-a1eb-8c90620a7fb8",
    images: {
      src: ring,
      alt: "",
    },
    author: {
      name: "Jing Chang",
      url: "https://www.pexels.com/@jing-chang-554385138/",
    },
  },
  {
    id: "0196442f-4547-7494-bfbc-edbf05f9823f",
    images: {
      src: earring,
      alt: "",
    },
    author: {
      name: "Nicolas Postiglioni",
      url: "https://www.pexels.com/pt-br/@postiglioni/",
    },
  },
  {
    id: "0196442f-46ea-7786-b8ba-b8259e5c80e4",
    images: {
      src: bracelet,
      alt: "",
    },
    author: {
      name: "Meg Jenson",
      url: "https://unsplash.com/pt-br/@megjenson",
    },
  },
  {
    id: "01964430-287a-7116-90dc-acb355163f48",
    images: {
      src: shorts,
      alt: "",
    },
    author: {
      name: "Gabriel Pompeo",
      url: "https://www.pexels.com/pt-br/@gabrielpompeo/",
    },
  },
  {
    id: "01964430-2a11-75a4-9ff0-3e4d024705f8",
    images: {
      src: shirt,
      alt: "",
    },
    author: {
      name: "Bianca Castillo",
      url: "https://unsplash.com/pt-br/@bianeyre",
    },
  },
  {
    id: "01964430-2bd1-7b27-9738-d594b1e0881c",
    images: {
      src: pants,
      alt: "",
    },
    author: {
      name: "Kailey Sniffin",
      url: "https://unsplash.com/pt-br/@kaisniffin",
    },
  },
  {
    id: "01964430-2d5c-703f-a7aa-141ebe4d5c7b",
    images: {
      src: tops,
      alt: "",
    },
    author: {
      name: "S L",
      url: "https://unsplash.com/pt-br/@gingermias",
    },
  },
  {
    id: "01964430-2d5c-703f-a7aa-141fbe4d5c7b",
    images: {
      src: intimate,
      alt: "",
    },
    author: {
      name: "Freepik",
      url: "https://www.freepik.com/free-photo/high-angle-woman-posing-bikini_62418895.htm#fromView=search&page=7&position=28&uuid=202f44df-1003-487d-8c40-b8320d13fb01&query=underwear",
    },
  },
  {
    id: "01964430-287a-7116-90dc-acb355189f48",
    images: {
      src: contact,
      alt: "",
    },
    author: {
      name: "Süheyl Burak",
      url: "https://unsplash.com/pt-br/@suheylburak",
    },
  },
  {
    id: "01963a73-07e7-746b-ba54-37b54ea4dac3",
    images: {
      src: hero,
      alt: "",
    },
    author: {
      name: "Joshua Rawson-Harris",
      url: "https://unsplash.com/pt-br/@joshrh19",
    },
  },
];



export const mentions = references.concat(products, collections);
