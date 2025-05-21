import { ProductType } from "@/_types/ProductsType";
import { collections } from "./CollectionsData";

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
import jewelry13 from "@/assets/products/jewelry/sama-hosseini-h_ssRPj8UZo-unsplash.jpg";
import jewelry14 from "@/assets/products/jewelry/sandi-benedicta-BYq2uAzpRak-unsplash.jpg";
import jewelry15 from "@/assets/products/jewelry/tania-mousinho-h7lrfoSave0-unsplash.jpg";
import jewelry16 from "@/assets/products/jewelry/christian-agbede-JiKUrya050w-unsplash.jpg";

//dress
import dress1 from "@/assets/products/dresses/ali-karimiboroujeni-FZUENokiL6Y-unsplash.jpg";
import dress2 from "@/assets/products/dresses/ernest-tarasov - WrsOZD1euY-unsplash.jpg";
import dress3 from "@/assets/products/dresses/jesus-santos-rUSJt8Y6Alw-unsplash.jpg";
import dress4 from "@/assets/products/dresses/jim-romero-8cA2adqno6c-unsplash.jpg";
import dress5 from "@/assets/products/dresses/pexels-shuvalova-natalia-415991090-27304863.jpg";
import dress5p2 from "@/assets/products/dresses/pexels-shuvalova-natalia-415991090-27304894.jpg";
import dress6 from "@/assets/products/dresses/tamara-bellis-GRfLA7aXlO4-unsplash.jpg";
import dress7 from "@/assets/products/dresses/minh-dang-XUdSPPO5kB4-unsplash.jpg";

//intimate
import intimate1 from "@/assets/products/intimate/anna-deli-ITPsrmMweVc-unsplash.jpg";
import intimate2 from "@/assets/products/intimate/ddddddarya-cR5w5YcwESM-unsplash.jpg";
import intimate3 from "@/assets/products/intimate/joe-ciciarelli-T_aDfsi8uYQ-unsplash.jpg";
import intimate4 from "@/assets/products/intimate/kate-tepl-bHnwsjbvIS0-unsplash.jpg";
import intimate5 from "@/assets/products/intimate/pexels-jonaorle-3828241.jpg";
import intimate6 from "@/assets/products/intimate/riccardo-carlo-rossi-x90HeQHJ1yE-unsplash.jpg";
import intimate7 from "@/assets/products/intimate/semen-zhuravlev-rizSIw9QY4M-unsplash.jpg";
import intimate7p2 from "@/assets/products/intimate/semen-zhuravlev-3Nbn4iFSffw-unsplash.jpg";

//shirt
import shirt1 from "@/assets/products/shirt/aedrian-salazar-sFYePJ1s0rM-unsplash.jpg";
import shirt2 from "@/assets/products/shirt/jon-ly-UIPjy2XRoJQ-unsplash.jpg";
import shirt3 from "@/assets/products/shirt/josh-pereira-MMCbN2qBEJM-unsplash.jpg";
import shirt4 from "@/assets/products/shirt/mesut-cicen-8FXrbuaRVIc-unsplash.jpg";
import shirt5 from "@/assets/products/shirt/pouriya-kafaei-lmLbkVsCnCA-unsplash.jpg";

//short
import short1 from "@/assets/products/short/jasmin-chew-IvqEWtgttXI-unsplash.jpg";
import short2 from "@/assets/products/short/jeffery-erhunse-GnfrTEAsXh0-unsplash.jpg";
import short3 from "@/assets/products/short/steven-aguilar-KtotQbWnvXY-unsplash.jpg";
import short4 from "@/assets/products/short/sule-makaroglu-WOWOE84BS60-unsplash.jpg";
import short5 from "@/assets/products/short/valentina-ivanova-NS3F1hNlyas-unsplash.jpg";

//pants
import pants1 from "@/assets/products/pants/alicia-petresc-BciCcl8tjVU-unsplash.jpg";
import pants2 from "@/assets/products/pants/brock-wegner-g2fE1R20QgU-unsplash.jpg";
import pants3 from "@/assets/products/pants/guilherme-caetano-gswrotk34cw-unsplash.jpg";
import pants4 from "@/assets/products/pants/mark-adriane-uJ3N7HLiEg-unsplash.jpg";

//top
import tops1 from "@/assets/products/tops/alexey-turenkov-XxO67kO1G7A-unsplash.jpg";
import tops2 from "@/assets/products/tops/astrit-WuUd2EGHoi4-unsplash.jpg";
import tops3 from "@/assets/products/tops/fabian-albert-AvnXTPOPVHY-unsplash.jpg";
import tops4 from "@/assets/products/tops/pedro-sousa-UYmdZqXREF0-unsplash.jpg";
import tops5 from "@/assets/products/tops/mesut-cicen-YAc7-rMrUHs-unsplash.jpg";
import tops6 from "@/assets/products/tops/dmitriy-k-PG3XeL1uWdU-unsplash.jpg";

const jewelry: ProductType[] = [
  {
    id: "01963988-e183-7127-9535-d805281fbd89",
    title: "Lorem Ipsum Dolor Sit",
    images: [
      {
        src: jewelry1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 49.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.6,
      votes: 123,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Angelo Pantazis",
      url: "https://unsplash.com/pt-br/@angelopantazis",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-72e2-9c59-4e625f86f0af",
    title: "Suspendisse Potenti",
    images: [
      {
        src: jewelry2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 29.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 5,
      votes: 98,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "earring"],
    author: {
      name: "Cat Han",
      url: "https://unsplash.com/pt-br/@figmentprints",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-77d5-ae35-270f6a466ed6",
    title: "Cras Blandit",
    images: [
      {
        src: jewelry3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 59.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.7,
      votes: 200,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "earring"],
    author: {
      name: "Jasmin Chew",
      url: "https://unsplash.com/pt-br/@majestical_jasmin",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7ab8-945b-dcc7cecef56c",
    title: "Curabitur Mattis",
    images: [
      {
        src: jewelry4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 39.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.1,
      votes: 85,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Jasmin Chew",
      url: "https://unsplash.com/pt-br/@majestical_jasmin",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-71cc-84e8-454d5b6fae80",
    title: "Vivamus Ultricies",
    images: [
      {
        src: jewelry5,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 69.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.9,
      votes: 300,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "earring"],
    author: {
      name: "Julia Cheperis",
      url: "https://unsplash.com/pt-br/@inception",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry5,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7d17-a614-b3b32396ba3e",
    title: "Aenean Auctor",
    images: [
      {
        src: jewelry6,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 55.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.2,
      votes: 110,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "earring"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry6,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7ddc-bcc7-a73bdb3c1eb7",
    title: "Donec Sodales",
    images: [
      {
        src: jewelry7,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 35.99,
    rating: {
      score: 4.2,
      votes: 95,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "ring"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "16",
        stock: 6,
      },
      {
        size: "18",
        stock: 8,
      },
      {
        size: "20",
        stock: 2,
      },
      {
        size: "22",
        stock: 5,
      },
    ],
    thumbnail: {
      src: jewelry7,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-72c3-b6ee-6ac9080261b0",
    title: "Pellentesque Fermentum",
    images: [
      {
        src: jewelry8,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 47.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.5,
      votes: 150,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry8,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7fd2-85f7-15606ffd03de",
    title: "Aliquam Pharetra",
    images: [
      {
        src: jewelry9,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 62.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.6,
      votes: 210,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Max Ducourneau",
      url: "https://unsplash.com/pt-br/@maxdcrn",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry9,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7988-bb51-6d12ba549a6b",
    title: "Phasellus Ultrices",
    images: [
      {
        src: jewelry10,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 54.99,
    rating: {
      score: 4.4,
      votes: 140,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "ring", "bracelet"],
    author: {
      name: "Natali Hordiiuk",
      url: "http://unsplash.com/pt-br/@whynotnatali",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "16",
        stock: 8,
      },
      {
        size: "18",
        stock: 5,
      },
      {
        size: "20",
        stock: 0,
      },
      {
        size: "22",
        stock: 0,
      },
    ],
    thumbnail: {
      src: jewelry10,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7a78-a0d7-90d963d8f2ff",
    title: "Vestibulum Ante",
    images: [
      {
        src: jewelry11,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 48.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 5,
      votes: 120,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "earring"],
    author: {
      name: "Nataliya Melnychuk",
      url: "https://unsplash.com/pt-br/@natinati",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry11,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963f54-3a89-796c-8b91-5707028859ef",
    title: "Vestibulum Ante",
    images: [
      {
        src: jewelry12,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 48.99,
    sizes: [{ size: "TU", stock: 8 }],
    rating: {
      score: 4.3,
      votes: 120,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "bracelet"],
    author: {
      name: "Sama Hosseini",
      url: "https://unsplash.com/pt-br/@samahosseini",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry12,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963f54-48f7-7fd3-84e2-6c2b5091d11e",
    title: "Vestibulum Ante",
    images: [
      {
        src: jewelry13,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 41.99,
    sizes: [{ size: "TU", stock: 2 }],
    rating: {
      score: 4.2,
      votes: 107,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "bracelet"],
    author: {
      name: "Sandi Benedicta",
      url: "https://unsplash.com/pt-br/@sendun",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry13,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963f54-6b89-73e4-8b96-1ab4721ca47f",
    title: "Vestibulum Ante",
    images: [
      {
        src: jewelry14,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 34.99,
    sizes: [{ size: "TU", stock: 7 }],
    rating: {
      score: 4.1,
      votes: 80,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "bracelet"],
    author: {
      name: "Tânia Mousinho",
      url: "https://unsplash.com/pt-br/@shotsbytania",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry14,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963f5b-e61e-7d90-9e1f-3548bf624f5e",
    title: "Vestibulum Ante",
    images: [
      {
        src: jewelry15,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 65.99,
    sizes: [{ size: "TU", stock: 12 }],
    rating: {
      score: 4.8,
      votes: 97,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "necklace", "ring"],
    author: {
      name: "Christian Agbede",
      url: "https://unsplash.com/pt-br/@chriscreations__",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    thumbnail: {
      src: jewelry15,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7a5f-8ef4-26fba6187e03",
    title: "Mauris Finibus",
    images: [
      {
        src: jewelry16,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 44.99,
    sizes: [{ size: "TU", stock: 3 }],
    rating: {
      score: 4.8,
      votes: 130,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["jewelry", "necklace"],
    author: {
      name: "Kateryna Hliznitsova",
      url: "https://unsplash.com/pt-br/@kate_gliz",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],

    thumbnail: {
      src: jewelry16,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const dresses: ProductType[] = [
  {
    id: "01963988-e183-7093-bcdd-a5e4a40f7646",
    title: "Lorem Ipsum Dolor Sit",
    images: [
      {
        src: dress1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 45.99,

    rating: {
      score: 4.5,
      votes: 145,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Ali Karimiboroujeni",
      url: "https://unsplash.com/pt-br/@alikarimibn",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 18,
      },
      {
        size: "36",
        stock: 9,
      },
      {
        size: "38",
        stock: 8,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 14,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: dress1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7b2c-9ae1-18747a84b764",
    title: "Suspendisse Potenti",
    images: [
      {
        src: dress2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 32.5,

    rating: {
      score: 3.9,
      votes: 105,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Ernest Tarasov",
      url: "https://unsplash.com/pt-br/s/usu%C3%A1rios/ernest-tarasov",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 6,
      },
      {
        size: "36",
        stock: 14,
      },
      {
        size: "38",
        stock: 7,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 17,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: dress2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-75a9-8387-25f628af8621",
    title: "Cras Blandit",
    images: [
      {
        src: dress3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 52.99,

    rating: {
      score: 4.8,
      votes: 230,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Jesus Santos",
      url: "https://unsplash.com/pt-br/@jesussantosphotography",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 10,
      },
      {
        size: "36",
        stock: 4,
      },
      {
        size: "38",
        stock: 4,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 17,
      },
      {
        size: "44",
        stock: 18,
      },
    ],
    thumbnail: {
      src: dress3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7488-bd2a-c2807237d175",
    title: "Curabitur Mattis",
    images: [
      {
        src: dress4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 38.99,

    rating: {
      score: 4.2,
      votes: 112,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Jim Romero",
      url: "https://unsplash.com/pt-br/@jimromero",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 2,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 9,
      },
      {
        size: "44",
        stock: 6,
      },
    ],
    thumbnail: {
      src: dress4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7666-8b92-659546c3cc65",
    title: "Vivamus Ultricies",
    images: [
      {
        src: dress5,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        src: dress5p2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 65,

    rating: {
      score: 4.9,
      votes: 310,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Shuvalova Natalia",
      url: "https://www.pexels.com/pt-br/@shuvalova-natalia-415991090/",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 4,
      },
      {
        size: "36",
        stock: 8,
      },
      {
        size: "38",
        stock: 5,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 7,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: dress5,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7eef-aaf6-8bec715f6dbc",
    title: "Mauris Finibus",
    images: [
      {
        src: dress6,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 41.99,

    rating: {
      score: 4.1,
      votes: 126,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Tamara Bellis",
      url: "https://unsplash.com/pt-br/@tamarabellis",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 11,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 19,
      },
      {
        size: "42",
        stock: 1,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: dress6,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963f6e-7f4a-73e1-afca-582036f03878",
    title: "Mauris Finibus",
    images: [
      {
        src: dress7,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 55.99,
    rating: {
      score: 4.5,
      votes: 78,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["dress"],
    author: {
      name: "Minh Dang",
      url: "https://unsplash.com/pt-br/@tamarabellis",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 10,
      },
      {
        size: "36",
        stock: 5,
      },
      {
        size: "38",
        stock: 9,
      },
      {
        size: "40",
        stock: 1,
      },
      {
        size: "42",
        stock: 0,
      },
      {
        size: "44",
        stock: 15,
      },
    ],
    thumbnail: {
      src: dress7,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const intimate: ProductType[] = [
  {
    id: "01963988-e183-7c2a-bac7-da4abf2cab13",
    title: "Lorem Ipsum Dolor Sit",
    images: [
      {
        src: intimate1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 29.99,
    rating: {
      score: 4.2,
      votes: 98,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Anna Deli",
      url: "https://unsplash.com/pt-br/@andeli",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 16,
      },
      {
        size: "36",
        stock: 6,
      },
      {
        size: "38",
        stock: 7,
      },
      {
        size: "40",
        stock: 15,
      },
      {
        size: "42",
        stock: 0,
      },
      {
        size: "44",
        stock: 18,
      },
    ],
    thumbnail: {
      src: intimate1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-708d-930f-cca9832d6172",
    title: "Suspendisse Potenti",
    images: [
      {
        src: intimate2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 34.5,
    rating: {
      score: 4.4,
      votes: 70,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Ddddddarya",
      url: "https://unsplash.com/pt-br/@ddddddarya",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 15,
      },
      {
        size: "36",
        stock: 3,
      },
      {
        size: "38",
        stock: 4,
      },
      {
        size: "40",
        stock: 12,
      },
      {
        size: "42",
        stock: 19,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: intimate2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-776e-9609-0bc7652ab781",
    title: "Cras Blandit",
    images: [
      {
        src: intimate3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 41.99,
    rating: {
      score: 4.7,
      votes: 183,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Joe Ciciarelli",
      url: "https://unsplash.com/pt-br/@claritycontrol",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 3,
      },
      {
        size: "36",
        stock: 4,
      },
      {
        size: "38",
        stock: 14,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 2,
      },
      {
        size: "44",
        stock: 6,
      },
    ],
    thumbnail: {
      src: intimate3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7440-8203-d6df60c6ee79",
    title: "Curabitur Mattis",
    images: [
      {
        src: intimate4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 37.99,
    rating: {
      score: 4.1,
      votes: 124,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Kate Tepl",
      url: "https://unsplash.com/pt-br/@kate_tepla",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 12,
      },
      {
        size: "36",
        stock: 17,
      },
      {
        size: "38",
        stock: 3,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 11,
      },
      {
        size: "44",
        stock: 4,
      },
    ],
    thumbnail: {
      src: intimate4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-78a5-8ca3-a8cb6ea0e425",
    title: "Vivamus Ultricies",
    images: [
      {
        src: intimate5,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 44,
    rating: {
      score: 4.8,
      votes: 235,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Jonaorle",
      url: "https://www.pexels.com/pt-br/@jonaorle/",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 3,
      },
      {
        size: "36",
        stock: 2,
      },
      {
        size: "38",
        stock: 6,
      },
      {
        size: "40",
        stock: 1,
      },
      {
        size: "42",
        stock: 7,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: intimate5,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7279-abda-4f9589ecabfa",
    title: "Mauris Finibus",
    images: [
      {
        src: intimate6,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 32.99,
    rating: {
      score: 5,
      votes: 109,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Riccardo Carlo Rossi",
      url: "https://unsplash.com/pt-br/@daysofgrain",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 4,
      },
      {
        size: "38",
        stock: 9,
      },
      {
        size: "40",
        stock: 11,
      },
      {
        size: "42",
        stock: 16,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: intimate6,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01963988-e183-7279-abda-4f9589eeabfa",
    title: "Mauris Finibus",
    images: [
      {
        src: intimate7,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        src: intimate7p2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 39.99,
    rating: {
      score: 4.8,
      votes: 126,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["intimate"],
    author: {
      name: "Riccardo Carlo Rossi",
      url: "https://unsplash.com/pt-br/@daysofgrain",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 1,
      },
      {
        size: "36",
        stock: 5,
      },
      {
        size: "38",
        stock: 3,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 0,
      },
      {
        size: "44",
        stock: 3,
      },
    ],
    thumbnail: {
      src: intimate7,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const shirt: ProductType[] = [
  {
    id: "019643ce-dfb7-7173-84ac-e444c856d5db",
    title: "Aenean Auctor",
    images: [
      {
        src: shirt1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 55.99,
    rating: {
      score: 4.6,
      votes: 123,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shirt"],
    author: {
      name: "Aedrian Salazar",
      url: "https://unsplash.com/pt-br/@aedrian",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 3,
      },
      {
        size: "36",
        stock: 8,
      },
      {
        size: "38",
        stock: 20,
      },
      {
        size: "40",
        stock: 18,
      },
      {
        size: "42",
        stock: 2,
      },
      {
        size: "44",
        stock: 9,
      },
    ],
    thumbnail: {
      src: shirt1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196407c-2724-78e4-a609-1b318aff13c5",
    title: "Aenean Auctor",
    images: [
      {
        src: shirt2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 52.99,
    rating: {
      score: 4.3,
      votes: 91,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shirt"],
    author: {
      name: "Jon Ly",
      url: "https://unsplash.com/pt-br/@jonatron",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 10,
      },
      {
        size: "36",
        stock: 17,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 2,
      },
      {
        size: "42",
        stock: 5,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: shirt2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196407c-2a49-736e-8918-72d0ebc91445",
    title: "Aenean Auctor",
    images: [
      {
        src: shirt3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 49.99,
    rating: {
      score: 4.7,
      votes: 97,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shirt"],
    author: {
      name: "Josh Pereira",
      url: "https://unsplash.com/pt-br/@joshpereiraphotography",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 9,
      },
      {
        size: "36",
        stock: 12,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 19,
      },
      {
        size: "42",
        stock: 6,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: shirt3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196407d-aeef-70ad-b228-2774b72370ce",
    title: "Aenean Auctor",
    images: [
      {
        src: shirt4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 45.99,
    rating: {
      score: 4.9,
      votes: 132,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shirt"],
    author: {
      name: "Mesut çiçen",
      url: "https://unsplash.com/pt-br/@mesutcicen",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 16,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 12,
      },
      {
        size: "42",
        stock: 18,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: shirt4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196407c-2c18-70fb-afb0-d8df8153a609",
    title: "Aenean Auctor",
    images: [
      {
        src: shirt5,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 57.99,
    rating: {
      score: 4.6,
      votes: 109,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shirt"],
    author: {
      name: "Pouriya kafaei",
      url: "https://unsplash.com/pt-br/@pouriyakafaei",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 15,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 6,
      },
      {
        size: "42",
        stock: 2,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: shirt5,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const shorts: ProductType[] = [
  {
    id: "019643cf-7ea4-725a-9094-99fef0b732f6",
    title: "Aenean Auctor",
    images: [
      {
        src: short1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 45.99,
    rating: {
      score: 4.3,
      votes: 89,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shorts"],
    author: {
      name: "Jasmin Chew",
      url: "https://unsplash.com/pt-br/@majestical_jasmin",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 5,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 4,
      },
      {
        size: "42",
        stock: 10,
      },
      {
        size: "44",
        stock: 15,
      },
    ],
    thumbnail: {
      src: short1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "019643cf-b6fe-70f5-8c93-2f65fd841d07",
    title: "Aenean Auctor",
    images: [
      {
        src: short2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 47.99,
    rating: {
      score: 4.6,
      votes: 99,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shorts"],
    author: {
      name: "Jeffery Erhunse",
      url: "https://unsplash.com/pt-br/@j_erhunse",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 8,
      },
      {
        size: "38",
        stock: 4,
      },
      {
        size: "40",
        stock: 7,
      },
      {
        size: "42",
        stock: 15,
      },
      {
        size: "44",
        stock: 9,
      },
    ],
    thumbnail: {
      src: short2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "019643cf-b8c2-74e4-a668-8ad0c8c3fe75",
    title: "Aenean Auctor",
    images: [
      {
        src: short3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 58.99,
    rating: {
      score: 5,
      votes: 101,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shorts"],
    author: {
      name: "Steven Aguilar",
      url: "https://unsplash.com/pt-br/@eysteve",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 7,
      },
      {
        size: "36",
        stock: 4,
      },
      {
        size: "38",
        stock: 13,
      },
      {
        size: "40",
        stock: 6,
      },
      {
        size: "42",
        stock: 7,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: short3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "019643cf-babc-7f79-9416-1e9a3e78dba7",
    title: "Aenean Auctor",
    images: [
      {
        src: short4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 39.99,
    rating: {
      score: 4.7,
      votes: 78,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shorts"],
    author: {
      name: "ŞULE MAKAROĞLU",
      url: "https://unsplash.com/pt-br/@sulemakaroglu",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 9,
      },
      {
        size: "36",
        stock: 8,
      },
      {
        size: "38",
        stock: 2,
      },
      {
        size: "40",
        stock: 20,
      },
      {
        size: "42",
        stock: 18,
      },
      {
        size: "44",
        stock: 6,
      },
    ],
    thumbnail: {
      src: short4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "019643cf-bc47-7e2e-b6ff-8452ab0f5d99",
    title: "Aenean Auctor",
    images: [
      {
        src: short5,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 47.99,
    rating: {
      score: 5,
      votes: 101,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["shorts"],
    author: {
      name: "Valentina Ivanova",
      url: "https://unsplash.com/pt-br/@valentine_ivanova",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 19,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 12,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 4,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: short5,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const pants: ProductType[] = [
  {
    id: "01964401-d4a6-738a-89c5-37791f001560",
    title: "Aenean Auctor",
    images: [
      {
        src: pants1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 47.99,
    rating: {
      score: 4.7,
      votes: 75,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["pants"],
    author: {
      name: "Alicia Petresc",
      url: "https://unsplash.com/pt-br/@alice02",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 5,
      },
      {
        size: "36",
        stock: 11,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 14,
      },
      {
        size: "42",
        stock: 18,
      },
      {
        size: "44",
        stock: 15,
      },
    ],
    thumbnail: {
      src: pants1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01964401-ea37-750a-93ba-d2079bf072c4",
    title: "Aenean Auctor",
    images: [
      {
        src: pants2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 59.99,
    rating: {
      score: 4.9,
      votes: 82,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["pants"],
    author: {
      name: "Brock Wegner",
      url: "https://unsplash.com/pt-br/@isthatbrock",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 11,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 10,
      },
      {
        size: "40",
        stock: 7,
      },
      {
        size: "42",
        stock: 12,
      },
      {
        size: "44",
        stock: 5,
      },
    ],
    thumbnail: {
      src: pants2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01964401-ebb3-756a-8a86-1e802909d9e4",
    title: "Aenean Auctor",
    images: [
      {
        src: pants3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 48.99,
    rating: {
      score: 4.8,
      votes: 69,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["pants"],
    author: {
      name: "Guilherme Caetano",
      url: "https://unsplash.com/pt-br/@guicaetano",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 4,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 15,
      },
      {
        size: "42",
        stock: 13,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: pants3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "01964401-ed94-7426-be03-0ecaf724069c",
    title: "Aenean Auctor",
    images: [
      {
        src: pants4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 44.99,
    rating: {
      score: 4.5,
      votes: 56,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["pants"],
    author: {
      name: "Mark Adriane",
      url: "https://unsplash.com/pt-br/@markadriane",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 7,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 14,
      },
      {
        size: "40",
        stock: 15,
      },
      {
        size: "42",
        stock: 0,
      },
      {
        size: "44",
        stock: 0,
      },
    ],
    thumbnail: {
      src: pants4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

const tops: ProductType[] = [
  {
    id: "0196442d-897e-7c1c-8141-a572a18ea0dd",
    title: "Aenean Auctor",
    images: [
      {
        src: tops1,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 39.99,
    rating: {
      score: 4.6,
      votes: 75,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["tops"],
    author: {
      name: "Alexey Turenkov",
      url: "https://unsplash.com/pt-br/@2renkov",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 12,
      },
      {
        size: "36",
        stock: 15,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 18,
      },
      {
        size: "44",
        stock: 2,
      },
    ],
    thumbnail: {
      src: tops1,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196442d-972b-7696-88a0-11c3c6c416e7",
    title: "Aenean Auctor",
    images: [
      {
        src: tops2,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 46.99,
    rating: {
      score: 4.3,
      votes: 87,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["tops"],
    author: {
      name: "Astrit",
      url: "https://unsplash.com/pt-br/@astrit",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 13,
      },
      {
        size: "36",
        stock: 20,
      },
      {
        size: "38",
        stock: 13,
      },
      {
        size: "40",
        stock: 5,
      },
      {
        size: "42",
        stock: 8,
      },
      {
        size: "44",
        stock: 5,
      },
    ],
    thumbnail: {
      src: tops2,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196442d-991a-7092-9963-2570c5da5016",
    title: "Aenean Auctor",
    images: [
      {
        src: tops3,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 44.99,
    rating: {
      score: 4.5,
      votes: 56,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["tops"],
    author: {
      name: "Pedro Sousa",
      url: "https://unsplash.com/pt-br/@gpedrosousa",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 1,
      },
      {
        size: "36",
        stock: 8,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 9,
      },
      {
        size: "42",
        stock: 12,
      },
      {
        size: "44",
        stock: 14,
      },
    ],
    thumbnail: {
      src: tops3,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196442d-9ade-70a9-8ed6-90c6822433e3",
    title: "Aenean Auctor",
    images: [
      {
        src: tops4,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 53.99,
    rating: {
      score: 4.7,
      votes: 78,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["tops"],
    author: {
      name: "Fabian Albert",
      url: "https://unsplash.com/pt-br/@fabiraw",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 16,
      },
      {
        size: "40",
        stock: 8,
      },
      {
        size: "42",
        stock: 11,
      },
      {
        size: "44",
        stock: 4,
      },
    ],
    thumbnail: {
      src: tops4,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196447b-82d7-7a75-a297-e57641eae5c2",
    title: "Aenean Auctor",
    images: [
      {
        src: tops5,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 56.99,
    rating: {
      score: 4.9,
      votes: 114,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["tops"],
    author: {
      name: "Mesut çiçen",
      url: "https://unsplash.com/pt-br/@mesutcicen",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 13,
      },
      {
        size: "36",
        stock: 0,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 0,
      },
      {
        size: "42",
        stock: 7,
      },
      {
        size: "44",
        stock: 19,
      },
    ],
    thumbnail: {
      src: tops5,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
  {
    id: "0196447f-66d8-7930-aa40-8cbf1d0b7247",
    title: "Aenean Auctor",
    images: [
      {
        src: tops6,
        alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    price: 42.99,
    rating: {
      score: 4.7,
      votes: 113,
    },
    description:
      "Cras blandit aut perferendis facere qui eius voluptas et minima perferendis. A beatae eaque qui architecto accusamus eum reiciendis aspernatur est atque autem et ipsa galisum est fugiat iste ut neque laboriosam. Nam dolores voluptatum sed provident suscipit non dolorem ipsam sed molestiae assumenda aut Quis quam est natus explicabo.",
    type: ["tops"],
    author: {
      name: "Dmitriy K.",
      url: "https://unsplash.com/pt-br/@fiwol",
    },
    details: [
      {
        title: "Composition",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
      {
        title: "Care",
        contents: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quo.",
          "Ea itaque sequi sit animi minus aut dolor sint ut dolores perferendis.",
          "Vel reiciendis laborum et perferendis voluptatem non temporibus eligendi.",
        ],
      },
    ],
    sizes: [
      {
        size: "34",
        stock: 0,
      },
      {
        size: "36",
        stock: 15,
      },
      {
        size: "38",
        stock: 0,
      },
      {
        size: "40",
        stock: 15,
      },
      {
        size: "42",
        stock: 19,
      },
      {
        size: "44",
        stock: 20,
      },
    ],
    thumbnail: {
      src: tops6,
      alt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  },
];

export const products: ProductType[]  = [
  ...jewelry,
  ...dresses,
  ...intimate,
  ...shirt,
  ...shorts,
  ...pants,
  ...tops,
  ...collections,
];
