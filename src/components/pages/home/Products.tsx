"use client";

import { CSSProperties, useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import styles from "@/styles/pages/home/Products.module.scss";
import Container from "@/components/layout/Container";
import Radio from "@/components/inputs/Radio";
import CollectionSection from "@/components/layout/CollectionSection";

import genz1 from "@/assets/collections/genz/joshua-rondeau-MCd8GU4nz8M-unsplash.jpg";
import genz2 from "@/assets/collections/genz/nina-hill-mqM8WHiuZPY-unsplash.jpg";
import genz3 from "@/assets/collections/genz/mahdi-chaghari-Z7DdU3d8UDc-unsplash.jpg";
import genz4 from "@/assets/collections/genz/ayo-ogunseinde-0im7yfJ3qog-unsplash.jpg";
import summer1 from "@/assets/collections/summer/tudor-adrian-gloe7HNn4g4-unsplash.jpg";
import summer2 from "@/assets/collections/summer/gus-tu-njana-stWKm45jVds-unsplash.jpg";
import summer3 from "@/assets/collections/summer/sexto-abismo-ginebra-uFXXP1hwsvs-unsplash.jpg";
import summer4 from "@/assets/collections/summer/sexto-abismo-ginebra-aEi9gK09kT4-unsplash.jpg";
import sport1 from "@/assets/collections/sport/artem-mihailov-XGPXbVNu6e8-unsplash.jpg";
import sport2 from "@/assets/collections/sport/sergey-sokolov-cO-5xW3uDxo-unsplash.jpg";
import sport3 from "@/assets/collections/sport/mahdi-chaghari-QpWqqoEdhv4-unsplash.jpg";
import sport4 from "@/assets/collections/sport/tony-luginsland-ofaBcg1xZL0-unsplash.jpg";
import spring1 from "@/assets/collections/spring/sule-makaroglu-hP-aYOy1284-unsplash.jpg";
import spring3 from "@/assets/collections/spring/bailey-burton-jN8PVzZQ9iQ-unsplash.jpg";
import spring2 from "@/assets/collections/spring/sam-chapman-rEA2MzwxGmY-unsplash.jpg";
import spring4 from "@/assets/collections/spring/jasmin-chew-e_fwWMPw97Y-unsplash.jpg";

interface CollectionType {
  name: string;
  text: string;
  images: {
    src: StaticImageData;
    alt: string;
    style?: CSSProperties;
  }[];
}

export default function Products() {
  const [currentCollection, setCurrentCollection] = useState("Sport");
  const [collection, setCollection] = useState<CollectionType | null>(null);
  const [animation, setAnimation] = useState(false);
  const collectionsList: CollectionType[] = [
    {
      name: "Gen Z",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci, tenetur itaque officiis necessitatibus iste consectetur veniam nulla animi aperiam perferendis in ut optio deleniti cupiditate at sed temporibus quo!",
      images: [
        { src: genz1, alt: "", style: { objectPosition: "center 80%" } },
        { src: genz2, alt: "", style: { objectPosition: "center 100%" } },
        { src: genz3, alt: "" },
        { src: genz4, alt: "", style: { objectPosition: "center 70%" } },
      ],
    },
    {
      name: "Summer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci, tenetur itaque officiis necessitatibus iste consectetur veniam nulla animi aperiam perferendis in ut optio deleniti cupiditate at sed temporibus quo!",
      images: [
        { src: summer1, alt: "" },
        { src: summer2, alt: "" },
        { src: summer3, alt: "" },
        { src: summer4, alt: "" },
      ],
    },
    {
      name: "Spring",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci, tenetur itaque officiis necessitatibus iste consectetur veniam nulla animi aperiam perferendis in ut optio deleniti cupiditate at sed temporibus quo!",
      images: [
        { src: spring1, alt: "", style: { objectPosition: "center 100%" } },
        { src: spring2, alt: "", style: { objectPosition: "center 80%" } },
        { src: spring3, alt: "" },
        { src: spring4, alt: "", style: { objectPosition: "center 100%" } },
      ],
    },
    {
      name: "Sport",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci, tenetur itaque officiis necessitatibus iste consectetur veniam nulla animi aperiam perferendis in ut optio deleniti cupiditate at sed temporibus quo!",
      images: [
        { src: sport1, alt: "", style: { objectPosition: "center 60%" } },
        { src: sport2, alt: "", style: { objectPosition: "center 95%" } },
        { src: sport3, alt: "", style: { objectPosition: "center 35%" } },
        { src: sport4, alt: "", style: { objectPosition: "center 40%" } },
      ],
    },
  ];
  const radios = [
    {
      text: "Sport",
      name: "collection",
      id: "sport",
      value: "Sport",
    },
    {
      text: "Summer",
      name: "collection",
      id: "summer",
      value: "Summer",
    },
    {
      text: "Gen Z",
      name: "collection",
      id: "genz",
      value: "Gen Z",
    },
    {
      text: "Spring",
      name: "collection",
      id: "spring",
      value: "Spring",
    },
  ];

  useEffect(() => {
    const arr = collectionsList.find((item) => item.name === currentCollection);
    if (arr) {
      setAnimation(true);
      setTimeout(() => {
        setCollection(arr);
        setTimeout(() => {
          setAnimation(false);
        }, 125);
      }, 175);
    }
  }, [currentCollection]);

  return collection ? (
    <div className={styles.products}>
      <Container>
        <div className={styles.products_container}>
          <div
            className={`${styles.products_wrapper} ${
              animation ? styles.animated : ""
            }`}
            aria-live="polite"
          >
            <CollectionSection collection={collection} />
          </div>

          <fieldset className={styles.products_manager}>
            <legend>Choose a collection: </legend>
            {radios.map((item) => (
              <Radio
                {...item}
                key={item.id}
                defaultChecked={item.value === currentCollection}
                onChange={(e) => setCurrentCollection(e.target.value)}
              />
            ))}
          </fieldset>
        </div>
      </Container>
    </div>
  ) : (
    <div style={{ marginBottom: "2em" }} />
  );
}
