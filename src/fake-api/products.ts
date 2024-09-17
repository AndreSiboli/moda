import { ProductType } from "@/_types/ProductsType";
import jewelry1 from "@/assets/products/jewelry/angelo-pantazis-JDKTrT5pOFY-unsplash.jpg";
import jewelry2 from "@/assets/products/jewelry/cat-han-BJ3grTerqY4-unsplash.jpg";
import jewelry3 from "@/assets/products/jewelry/jasmin-chew-UBeNYvk6ED0-unsplash.jpg";
import jewelry4 from "@/assets/products/jewelry/jasmin-chew-WdylQBZ9R1o-unsplash.jpg";
import jewelry5 from "@/assets/products/jewelry/julia-cheperis-GFI1sRmDaCs-unsplash.jpg";
import jewelry6 from "@/assets/products/jewelry/kateryna-hliznitsova-P6NiFTyI294-unsplash.jpg";
import jewelry7 from "@/assets/products/jewelry/kateryna-hliznitsova-ceSCZzjTReg-unsplash.jpg";
import jewelry8 from "@/assets/products/jewelry/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg";
import jewelry9 from "@/assets/products/jewelry/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.jpg";
import jewelry10 from "@/assets/products/jewelry/max-ducourneau-6uv43p1ePrk-unsplash.jpg";
import jewelry11 from "@/assets/products/jewelry/natali-hordiiuk-6xUNKC6sutk-unsplash.jpg";
import jewelry12 from "@/assets/products/jewelry/nataliya-melnychuk-RZY_1SLLwKU-unsplash.jpg";

import dress1 from "@/assets/products/dresses/ali-karimiboroujeni-FZUENokiL6Y-unsplash.jpg";
import dress2 from "@/assets/products/dresses/ernest-tarasov - WrsOZD1euY-unsplash.jpg";
import dress3 from "@/assets/products/dresses/jim-romero-8cA2adqno6c-unsplash.jpg";
import dress4 from "@/assets/products/dresses/pexels-shuvalova-natalia-415991090-27304863.jpg";
import dress4p2 from "@/assets/products/dresses/pexels-shuvalova-natalia-415991090-27304894.jpg";
import dress5 from "@/assets/products/dresses/tamara-bellis-GRfLA7aXlO4-unsplash.jpg";
import dress6 from "@/assets/products/dresses/jesus-santos-rUSJt8Y6Alw-unsplash.jpg";

import intimate1 from "@/assets/products/intimate/anna-deli-ITPsrmMweVc-unsplash.jpg";
import intimate2 from "@/assets/products/intimate/ddddddarya-cR5w5YcwESM-unsplash.jpg";
import intimate3 from "@/assets/products/intimate/joe-ciciarelli-T_aDfsi8uYQ-unsplash.jpg";
import intimate4 from "@/assets/products/intimate/kate-tepl-bHnwsjbvIS0-unsplash.jpg";
import intimate5 from "@/assets/products/intimate/pexels-jonaorle-3828241.jpg";
import intimate6 from "@/assets/products/intimate/semen-zhuravlev-rizSIw9QY4M-unsplash.jpg";
import intimate6p2 from "@/assets/products/intimate/semen-zhuravlev-3Nbn4iFSffw-unsplash.jpg";
import intimate7 from "@/assets/products/intimate/riccardo-carlo-rossi-x90HeQHJ1yE-unsplash.jpg";

export const jewelry: ProductType[] = [
  {
    id: "A1B2C3D4",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: jewelry1,
      alt: "Lorem",
    },
    price: 49.99,
    stock: 20,
    rating: {
      score: 4.6,
      votes: 123,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
    type: ["jewelry"],
  },
  {
    id: "E5F6G7H8",
    title: "Suspendisse Potenti",
    images: {
      src: jewelry2,
      alt: "Suspendisse",
    },
    price: 29.99,
    stock: 15,
    rating: {
      score: 5,
      votes: 98,
    },
    description:
      "Suspendisse potenti. Sed sit amet lectus vitae ligula ultrices auctor non quis purus.",
    type: ["jewelry"],
  },
  {
    id: "I9J0K1L2",
    title: "Cras Blandit",
    images: {
      src: jewelry3,
      alt: "Cras",
    },
    price: 59.99,
    stock: 10,
    rating: {
      score: 4.7,
      votes: 200,
    },
    description:
      "Cras blandit arcu et turpis condimentum, vitae suscipit lorem viverra.",
    type: ["jewelry"],
  },
  {
    id: "M3N4O5P6",
    title: "Curabitur Mattis",
    images: {
      src: jewelry4,
      alt: "Curabitur",
    },
    price: 39.99,
    stock: 12,
    rating: {
      score: 4.1,
      votes: 85,
    },
    description:
      "Curabitur mattis mauris nec eros tempor, at suscipit arcu viverra.",
    type: ["jewelry"],
  },
  {
    id: "Q7R8S9T0",
    title: "Vivamus Ultricies",
    images: {
      src: jewelry5,
      alt: "Vivamus",
    },
    price: 69.99,
    stock: 8,
    rating: {
      score: 4.9,
      votes: 300,
    },
    description:
      "Vivamus ultricies, orci ac molestie dictum, justo tortor eleifend purus, ac facilisis nulla nisi eget urna.",
    type: ["jewelry"],
  },
  {
    id: "U1V2W3X4",
    title: "Mauris Finibus",
    images: {
      src: jewelry6,
      alt: "Mauris",
    },
    price: 44.99,
    stock: 16,
    rating: {
      score: 4.0,
      votes: 130,
    },
    description:
      "Mauris finibus magna in nibh dictum viverra. Aenean lobortis velit in metus.",
    type: ["jewelry"],
  },
  {
    id: "Y5Z6A7B8",
    title: "Aenean Auctor",
    images: {
      src: jewelry7,
      alt: "Aenean",
    },
    price: 55.99,
    stock: 22,
    rating: {
      score: 4.2,
      votes: 110,
    },
    description:
      "Aenean auctor, metus id feugiat fermentum, magna velit dictum purus, sit amet pulvinar dolor sapien eget turpis.",
    type: ["jewelry"],
  },
  {
    id: "C9D0E1F2",
    title: "Donec Sodales",
    images: {
      src: jewelry8,
      alt: "Donec",
    },
    price: 35.99,
    stock: 14,
    rating: {
      score: 4.2,
      votes: 95,
    },
    description:
      "Donec sodales ligula ut velit varius, eget facilisis purus feugiat.",
    type: ["jewelry"],
  },
  {
    id: "G3H4I5J6",
    title: "Pellentesque Fermentum",
    images: {
      src: jewelry9,
      alt: "Pellentesque",
    },
    price: 47.99,
    stock: 18,
    rating: {
      score: 4.5,
      votes: 150,
    },
    description:
      "Pellentesque fermentum, dui sed dictum consequat, dui orci iaculis odio, sed varius augue mauris eget ex.",
    type: ["jewelry"],
  },
  {
    id: "K7L8M9N0",
    title: "Aliquam Pharetra",
    images: {
      src: jewelry10,
      alt: "Aliquam",
    },
    price: 62.99,
    stock: 9,
    rating: {
      score: 4.6,
      votes: 210,
    },
    description:
      "Aliquam pharetra dolor vitae nunc fermentum, at vulputate magna vulputate.",
    type: ["jewelry"],
  },
  {
    id: "O1P2Q3R4",
    title: "Phasellus Ultrices",
    images: {
      src: jewelry11,
      alt: "Phasellus",
    },
    price: 54.99,
    stock: 11,
    rating: {
      score: 4.4,
      votes: 140,
    },
    description:
      "Phasellus ultrices dui ac urna aliquet, sit amet dignissim magna mollis.",
    type: ["jewelry"],
  },
  {
    id: "S5T6U7V8",
    title: "Vestibulum Ante",
    images: {
      src: jewelry12,
      alt: "Vestibulum",
    },
    price: 48.99,
    stock: 13,
    rating: {
      score: 5,
      votes: 120,
    },
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    type: ["jewelry"],
  },
];

export const dresses: ProductType[] = [
  {
    id: "D8E9F1G2",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: dress1,
      alt: "Lorem",
    },
    price: 45.99,
    stock: 25,
    rating: {
      score: 4.5,
      votes: 145,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
    type: ["dress"],
  },
  {
    id: "H3I4J5K6",
    title: "Suspendisse Potenti",
    images: {
      src: dress2,
      alt: "Suspendisse",
    },
    price: 32.5,
    stock: 18,
    rating: {
      score: 3.9,
      votes: 105,
    },
    description:
      "Suspendisse potenti. Sed sit amet lectus vitae ligula ultrices auctor non quis purus.",
    type: ["dress"],
  },
  {
    id: "L7M8N9O0",
    title: "Cras Blandit",
    images: {
      src: dress3,
      alt: "Cras",
    },
    price: 52.99,
    stock: 13,
    rating: {
      score: 4.8,
      votes: 230,
    },
    description:
      "Cras blandit arcu et turpis condimentum, vitae suscipit lorem viverra.",
    type: ["dress"],
  },
  {
    id: "P1Q2R3S4",
    title: "Curabitur Mattis",
    images: {
      src: dress4,
      alt: "Curabitur",
      subImages: [
        {
          src: dress4p2,
          alt: "Curabitur",
        },
      ],
    },
    price: 38.99,
    stock: 20,
    rating: {
      score: 4.2,
      votes: 112,
    },
    description:
      "Curabitur mattis mauris nec eros tempor, at suscipit arcu viverra.",
    type: ["dress"],
  },
  {
    id: "T5U6V7W8",
    title: "Vivamus Ultricies",
    images: {
      src: dress5,
      alt: "Vivamus",
    },
    price: 65.0,
    stock: 7,
    rating: {
      score: 4.9,
      votes: 310,
    },
    description:
      "Vivamus ultricies, orci ac molestie dictum, justo tortor eleifend purus, ac facilisis nulla nisi eget urna.",
    type: ["dress"],
  },
  {
    id: "X9Y0Z1A2",
    title: "Mauris Finibus",
    images: {
      src: dress6,
      alt: "Mauris",
    },
    price: 41.99,
    stock: 19,
    rating: {
      score: 4.1,
      votes: 126,
    },
    description:
      "Mauris finibus magna in nibh dictum viverra. Aenean lobortis velit in metus.",
    type: ["dress"],
  },
  // {
  //   id: "B3C4D5E6",
  //   title: "Aenean Auctor",
  //   images: {
  //     src: dress7,
  //     alt: "Aenean",
  //   },
  //   price: 60.5,
  //   stock: 24,
  //   rating: {
  //     score: 4.3,
  //     votes: 119,
  //   },
  //   description:
  //     "Aenean auctor, metus id feugiat fermentum, magna velit dictum purus, sit amet pulvinar dolor sapien eget turpis.",
  //   type: ["dress"],
  // },
  // {
  //   id: "F7G8H9I0",
  //   title: "Donec Sodales",
  //   images: {
  //     src: dress8,
  //     alt: "Donec",
  //   },
  //   price: 34.99,
  //   stock: 11,
  //   rating: {
  //     score: 3.7,
  //     votes: 87,
  //   },
  //   description:
  //     "Donec sodales ligula ut velit varius, eget facilisis purus feugiat.",
  //   type: ["dress"],
  // },
  // {
  //   id: "J1K2L3M4",
  //   title: "Pellentesque Fermentum",
  //   images: {
  //     src: dress9,
  //     alt: "Pellentesque",
  //   },
  //   price: 46.25,
  //   stock: 17,
  //   rating: {
  //     score: 4.6,
  //     votes: 178,
  //   },
  //   description:
  //     "Pellentesque fermentum, dui sed dictum consequat, dui orci iaculis odio, sed varius augue mauris eget ex.",
  //   type: ["dress"],
  // },
  // {
  //   id: "N5O6P7Q8",
  //   title: "Aliquam Pharetra",
  //   images: {
  //     src: dress10,
  //     alt: "Aliquam",
  //   },
  //   price: 58.99,
  //   stock: 9,
  //   rating: {
  //     score: 4.5,
  //     votes: 202,
  //   },
  //   description:
  //     "Aliquam pharetra dolor vitae nunc fermentum, at vulputate magna vulputate.",
  //   type: ["dress"],
  // },
  // {
  //   id: "R9S0T1U2",
  //   title: "Phasellus Ultrices",
  //   images: {
  //     src: dress11,
  //     alt: "Phasellus",
  //   },
  //   price: 53.5,
  //   stock: 14,
  //   rating: {
  //     score: 4.4,
  //     votes: 136,
  //   },
  //   description:
  //     "Phasellus ultrices dui ac urna aliquet, sit amet dignissim magna mollis.",
  //   type: ["dress"],
  // },
  // {
  //   id: "V3W4X5Y6",
  //   title: "Vestibulum Ante",
  //   images: {
  //     src: dress12,
  //     alt: "Vestibulum",
  //   },
  //   price: 49.99,
  //   stock: 15,
  //   rating: {
  //     score: 4.0,
  //     votes: 115,
  //   },
  //   description:
  //     "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  //   type: ["dress"],
  // },
];

export const intimate: ProductType[] = [
  {
    id: "W8X9Y1Z2",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: intimate1,
      alt: "Lorem",
    },
    price: 29.99,
    stock: 10,
    rating: {
      score: 4.2,
      votes: 98,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
    type: ["intimate", "clothes"],
  },
  {
    id: "A3B4C5D6",
    title: "Suspendisse Potenti",
    images: {
      src: intimate2,
      alt: "Suspendisse",
    },
    price: 34.5,
    stock: 7,
    rating: {
      score: 4.4,
      votes: 70,
    },
    description:
      "Suspendisse potenti. Sed sit amet lectus vitae ligula ultrices auctor non quis purus.",
    type: ["intimate", "clothes"],
  },
  {
    id: "E7F8G9H0",
    title: "Cras Blandit",
    images: {
      src: intimate3,
      alt: "Cras",
    },
    price: 41.99,
    stock: 5,
    rating: {
      score: 4.7,
      votes: 183,
    },
    description:
      "Cras blandit arcu et turpis condimentum, vitae suscipit lorem viverra.",
    type: ["intimate", "clothes"],
  },
  {
    id: "I1J2K3L4",
    title: "Curabitur Mattis",
    images: {
      src: intimate4,
      alt: "Curabitur",
    },
    price: 37.99,
    stock: 8,
    rating: {
      score: 4.1,
      votes: 124,
    },
    description:
      "Curabitur mattis mauris nec eros tempor, at suscipit arcu viverra.",
    type: ["intimate", "clothes"],
  },
  {
    id: "M5N6O7P8",
    title: "Vivamus Ultricies",
    images: {
      src: intimate5,
      alt: "Vivamus",
    },
    price: 44.0,
    stock: 6,
    rating: {
      score: 4.8,
      votes: 235,
    },
    description:
      "Vivamus ultricies, orci ac molestie dictum, justo tortor eleifend purus, ac facilisis nulla nisi eget urna.",
    type: ["intimate", "clothes"],
  },
  {
    id: "Q9R0S1T2",
    title: "Mauris Finibus",
    images: {
      src: intimate6,
      alt: "Mauris",
      subImages: [
        {
          src: intimate6p2,
          alt: "Mauris",
        },
      ],
    },
    price: 32.99,
    stock: 12,
    rating: {
      score: 5,
      votes: 109,
    },
    description:
      "Mauris finibus magna in nibh dictum viverra. Aenean lobortis velit in metus.",
    type: ["intimate", "clothes"],
  },
  {
    id: "U3V4W5X6",
    title: "Aenean Auctor",
    images: {
      src: intimate7,
      alt: "Aenean",
    },
    price: 39.5,
    stock: 4,
    rating: {
      score: 4.3,
      votes: 135,
    },
    description:
      "Aenean auctor, metus id feugiat fermentum, magna velit dictum purus, sit amet pulvinar dolor sapien eget turpis.",
    type: ["intimate", "clothes"],
  },
  // {
  //   id: "Y7Z8A9B0",
  //   title: "Donec Sodales",
  //   images: {
  //     src: intimate8,
  //     alt: "Donec",
  //   },
  //   price: 28.99,
  //   stock: 9,
  //   rating: {
  //     score: 3.9,
  //     votes: 85,
  //   },
  //   description:
  //     "Donec sodales ligula ut velit varius, eget facilisis purus feugiat.",
  //   type:[ "intimate", 'clothes'],
  // },
  // {
  //   id: "C1D2E3F4",
  //   title: "Pellentesque Fermentum",
  //   images: {
  //     src: intimate9,
  //     alt: "Pellentesque",
  //   },
  //   price: 33.25,
  //   stock: 6,
  //   rating: {
  //     score: 4.5,
  //     votes: 172,
  //   },
  //   description:
  //     "Pellentesque fermentum, dui sed dictum consequat, dui orci iaculis odio, sed varius augue mauris eget ex.",
  //   type:[ "intimate", 'clothes'],
  // },
  // {
  //   id: "G5H6I7J8",
  //   title: "Aliquam Pharetra",
  //   images: {
  //     src: intimate10,
  //     alt: "Aliquam",
  //   },
  //   price: 42.99,
  //   stock: 5,
  //   rating: {
  //     score: 4.6,
  //     votes: 190,
  //   },
  //   description:
  //     "Aliquam pharetra dolor vitae nunc fermentum, at vulputate magna vulputate.",
  //   type:[ "intimate", 'clothes'],
  // },
  // {
  //   id: "K9L0M1N2",
  //   title: "Phasellus Ultrices",
  //   images: {
  //     src: intimate11,
  //     alt: "Phasellus",
  //   },
  //   price: 39.5,
  //   stock: 10,
  //   rating: {
  //     score: 4.4,
  //     votes: 121,
  //   },
  //   description:
  //     "Phasellus ultrices dui ac urna aliquet, sit amet dignissim magna mollis.",
  //   type:[ "intimate", 'clothes'],
  // },
  // {
  //   id: "O3P4Q5R6",
  //   title: "Vestibulum Ante",
  //   images: {
  //     src: intimate12,
  //     alt: "Vestibulum",
  //   },
  //   price: 36.99,
  //   stock: 11,
  //   rating: {
  //     score: 4.1,
  //     votes: 105,
  //   },
  //   description:
  //     "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  //   type:[ "intimate", 'clothes'],
  // },
];
