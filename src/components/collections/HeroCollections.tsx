import { RoutesCollectionType, RoutesStoreType } from "@/_types/RoutesType";
import styles from "@/styles/collections/HeroCollections.module.scss";

import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";

interface PropsType {
  data: RoutesStoreType | RoutesCollectionType;
}

export default function HeroCollections(props: PropsType) {
  const { data } = props;
  const { image, title, text } = data;

  return (
    <main className={styles.hero}>
      <figure className={styles.hero_wallpaper}>
        <Img src={image.src} styles={image.styles} />
      </figure>

      <Container>
        <div className={styles.hero_container}>
          <article className={styles.hero_content}>
            <div className={styles.content_title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.content_text}>
              <p>{text}</p>
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}
