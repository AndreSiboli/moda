import styles from "@/styles/pages/collections/Summer.module.scss";
import { summer } from "@/fake-api/collections";

import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";

import wallapaper from "@/assets/collections/jernej-graj-IbrSR6gBaqI-unsplash.jpg";

export default function Summer() {
  const hero = {
    src: wallapaper,
    title: "Summer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet iusto explicabo aut quos modi, voluptate, maxime, voluptatem molestiae nemo quae doloremque suscipit similique atque veritatis perferendis eaque deleniti ipsum!",
  };

  return (
    <>
      <HeroCollections data={hero} styleImage={{ objectPosition: "50% 80%" }} />
      <Collection data={summer} title="Summer" />
    </>
  );
}
