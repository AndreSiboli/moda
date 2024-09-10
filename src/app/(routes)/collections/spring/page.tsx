import styles from "@/styles/pages/collecitions/Spring.module.scss";
import { spring } from "@/fake-api/products";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/collections/sophie-skold-Tr6P2iOJDqE-unsplash.jpg";

export default function Spring() {
  const hero = {
    src: wallapaper,
    title: "Spring",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero}/>
      <Collection data={spring} title="Spring" />
    </>
  );
}
