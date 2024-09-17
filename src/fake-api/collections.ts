import { ProductType } from "@/_types/ProductsType";
import summer1 from "@/assets/summer/alexander-grey-NXom4fEGDes-unsplash.jpg";
import summer2 from "@/assets/summer/alexander-jawfox-zXa0Peaq30U-unsplash.jpg";
import summer3 from "@/assets/summer/jernej-graj-8y6L01KFagQ-unsplash.jpg";
import summer4 from "@/assets/summer/christopher-campbell-483r_jIASq0-unsplash.jpg";
import summer5 from "@/assets/summer/matas-katinas-jYDRaDUfYsA-unsplash.jpg";
import summer6 from "@/assets/summer/sule-makaroglu-33GgRmC_Huc-unsplash.jpg";
import summer6p2 from "@/assets/summer/sule-makaroglu-BSOVhRtTH7c-unsplash.jpg";
import summer7 from "@/assets/summer/sule-makaroglu-8QF8cD0T26w-unsplash.jpg";
import summer7p2 from "@/assets/summer/sule-makaroglu-pu2DMQ-Bi5s-unsplash.jpg";
import summer8 from "@/assets/summer/tamara-bellis-NXJMAp4csx0-unsplash.jpg";
import summer9 from "@/assets/summer/tamara-bellis-y4eKeASlLok-unsplash.jpg";
import summer10 from "@/assets/summer/tamara-bellis-yAsdIQKrXfU-unsplash.jpg";
import summer11 from "@/assets/summer/stepan-kalinin-z7zHwR5v-bA-unsplash.jpg";
import summer12 from "@/assets/summer/tudor-adrian-gloe7HNn4g4-unsplash.jpg";

import sport1 from "@/assets/sport/artem-mihailov-XGPXbVNu6e8-unsplash.jpg";
import sport2 from "@/assets/sport/erwans-socks-LBBc6wrbYcs-unsplash.jpg";
import sport3 from "@/assets/sport/korie-cull-3THr5zbJKPU-unsplash.jpg";
import sport4 from "@/assets/sport/mahdi-chaghari-C0iF9gJ3TWs-unsplash.jpg";
import sport5 from "@/assets/sport/sergey-sokolov-cO-5xW3uDxo-unsplash.jpg";
import sport6 from "@/assets/sport/sergey-sokolov-z2L4PU8xZEk-unsplash.jpg";
import sport7 from "@/assets/sport/sheldon-5mTOegXTMUM-unsplash.jpg";
import sport8 from "@/assets/sport/alonso-reyes-xd4tmzR8Uog-unsplash.jpg";
import sport9 from "@/assets/sport/anastase-maragos-J7IBavYCdUA-unsplash.jpg";
import sport10 from "@/assets/sport/ayo-ogunseinde-0xWXyaa8bTQ-unsplash.jpg";
import sport11 from "@/assets/sport/nick-pliahas-LiQLeo-ZhX4-unsplash.jpg";
import sport12 from "@/assets/sport/tony-luginsland-ofaBcg1xZL0-unsplash.jpg";

import genz1 from "@/assets/genz/joshua-rondeau-4o2oh185-VY-unsplash.jpg";
import genz1p2 from "@/assets/genz/joshua-rondeau-xFAD1brcgQk-unsplash.jpg";
import genz2 from "@/assets/genz/joshua-rondeau-MCd8GU4nz8M-unsplash.jpg";
import genz2p2 from "@/assets/genz/joshua-rondeau-TG8vuPf2O-I-unsplash.jpg";
import genz3 from "@/assets/genz/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg";
import genz4 from "@/assets/genz/laurence-la-madeleine-UFx2N7b1fCw-unsplash.jpg";
import genz4p2 from "@/assets/genz/laurence-la-madeleine-e1K3E_dTEcQ-unsplash.jpg";
import genz5 from "@/assets/genz/mahdi-chaghari-1z6vvU_L-Yw-unsplash.jpg";
import genz6 from "@/assets/genz/mahdi-chaghari-O6mLuklQSew-unsplash.jpg";
import genz7 from "@/assets/genz/nina-hill-hYdBKU8Qt_Y-unsplash.jpg";
import genz7p2 from "@/assets/genz/nina-hill-lPaN28ty33s-unsplash.jpg";
import genz8 from "@/assets/genz/sule-makaroglu-qktiaNv700Y-unsplash.jpg";
import genz9 from "@/assets/genz/ayo-ogunseinde-0im7yfJ3qog-unsplash.jpg";
import genz10 from "@/assets/genz/dom-hill-nimElTcTNyY-unsplash.jpg";
import genz11 from "@/assets/genz/guilherme-caetano-gswrotk34cw-unsplash.jpg";
import genz12 from "@/assets/genz/lawrence-chismorie-2jNLXZfuZVA-unsplash.jpg";

import spring1 from "@/assets/spring/bailey-burton-jN8PVzZQ9iQ-unsplash.jpg";
import spring2 from "@/assets/spring/benigno-hoyuela-kBzGRtgJhPo-unsplash.jpg";
import spring3 from "@/assets/spring/jasmin-chew-e_fwWMPw97Y-unsplash.jpg";
import spring4 from "@/assets/spring/jasmin-chew-txy8AZU04iw-unsplash.jpg";
import spring5 from "@/assets/spring/lance-reis-E0DmI5Elrjs-unsplash.jpg";
import spring6 from "@/assets/spring/lance-reis-E0DmI5Elrjs-unsplash.jpg";
import spring7 from "@/assets/spring/pexels-anastasia-nagibina-1116204043-24342718.jpg";
import spring8 from "@/assets/spring/pexels-gailstaters-3170390.jpg";
import spring9 from "@/assets/spring/pexels-kowalievska-1055691.jpg";
import spring10 from "@/assets/spring/pexels-vitoriasantos-3050943.jpg";
import spring11 from "@/assets/spring/sam-chapman-rEA2MzwxGmY-unsplash.jpg";
import spring12 from "@/assets/spring/vitalii-khodzinskyi-nYM9SSk7vC8-unsplash.jpg";

export const summer: ProductType[] = [
  {
    id: "1",
    title: "Lorem Ipsum Dolor Sit Amet 1",
    images: {
      src: summer1,
      alt: "Lorem 1",
    },
    price: 29.9,
    stock: 12,
    rating: {
      score: 5,
      votes: 756,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "2",
    title: "Lorem Ipsum Dolor Sit Amet 2",
    images: {
      src: summer2,
      alt: "Lorem 2",
    },
    price: 35.5,
    stock: 8,
    rating: {
      score: 4.5,
      votes: 892,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "3",
    title: "Lorem Ipsum Dolor Sit Amet 3",
    images: {
      src: summer3,
      alt: "Lorem 3",
    },
    price: 42.0,
    stock: 5,
    rating: {
      score: 4.7,
      votes: 1024,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "4",
    title: "Lorem Ipsum Dolor Sit Amet 4",
    images: {
      src: summer4,
      alt: "Lorem 4",
    },
    price: 25.0,
    stock: 9,
    rating: {
      score: 5,
      votes: 670,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "5",
    title: "Lorem Ipsum Dolor Sit Amet 5",
    images: {
      src: summer5,
      alt: "Lorem 5",
    },
    price: 39.9,
    stock: 15,
    rating: {
      score: 4.6,
      votes: 845,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "6",
    title: "Lorem Ipsum Dolor Sit Amet 6",
    images: {
      src: summer6,
      alt: "Lorem 6",
      subImages: [
        {
          src: summer6p2,
          alt: "Lorem 6p2",
        },
      ],
    },
    price: 31.5,
    stock: 7,
    rating: {
      score: 4.4,
      votes: 790,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "7",
    title: "Lorem Ipsum Dolor Sit Amet 7",
    images: {
      src: summer7,
      alt: "Lorem 7",
      subImages: [
        {
          src: summer7p2,
          alt: "Lorem 7p2",
        },
      ],
    },
    price: 28.0,
    stock: 11,
    rating: {
      score: 4.2,
      votes: 610,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "8",
    title: "Lorem Ipsum Dolor Sit Amet 8",
    images: {
      src: summer8,
      alt: "Lorem 8",
    },
    price: 45.0,
    stock: 10,
    rating: {
      score: 4.8,
      votes: 950,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "9",
    title: "Lorem Ipsum Dolor Sit Amet 9",
    images: {
      src: summer9,
      alt: "Lorem 9",
    },
    price: 32.9,
    stock: 6,
    rating: {
      score: 4,
      votes: 740,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "10",
    title: "Lorem Ipsum Dolor Sit Amet 10",
    images: {
      src: summer10,
      alt: "Lorem 10",
    },
    price: 26.5,
    stock: 14,
    rating: {
      score: 4.9,
      votes: 580,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "11",
    title: "Lorem Ipsum Dolor Sit Amet 11",
    images: {
      src: summer11,
      alt: "Lorem 11",
    },
    price: 38.0,
    stock: 13,
    rating: {
      score: 5,
      votes: 860,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
  {
    id: "12",
    title: "Lorem Ipsum Dolor Sit Amet 12",
    images: {
      src: summer12,
      alt: "Lorem 12",
    },
    price: 34.9,
    stock: 12,
    rating: {
      score: 4.6,
      votes: 920,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda voluptatem totam.",
  },
];

export const sport: ProductType[] = [
  {
    id: "21",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: sport1,
      alt: "Lorem",
    },
    price: 49.99,
    stock: 20,
    rating: {
      score: 4.3,
      votes: 123,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
  },
  {
    id: "22",
    title: "Consectetur Adipiscing Elit",
    images: {
      src: sport2,
      alt: "Consectetur",
    },
    price: 55.9,
    stock: 12,
    rating: {
      score: 4.5,
      votes: 898,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
  },
  {
    id: "23",
    title: "Vestibulum Ante Ipsum",
    images: {
      src: sport3,
      alt: "Vestibulum",
    },
    price: 39.95,
    stock: 15,
    rating: {
      score: 4.0,
      votes: 200,
    },
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    id: "24",
    title: "Integer Nec Odio",
    images: {
      src: sport4,
      alt: "Integer",
    },
    price: 60.0,
    stock: 18,
    rating: {
      score: 4.7,
      votes: 110,
    },
    description:
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
  {
    id: "25",
    title: "Praesent Mauris",
    images: {
      src: sport5,
      alt: "Praesent",
    },
    price: 45.5,
    stock: 25,
    rating: {
      score: 4.2,
      votes: 340,
    },
    description:
      "Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
  },
  {
    id: "26",
    title: "Sed Cursus Ante",
    images: {
      src: sport6,
      alt: "Sed Cursus",
    },
    price: 35.99,
    stock: 22,
    rating: {
      score: 4.1,
      votes: 287,
    },
    description:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    id: "27",
    title: "Nulla Quis Sem",
    images: {
      src: sport7,
      alt: "Nulla Quis",
    },
    price: 29.95,
    stock: 30,
    rating: {
      score: 4.5,
      votes: 150,
    },
    description:
      "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: "28",
    title: "Morbi Leo Risus",
    images: {
      src: sport8,
      alt: "Morbi Leo",
    },
    price: 42.0,
    stock: 16,
    rating: {
      score: 5,
      votes: 412,
    },
    description:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    id: "29",
    title: "Cras Mattis Consectetur",
    images: {
      src: sport9,
      alt: "Cras Mattis",
    },
    price: 37.5,
    stock: 19,
    rating: {
      score: 4.3,
      votes: 267,
    },
    description:
      "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    id: "30",
    title: "Donec Ullamcorper",
    images: {
      src: sport10,
      alt: "Donec Ullamcorper",
    },
    price: 50.5,
    stock: 17,
    rating: {
      score: 4.4,
      votes: 534,
    },
    description:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.",
  },
  {
    id: "31",
    title: "Vestibulum Id Ligula",
    images: {
      src: sport11,
      alt: "Vestibulum Id",
    },
    price: 39.0,
    stock: 28,
    rating: {
      score: 4.6,
      votes: 189,
    },
    description:
      "Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.",
  },
  {
    id: "32",
    title: "Curabitur Blandit Tempus",
    images: {
      src: sport12,
      alt: "Curabitur Blandit",
    },
    price: 44.9,
    stock: 21,
    rating: {
      score: 4.3,
      votes: 321,
    },
    description:
      "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
];

export const genz: ProductType[] = [
  {
    id: "40",
    title: "Lorem Ipsum Dolor Sit",
    images: {
      src: genz1,
      alt: "Lorem",
      subImages: [{ src: genz1p2, alt: "Lorem" }],
    },
    price: 49.99,
    stock: 20,
    rating: {
      score: 4.3,
      votes: 123,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
  },
  {
    id: "41",
    title: "Consectetur Adipiscing Elit",
    images: {
      src: genz2,
      alt: "Consectetur",
      subImages: [{ src: genz2p2, alt: "Lorem" }],
    },
    price: 55.9,
    stock: 12,
    rating: {
      score: 5,
      votes: 898,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
  },
  {
    id: "42",
    title: "Vestibulum Ante Ipsum",
    images: {
      src: genz3,
      alt: "Vestibulum",
    },
    price: 39.95,
    stock: 15,
    rating: {
      score: 4.0,
      votes: 200,
    },
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    id: "43",
    title: "Integer Nec Odio",
    images: {
      src: genz4,
      alt: "Integer",
      subImages: [{ src: genz4p2, alt: "Lorem" }],
    },
    price: 60.0,
    stock: 18,
    rating: {
      score: 4.7,
      votes: 110,
    },
    description:
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
  {
    id: "44",
    title: "Praesent Mauris",
    images: {
      src: genz5,
      alt: "Praesent",
    },
    price: 45.5,
    stock: 25,
    rating: {
      score: 4.2,
      votes: 340,
    },
    description:
      "Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
  },
  {
    id: "45",
    title: "Sed Cursus Ante",
    images: {
      src: genz6,
      alt: "Sed Cursus",
    },
    price: 35.99,
    stock: 22,
    rating: {
      score: 4.1,
      votes: 287,
    },
    description:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    id: "46",
    title: "Nulla Quis Sem",
    images: {
      src: genz7,
      alt: "Nulla Quis",
      subImages: [{ src: genz7p2, alt: "Lorem" }],
    },
    price: 29.95,
    stock: 30,
    rating: {
      score: 3.9,
      votes: 150,
    },
    description:
      "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: "47",
    title: "Morbi Leo Risus",
    images: {
      src: genz8,
      alt: "Morbi Leo",
    },
    price: 42.0,
    stock: 16,
    rating: {
      score: 4.6,
      votes: 412,
    },
    description:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    id: "48",
    title: "Cras Mattis Consectetur",
    images: {
      src: genz9,
      alt: "Cras Mattis",
    },
    price: 37.5,
    stock: 19,
    rating: {
      score: 4.4,
      votes: 267,
    },
    description:
      "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    id: "49",
    title: "Donec Ullamcorper",
    images: {
      src: genz10,
      alt: "Donec Ullamcorper",
    },
    price: 50.5,
    stock: 17,
    rating: {
      score: 4.8,
      votes: 534,
    },
    description:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.",
  },
  {
    id: "50",
    title: "Vestibulum Id Ligula",
    images: {
      src: genz11,
      alt: "Vestibulum Id",
    },
    price: 39.0,
    stock: 28,
    rating: {
      score: 4.0,
      votes: 189,
    },
    description:
      "Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.",
  },
  {
    id: "51",
    title: "Curabitur Blandit Tempus",
    images: {
      src: genz12,
      alt: "Curabitur Blandit",
    },
    price: 44.9,
    stock: 21,
    rating: {
      score: 4.3,
      votes: 321,
    },
    description:
      "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
];

export const spring: ProductType[] = [
  {
    id: "61",
    title: "Consectetur Adipiscing Elit",
    images: {
      src: spring1,
      alt: "Consectetur",
    },
    price: 55.9,
    stock: 12,
    rating: {
      score: 4.5,
      votes: 898,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie magna a dui scelerisque fermentum.",
  },
  {
    id: "62",
    title: "Quisque Molestie Magna",
    images: {
      src: spring2,
      alt: "Molestie Magna",
    },
    price: 60.0,
    stock: 8,
    rating: {
      score: 4.7,
      votes: 750,
    },
    description:
      "Suspendisse potenti. Quisque molestie magna a dui scelerisque fermentum. Nulla facilisi.",
  },
  {
    id: "63",
    title: "Suspendisse Potenti",
    images: {
      src: spring3,
      alt: "Suspendisse",
    },
    price: 45.3,
    stock: 15,
    rating: {
      score: 4.2,
      votes: 1200,
    },
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti.",
  },
  {
    id: "64",
    title: "Labore Et Dolore",
    images: {
      src: spring4,
      alt: "Labore",
    },
    price: 75.2,
    stock: 10,
    rating: {
      score: 4.8,
      votes: 530,
    },
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "65",
    title: "Adipiscing Elit Nulla",
    images: {
      src: spring5,
      alt: "Adipiscing",
    },
    price: 52.4,
    stock: 7,
    rating: {
      score: 4.6,
      votes: 670,
    },
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "66",
    title: "Reprehenderit In Voluptate",
    images: {
      src: spring6,
      alt: "Voluptate",
    },
    price: 68.7,
    stock: 9,
    rating: {
      score: 4.4,
      votes: 820,
    },
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "67",
    title: "Cupidatat Non Proident",
    images: {
      src: spring7,
      alt: "Cupidatat",
    },
    price: 49.9,
    stock: 14,
    rating: {
      score: 4.3,
      votes: 910,
    },
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nulla facilisi.",
  },
  {
    id: "68",
    title: "Nulla Gravida Orci",
    images: {
      src: spring8,
      alt: "Gravida",
    },
    price: 54.1,
    stock: 11,
    rating: {
      score: 4.1,
      votes: 1050,
    },
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Curabitur eget velit justo.",
  },
  {
    id: "69",
    title: "Curabitur Eget Velit",
    images: {
      src: spring9,
      alt: "Curabitur",
    },
    price: 71.0,
    stock: 13,
    rating: {
      score: 4.9,
      votes: 490,
    },
    description:
      "Vestibulum auctor dapibus neque. Curabitur pretium tincidunt lacus. Curabitur eget velit justo.",
  },
  {
    id: "70",
    title: "Vestibulum Auctor Dapibus",
    images: {
      src: spring10,
      alt: "Vestibulum",
    },
    price: 66.8,
    stock: 6,
    rating: {
      score: 4.7,
      votes: 740,
    },
    description: "In convallis. Nunc nulla. Vestibulum auctor dapibus neque.",
  },
  {
    id: "71",
    title: "Nunc Nulla Vestibulum",
    images: {
      src: spring11,
      alt: "Nunc Nulla",
    },
    price: 58.3,
    stock: 16,
    rating: {
      score: 4.2,
      votes: 670,
    },
    description:
      "In convallis. Nunc nulla. Nulla gravida orci a odio. Curabitur eget velit justo.",
  },
  {
    id: "72",
    title: "Orci A Odio",
    images: {
      src: spring12,
      alt: "Orci",
    },
    price: 63.9,
    stock: 10,
    rating: {
      score: 4.6,
      votes: 840,
    },
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];
