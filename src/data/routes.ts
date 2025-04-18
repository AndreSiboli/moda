import { RoutesCollectionType, RoutesStoreType } from "@/_types/RoutesType";

//Products
import dress from "@/assets/products/thumbnails/dresses.jpg";
import intimate from "@/assets/products/thumbnails/intimate.jpg";
import jewelry from "@/assets/products/thumbnails/jewelry.jpg";
import necklace from "@/assets/products/thumbnails/necklace.jpg";
import ring from "@/assets/products/thumbnails/ring.jpg";
import earring from "@/assets/products/thumbnails/earring.jpg";
import bracelet from "@/assets/products/thumbnails/bracelet.jpg";
import shirt from "@/assets/products/thumbnails/shirt.jpg";
import shorts from "@/assets/products/thumbnails/shorts.jpg";
import pants from "@/assets/products/thumbnails/pants.jpg";
import tops from "@/assets/products/thumbnails/tops.jpg";

//Collections
import genz24 from "@/assets/collections/thumbnails/anastasiia-tarasova-bPG95QL4478-unsplash.jpg";
import spring24 from "@/assets/collections/thumbnails/sophie-skold-Tr6P2iOJDqE-unsplash.jpg";
import sport24 from "@/assets/collections/thumbnails/shayna-douglas-c0qS4Ir-M4s-unsplash.jpg";
import summer24 from "@/assets/collections/thumbnails/jernej-graj-IbrSR6gBaqI-unsplash.jpg";

export const routesStore: RoutesStoreType[] = [
  {
    image: { src: dress, styles: { objectPosition: "50% 60%" } },
    title: "Dresses",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "dress",
  },
  {
    image: { src: intimate },
    title: "Intimate",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "intimate",
  },
  {
    image: { src: jewelry },
    title: "Jewelry",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "jewelry",
  },
  {
    image: { src: necklace },
    title: "Necklace",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "necklace",
  },
  {
    image: { src: ring, styles: { objectPosition: "50% 80%" } },
    title: "Ring",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "ring",
  },
  {
    image: { src: earring, styles: { objectPosition: "50% 60%" } },
    title: "Earring",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "earring",
  },
  {
    image: { src: bracelet, styles: { objectPosition: "50% 70%" } },
    title: "Bracelet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "bracelet",
  },
  {
    image: { src: shorts, styles: { objectPosition: "50% 90%" } },
    title: "Shorts",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "shorts",
  },
  {
    image: { src: shirt },
    title: "Shirt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "shirt",
  },
  {
    image: { src: pants },
    title: "Pants",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "pants",
  },
  {
    image: { src: tops },
    title: "Tops",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    type: "tops",
  },
];

export const routesCollections: RoutesCollectionType[] = [
  {
    image: { src: genz24, styles: { objectPosition: "50% 70%" } },
    title: "Gen Z",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    collection: "gen-z",
  },
  {
    image: { src: spring24, styles: { objectPosition: "50% 30%" } },
    title: "Spring",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    collection: "spring",
  },
  {
    image: { src: sport24 },
    title: "Sport",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    collection: "sport",
  },
  {
    image: { src: summer24, styles: { objectPosition: "50% 80%" } },
    title: "Summer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
    collection: "summer",
  },
];
