import { StaticImageData } from "next/image";
import styles from "@/styles/cards/CollectionCard.module.scss";

import Img from "../utils/Img";
import Link from "next/link";

interface PropsType {
  collection: {
    mainSet: {
      src: StaticImageData;
      href: string;
    };
    subSet: {
      src: StaticImageData;
      href: string;
    }[];
  };
}

interface CardImageType {
  card: PropsType["collection"]["mainSet"];
}

export default function CollectionCard(props: PropsType) {
  const { collection } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card_main}>
        <CardImage card={collection.mainSet} />
      </div>

      <div className={styles.card_group}>
        {collection.subSet.map((item) => (
          <div className={styles.group_image} key={item.src.src}>
            <CardImage card={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CardImage(props: CardImageType) {
  const { card } = props;

  return (
    <div className={styles.card_image}>
      <Link href={card.href} aria-label={"To collection"}>
        <figure className={styles.image_container}>
          <Img src={card.src} />
        </figure>
        <span className={styles.image_hover}>
          <p>See the item</p>
        </span>
      </Link>
    </div>
  );
}
