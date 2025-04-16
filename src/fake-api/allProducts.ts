import { ProductType } from "@/_types/ProductsType";

//jelwelry
import jewelry1 from "@/assets/products/jewelry/angelo-pantazis-JDKTrT5pOFY-unsplash.jpg";
import jewelry2 from "@/assets/products/jewelry/cat-han-BJ3grTerqY4-unsplash.jpg";
import jewelry3 from "@/assets/products/jewelry/jasmin-chew-UBeNYvk6ED0-unsplash.jpg";
import jewelry4 from "@/assets/products/jewelry/jasmin-chew-WdylQBZ9R1o-unsplash.jpg";
import jewelry5 from "@/assets/products/jewelry/julia-cheperis-GFI1sRmDaCs-unsplash.jpg";
import jewelry6 from "@/assets/products/jewelry/kateryna-hliznitsova-ceSCZzjTReg-unsplash.jpg";
import jewelry7 from "@/assets/products/jewelry/kateryna-hliznitsova-P6NiFTyI294-unsplash.jpg";
import jewelry8 from "@/assets/products/jewelry/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg";
import jewelry9 from "@/assets/products/jewelry/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.jpg";
import jewelry10 from "@/assets/products/jewelry/max-ducourneau-6uv43p1ePrk-unsplash.jpg";
import jewelry11 from "@/assets/products/jewelry/natali-hordiiuk-6xUNKC6sutk-unsplash.jpg";
import jewelry12 from "@/assets/products/jewelry/nataliya-melnychuk-RZY_1SLLwKU-unsplash.jpg";

//dress
import dress1 from "@/assets/products/dresses/ali-karimiboroujeni-FZUENokiL6Y-unsplash.jpg";
import dress2 from "@/assets/products/dresses/ernest-tarasov - WrsOZD1euY-unsplash.jpg";
import dress3 from "@/assets/products/dresses/jesus-santos-rUSJt8Y6Alw-unsplash.jpg";
import dress4 from "@/assets/products/dresses/jim-romero-8cA2adqno6c-unsplash.jpg";
import dress5 from "@/assets/products/dresses/pexels-shuvalova-natalia-415991090-27304863.jpg";
import dress5p2 from "@/assets/products/dresses/pexels-shuvalova-natalia-415991090-27304894.jpg";
import dress6 from "@/assets/products/dresses/tamara-bellis-GRfLA7aXlO4-unsplash.jpg";

//intimate
import intimate1 from "@/assets/products/intimate/anna-deli-ITPsrmMweVc-unsplash.jpg";
import intimate2 from "@/assets/products/intimate/ddddddarya-cR5w5YcwESM-unsplash.jpg";
import intimate3 from "@/assets/products/intimate/joe-ciciarelli-T_aDfsi8uYQ-unsplash.jpg";
import intimate4 from "@/assets/products/intimate/kate-tepl-bHnwsjbvIS0-unsplash.jpg";
import intimate5 from "@/assets/products/intimate/pexels-jonaorle-3828241.jpg";
import intimate6 from "@/assets/products/intimate/riccardo-carlo-rossi-x90HeQHJ1yE-unsplash.jpg";
import intimate7 from "@/assets/products/intimate/semen-zhuravlev-rizSIw9QY4M-unsplash.jpg";
import intimate7p2 from "@/assets/products/intimate/semen-zhuravlev-3Nbn4iFSffw-unsplash.jpg";

export const products: ProductType[] = [
  {
    id: "01963988-e183-7127-9535-d805281fbd89",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: jewelry1,
      alt: "Woman dressing a top with a gold squared necklace",
    },
    price: 49.99,
    stock: 20,
    rating: {
      score: 4.6,
      votes: 123,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Angelo Pantazis",
      url: "https://unsplash.com/pt-br/@angelopantazis",
    },
  },
  {
    id: "01963988-e183-72e2-9c59-4e625f86f0af",
    title: "Suspendisse Potenti",
    images: {
      src: jewelry2,
      alt: "",
    },
    price: 29.99,
    stock: 15,
    rating: {
      score: 5,
      votes: 98,
    },
    description:
      "Suspendisse potenti. Sed sit amet lectus vitae ligula ultrices auctor non quis purus.",
    type: ["jewelry", "earring"],
    author: {
      name: "Cat Han",
      url: "https://unsplash.com/pt-br/@figmentprints",
    },
  },
  {
    id: "01963988-e183-77d5-ae35-270f6a466ed6",
    title: "Cras Blandit",
    images: {
      src: jewelry3,
      alt: "",
    },
    price: 59.99,
    stock: 10,
    rating: {
      score: 4.7,
      votes: 200,
    },
    description:
      "Cras blandit arcu et turpis condimentum, vitae suscipit lorem viverra.",
    type: ["jewelry", "earring"],
    author: {
      name: "Jasmin Chew",
      url: "https://unsplash.com/pt-br/@majestical_jasmin",
    },
  },
  {
    id: "01963988-e183-7ab8-945b-dcc7cecef56c",
    title: "Curabitur Mattis",
    images: {
      src: jewelry4,
      alt: "",
    },
    price: 39.99,
    stock: 12,
    rating: {
      score: 4.1,
      votes: 85,
    },
    description:
      "Curabitur mattis mauris nec eros tempor, at suscipit arcu viverra.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Jasmin Chew",
      url: "https://unsplash.com/pt-br/@majestical_jasmin",
    },
  },
  {
    id: "01963988-e183-71cc-84e8-454d5b6fae80",
    title: "Vivamus Ultricies",
    images: {
      src: jewelry5,
      alt: "",
    },
    price: 69.99,
    stock: 8,
    rating: {
      score: 4.9,
      votes: 300,
    },
    description:
      "Vivamus ultricies, orci ac molestie dictum, justo tortor eleifend purus, ac facilisis nulla nisi eget urna.",
    type: ["jewelry", "earring"],
    author: {
      name: "Julia Cheperis",
      url: "https://unsplash.com/pt-br/@inception",
    },
  },
  {
    id: "01963988-e183-7a5f-8ef4-26fba6187e03",
    title: "Mauris Finibus",
    images: {
      src: jewelry6,
      alt: "",
    },
    price: 44.99,
    stock: 16,
    rating: {
      score: 4,
      votes: 130,
    },
    description:
      "Mauris finibus magna in nibh dictum viverra. Aenean lobortis velit in metus.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
  },
  {
    id: "01963988-e183-7d17-a614-b3b32396ba3e",
    title: "Aenean Auctor",
    images: {
      src: jewelry7,
      alt: "",
    },
    price: 55.99,
    stock: 22,
    rating: {
      score: 4.2,
      votes: 110,
    },
    description:
      "Aenean auctor, metus id feugiat fermentum, magna velit dictum purus, sit amet pulvinar dolor sapien eget turpis.",
    type: ["jewelry", "earring"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
  },
  {
    id: "01963988-e183-7ddc-bcc7-a73bdb3c1eb7",
    title: "Donec Sodales",
    images: {
      src: jewelry8,
      alt: "",
    },
    price: 35.99,
    stock: 14,
    rating: {
      score: 4.2,
      votes: 95,
    },
    description:
      "Donec sodales ligula ut velit varius, eget facilisis purus feugiat.",
    type: ["jewelry", "ring"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
  },
  {
    id: "01963988-e183-72c3-b6ee-6ac9080261b0",
    title: "Pellentesque Fermentum",
    images: {
      src: jewelry9,
      alt: "",
    },
    price: 47.99,
    stock: 18,
    rating: {
      score: 4.5,
      votes: 150,
    },
    description:
      "Pellentesque fermentum, dui sed dictum consequat, dui orci iaculis odio, sed varius augue mauris eget ex.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
  },
  {
    id: "01963988-e183-7fd2-85f7-15606ffd03de",
    title: "Aliquam Pharetra",
    images: {
      src: jewelry10,
      alt: "",
    },
    price: 62.99,
    stock: 9,
    rating: {
      score: 4.6,
      votes: 210,
    },
    description:
      "Aliquam pharetra dolor vitae nunc fermentum, at vulputate magna vulputate.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Max Ducourneau",
      url: "https://unsplash.com/pt-br/@maxdcrn",
    },
  },
  {
    id: "01963988-e183-7988-bb51-6d12ba549a6b",
    title: "Phasellus Ultrices",
    images: {
      src: jewelry11,
      alt: "",
    },
    price: 54.99,
    stock: 11,
    rating: {
      score: 4.4,
      votes: 140,
    },
    description:
      "Phasellus ultrices dui ac urna aliquet, sit amet dignissim magna mollis.",
    type: ["jewelry", "ring", "bracelet"],
    author: {
      name: "Natali Hordiiuk",
      url: "http://unsplash.com/pt-br/@whynotnatali",
    },
  },
  {
    id: "01963988-e183-7a78-a0d7-90d963d8f2ff",
    title: "Vestibulum Ante",
    images: {
      src: jewelry12,
      alt: "",
    },
    price: 48.99,
    stock: 13,
    rating: {
      score: 5,
      votes: 120,
    },
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    type: ["jewelry", "earring"],
    author: {
      name: "Nataliya Melnychuk",
      url: "https://unsplash.com/pt-br/@natinati",
    },
  },
  //dresses
  {
    id: "01963988-e183-7093-bcdd-a5e4a40f7646",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: dress1,
      alt: "",
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
    author: {
      name: "Ali Karimiboroujeni",
      url: "https://unsplash.com/pt-br/@alikarimibn",
    },
  },
  {
    id: "01963988-e183-7b2c-9ae1-18747a84b764",
    title: "Suspendisse Potenti",
    images: {
      src: dress2,
      alt: "",
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
    author: {
      name: "Ernest Tarasov",
      url: "https://unsplash.com/pt-br/s/usu%C3%A1rios/ernest-tarasov",
    },
  },
  {
    id: "01963988-e183-75a9-8387-25f628af8621",
    title: "Cras Blandit",
    images: {
      src: dress3,
      alt: "",
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
    author: {
      name: "Jesus Santos",
      url: "https://unsplash.com/pt-br/@jesussantosphotography",
    },
  },
  {
    id: "01963988-e183-7488-bd2a-c2807237d175",
    title: "Curabitur Mattis",
    images: {
      src: dress4,
      alt: "",
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
    author: {
      name: "Jim Romero",
      url: "https://unsplash.com/pt-br/@jimromero",
    },
  },
  {
    id: "01963988-e183-7666-8b92-659546c3cc65",
    title: "Vivamus Ultricies",
    images: {
      src: dress5,
      alt: "",
      subImages: [{ src: dress5p2, alt: "" }],
    },
    price: 65,
    stock: 7,
    rating: {
      score: 4.9,
      votes: 310,
    },
    description:
      "Vivamus ultricies, orci ac molestie dictum, justo tortor eleifend purus, ac facilisis nulla nisi eget urna.",
    type: ["dress"],
    author: {
      name: "Shuvalova Natalia",
      url: "https://www.pexels.com/pt-br/@shuvalova-natalia-415991090/",
    },
  },
  {
    id: "01963988-e183-7eef-aaf6-8bec715f6dbc",
    title: "Mauris Finibus",
    images: {
      src: dress6,
      alt: "",
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
    author: {
      name: "Tamara Bellis",
      url: "https://unsplash.com/pt-br/@tamarabellis",
    },
  },
  //intimate
  {
    id: "01963988-e183-7c2a-bac7-da4abf2cab13",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: intimate1,
      alt: "",
    },
    price: 29.99,
    stock: 10,
    rating: {
      score: 4.2,
      votes: 98,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
    type: ["intimate"],
    author: {
      name: "Anna Deli",
      url: "https://unsplash.com/pt-br/@andeli",
    },
  },
  {
    id: "01963988-e183-708d-930f-cca9832d6172",
    title: "Suspendisse Potenti",
    images: {
      src: intimate2,
      alt: "",
    },
    price: 34.5,
    stock: 7,
    rating: {
      score: 4.4,
      votes: 70,
    },
    description:
      "Suspendisse potenti. Sed sit amet lectus vitae ligula ultrices auctor non quis purus.",
    type: ["intimate"],
    author: {
      name: "Ddddddarya",
      url: "https://unsplash.com/pt-br/@ddddddarya",
    },
  },
  {
    id: "01963988-e183-776e-9609-0bc7652ab781",
    title: "Cras Blandit",
    images: {
      src: intimate3,
      alt: "",
    },
    price: 41.99,
    stock: 5,
    rating: {
      score: 4.7,
      votes: 183,
    },
    description:
      "Cras blandit arcu et turpis condimentum, vitae suscipit lorem viverra.",
    type: ["intimate"],
    author: {
      name: "Joe Ciciarelli",
      url: "https://unsplash.com/pt-br/@claritycontrol",
    },
  },
  {
    id: "01963988-e183-7440-8203-d6df60c6ee79",
    title: "Curabitur Mattis",
    images: {
      src: intimate4,
      alt: "",
    },
    price: 37.99,
    stock: 8,
    rating: {
      score: 4.1,
      votes: 124,
    },
    description:
      "Curabitur mattis mauris nec eros tempor, at suscipit arcu viverra.",
    type: ["intimate"],
    author: {
      name: "Kate Tepl",
      url: "https://unsplash.com/pt-br/@kate_tepla",
    },
  },
  {
    id: "01963988-e183-78a5-8ca3-a8cb6ea0e425",
    title: "Vivamus Ultricies",
    images: {
      src: intimate5,
      alt: "",
    },
    price: 44,
    stock: 6,
    rating: {
      score: 4.8,
      votes: 235,
    },
    description:
      "Vivamus ultricies, orci ac molestie dictum, justo tortor eleifend purus, ac facilisis nulla nisi eget urna.",
    type: ["intimate"],
    author: {
      name: "Jonaorle",
      url: "https://www.pexels.com/pt-br/@jonaorle/",
    },
  },
  {
    id: "01963988-e183-7279-abda-4f9589ecabfa",
    title: "Mauris Finibus",
    images: {
      src: intimate6,
      alt: "",
    },
    price: 32.99,
    stock: 12,
    rating: {
      score: 5,
      votes: 109,
    },
    description:
      "Mauris finibus magna in nibh dictum viverra. Aenean lobortis velit in metus.",
    type: ["intimate"],
    author: {
      name: "Riccardo Carlo Rossi",
      url: "https://unsplash.com/pt-br/@daysofgrain",
    },
  },
  {
    id: "01963988-e183-7d3f-b839-d4a68b46a022",
    title: "Aenean Auctor",
    images: {
      src: intimate7,
      alt: "",
      subImages: [
        {
          src: intimate7p2,
          alt: "",
        },
      ],
    },
    price: 39.5,
    stock: 4,
    rating: {
      score: 4.3,
      votes: 135,
    },
    description:
      "Aenean auctor, metus id feugiat fermentum, magna velit dictum purus, sit amet pulvinar dolor sapien eget turpis.",
    type: ["intimate"],
    author: {
      name: "Semen Zhuravlev",
      url: "https://unsplash.com/pt-br/@sezha72",
    },
  },
];


