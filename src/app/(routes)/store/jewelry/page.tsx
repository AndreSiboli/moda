import styles from "@/styles/pages/store/Jewelry.module.scss";
import { jewelry } from "@/fake-api/products";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/katie-mukhina-1wthSXULQLU-unsplash.jpg";

export default function Jewelry() {
  const hero = {
    src: wallapaper,
    title: "Jewelry",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero} />
      <Collection data={jewelry} title="Jewelry" />
    </>
  );
}
