import { StaticImageData } from "next/image";
import styles from "@/styles/cards/CollectionCard.module.scss";
import Img from "../utils/Img";
import LinkButton from "../links/LinkButton";
import Link from "next/link";

interface PropsType {
  collection: {
    mainSet: {
      src: string | StaticImageData;
      href: string;
    };
    subSet: {
      src: string | StaticImageData;
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
          <div className={styles.group_image} key={item.href}>
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
        <div className={styles.image_hover}>
          <Link href={""}>See the item</Link>
        </div>
      </Link>
    </div>
  );
}
