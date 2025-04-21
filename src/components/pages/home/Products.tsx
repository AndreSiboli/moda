import styles from "@/styles/pages/home/Products.module.scss";

import Container from "@/components/layout/Container";
import CollectionCard from "@/components/cards/CollectionCard";
import LinkButton from "@/components/links/LinkButton";

import genz1 from "@/assets/collections/genz/joshua-rondeau-MCd8GU4nz8M-unsplash.jpg";
import genz2 from "@/assets/collections/genz/nina-hill-mqM8WHiuZPY-unsplash.jpg";
import genz3 from "@/assets/collections/genz/mahdi-chaghari-Z7DdU3d8UDc-unsplash.jpg";
import summer1 from "@/assets/collections/summer/christopher-campbell-483r_jIASq0-unsplash.jpg";
import summer2 from "@/assets/collections/summer/alexander-jawfox-zXa0Peaq30U-unsplash.jpg";
import summer3 from "@/assets/collections/summer/sule-makaroglu-pu2DMQ-Bi5s-unsplash.jpg";
import sport1 from "@/assets/collections/sport/sergey-sokolov-cO-5xW3uDxo-unsplash.jpg";
import sport2 from "@/assets/collections/sport/sergey-sokolov-z2L4PU8xZEk-unsplash.jpg";
import sport3 from "@/assets/collections/sport/sheldon-5mTOegXTMUM-unsplash.jpg";
import spring1 from "@/assets/collections/spring/bailey-burton-jN8PVzZQ9iQ-unsplash.jpg";
import spring2 from "@/assets/collections/spring/sam-chapman-rEA2MzwxGmY-unsplash.jpg";
import spring3 from "@/assets/collections/spring/sule-makaroglu-hP-aYOy1284-unsplash.jpg";

export default function Products() {
  const collections = [
    {
      mainSet: {
        src: genz1,
        href: "/under-construction",
      },
      subSet: [
        {
          src: genz2,
          href: "/under-construction",
        },
        {
          src: genz3,
          href: "/under-construction",
        },
      ],
    },
    {
      mainSet: {
        src: summer1,
        href: "/under-construction",
      },
      subSet: [
        {
          src: summer2,
          href: "/under-construction",
        },
        {
          src: summer3,
          href: "/under-construction",
        },
      ],
    },
    {
      mainSet: {
        src: sport1,
        href: "/under-construction",
      },
      subSet: [
        {
          src: sport2,
          href: "/under-construction",
        },
        {
          src: sport3,
          href: "/under-construction",
        },
      ],
    },
    {
      mainSet: {
        src: spring1,
        href: "/under-construction",
      },
      subSet: [
        {
          src: spring2,
          href: "/under-construction",
        },
        {
          src: spring3,
          href: "/under-construction",
        },
      ],
    },
  ];

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.products_container}>
          <div className={styles.products_header}>
            <h1>Collections</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, est.
            </p>
          </div>

          <div className={styles.products_collections}>
            {collections.map((collection) => (
              <CollectionCard
                collection={collection}
                key={collection.mainSet.src.src}
              />
            ))}
          </div>

          <div className={styles.products_button}>
            <LinkButton href="/under-construction" text="See all sets" />
          </div>
        </div>
      </Container>
    </div>
  );
}
