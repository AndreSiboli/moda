import styles from "@/styles/pages/store/Dresses.module.scss";
import { dresses } from "@/fake-api/products";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/products/dresses.jpg";

export default function Dress() {
  const hero = {
    src: wallapaper,
    title: "Dress",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero} styleImage={{objectPosition: '0 center'}} />
      <Collection data={dresses} title="Dress" />
    </>
  );
}
