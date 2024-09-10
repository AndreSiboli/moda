import styles from "@/styles/pages/collecitions/Sport.module.scss";
import { sport } from "@/fake-api/products";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/collections/shayna-douglas-c0qS4Ir-M4s-unsplash.jpg";

export default function Summer() {
  const hero = {
    src: wallapaper,
    title: "Sport",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero} />
      <Collection data={sport} title="Sport" />
    </>
  );
}
