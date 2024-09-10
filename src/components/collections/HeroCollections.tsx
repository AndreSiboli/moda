import { CSSProperties } from "react";
import styles from "@/styles/collections/HeroCollections.module.scss";

import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import { StaticImageData } from "next/image";

interface PropsType {
  data: { src: StaticImageData | string; title: string; text: string };
  styleImage?: CSSProperties;
}

export default function HeroCollections(props: PropsType) {
  const { data, styleImage } = props;
  const { src, title, text } = data;

  return (
    <div className={styles.hero}>
      <figure className={styles.hero_wallpaper}>
        <Img src={src} styles={styleImage} />
      </figure>

      <Container>
        <div className={styles.hero_container}>
          <section className={styles.hero_content}>
            <div className={styles.content_title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.content_text}>
              <p>{text}</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
