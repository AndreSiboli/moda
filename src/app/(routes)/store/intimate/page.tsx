import styles from "@/styles/pages/store/Intimate.module.scss";
import { intimate } from "@/fake-api/products";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/products/intimate.jpg";

export default function Intimate() {
  const hero = {
    src: wallapaper,
    title: "Intimate",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero} styleImage={{objectPosition: '20% 80%'}}/>
      <Collection data={intimate} title="Intimate" />
    </>
  );
}
