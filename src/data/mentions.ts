import dresses from "@/assets/products/dresses.jpg";
import intimate from "@/assets/products/intimate.jpg";
import jewelry from "@/assets/products/jewelry.jpg";
import contact from "@/assets/contact.jpg";
import faq from "@/assets/faq.jpg";
import signIn from "@/assets/sign-in.jpg";
import hero from "@/assets/hero.png";
import signUp from "@/assets/sign-up.jpg";
import { products } from "@/fake-api/allProducts";
import { collections } from "@/fake-api/AllColletions";

const references = [
  {
    id: "01963a8e-f98c-7b93-8a93-80545b19afd6",
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
    id: "01963a71-eb22-7b2d-be56-5b61135caf9a",
    images: {
      src: jewelry,
      alt: "",
    },
    author: {
      name: "Katie Mukhina",
      url: "https://unsplash.com/pt-br/@muukhina",
    },
  },
  //  {
  //   id: '01963a72-2f25-73ec-907a-7a77a6531dca',
  //   images: {
  //     src: intimate,
  //     alt: "",
  //   },
  //   author: {
  //     name: "",
  //     url: "",
  //   },
  // },
];

const freepik = [
  //   {
  //     id: '01963a72-6e84-7e83-a660-a5bb96370f3e',
  //     author: "Home video by freepik",
  //     url: "https://www.freepik.com/free-video/brunette-girl-lying-beach-bed-using-phone_2832936#fromView=search&page=5&position=32&uuid=4eac92f2-75d2-4ebd-a36e-8564c4382622",
  //   },
  {
    id: "01963a73-07e7-746b-ba54-37b54ea4dac3",
    images: {
      src: hero,
      alt: "",
    },
    author: {
      name: "Halayalex on Freepik",
      url: "https://www.freepik.com/free-photo/portrait-beautiful-sensual-brunette-woman-girl-elegant-white-classic-clothes-wide-pants-white-background_6883359.htm#fromView=search&page=1&position=34&uuid=f064bd65-af6e-4c96-ae7f-af76ea9ffec7",
    },
  },
  {
    id: "01963a73-1293-7f73-9acb-c266e1352940",
    images: {
      src: signIn,
      alt: "",
    },
    author: {
      name: "Lookstudio on Freepik",
      url: "https://www.freepik.com/free-photo/charming-girl-with-curly-dark-cool-hairstyle-striped-lilac-wide-sleeve-blouse-posing-with-closed-eyes-isolated-wall_15860725.htm#fromView=search&page=1&position=50&uuid=2176ebdd-e67f-480c-94a6-3068ce8e191f",
    },
  },
  {
    id: "01963a73-95db-79b6-9d3c-a3551d075ea1",
    images: {
      src: signUp,
      alt: "",
    },
    author: {
      name: "Lookstudio on Freepik",
      url: "https://www.freepik.com/free-photo/woman-gold-earrings-glasses-striped-cropped-top-laughs-isolated-wall_12859947.htm#fromView=search&page=15&position=27&uuid=2176ebdd-e67f-480c-94a6-3068ce8e191f",
    },
  },
  {
    id: "01963a73-97db-79eb-8384-3ff20b7bad42",
    images: {
      src: faq,
      alt: "",
    },
    author: {
      name: "Lookstudio on Freepik",
      url: "https://www.freepik.com/free-photo/pensive-slim-lady-with-tanned-skin-brunette-hair-gold-accessories-wide-sleeve-lilac-shirt-looking-up-posing_23928210.htm#fromView=search&page=3&position=2&uuid=4c6db930-776c-4b0f-8de2-520563f7f24b",
    },
  },
  {
    id: "01963a74-121e-7f9e-9228-ec1f2918ced1",
    images: {
      src: contact,
      alt: "",
    },
    author: {
      name: "Lookstudio on Freepik",
      url: "https://www.freepik.com/free-photo/curly-haired-pretty-lady-red-headband-yellow-trendy-sundress-blowing-kiss-holding-glass-isolated-backdrop_23938362.htm#from_view=detail_alsolike",
    },
  },
];

export const mentions = references.concat(products, collections, freepik);
