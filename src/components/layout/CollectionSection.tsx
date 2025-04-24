import { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import styles from "@/styles/layout/ColectionSection.module.scss";
import Img from "../utils/Img";

interface PropsType {
  collection: CollectionType;
}

interface CollectionType {
  name: string;
  text: string;
  images: {
    src: StaticImageData;
    alt: string;
    style?: CSSProperties;
  }[];
}

export default function CollectionSection(props: PropsType) {
  const { collection } = props;

  return (
    <div className={styles.collection}>
      <div className={styles.collection_wrapper}>
        <div className={styles.collection_header}>
          <h1>{collection.name}</h1>
          <p>{collection.text}</p>
        </div>

        <div className={styles.collection_images}>
          {collection.images.slice(0, 2).map((image) => (
            <figure className={styles.image_container} key={image.src.src}>
              <Img src={image.src} alt={image.alt} styles={image.style} />
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.collection_side}>
        {collection.images.slice(2).map((image) => (
          <figure className={styles.image_container} key={image.src.src}>
            <Img src={image.src} alt={image.alt} styles={image.style} />
          </figure>
        ))}
      </div>
    </div>
  );
}
