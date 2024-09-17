import styles from "@/styles/pages/collections/GenZ.module.scss";
import { genz } from "@/fake-api/collections";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/collections/anastasiia-tarasova-bPG95QL4478-unsplash.jpg";

export default function Genz() {
  const hero = {
    src: wallapaper,
    title: "Gen Z",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero} />
      <Collection data={genz} title="Gen Z" />
    </>
  );
}
