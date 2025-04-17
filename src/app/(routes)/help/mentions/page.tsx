import { mentions } from "@/data/mentions";
import styles from "@/styles/pages/help/mentions.module.scss";

import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function Mentions() {
  const sortedArr = mentions.sort((a, b) => {
    if (a.author.name < b.author.name) return -1;
    if (a.author.name > b.author.name) return 1;
    return 0;
  });

  return (
    <div className={styles.mentions}>
      <Container>
        <div className={styles.mentions_container}>
          <div className={styles.mentions_column}>
            {sortedArr.map((mention) => (
              <Link href={mention.author.url} target="_blank" key={mention.id}>
                <figure className={styles.image_container}>
                  <Image
                    src={mention.images.src}
                    alt={mention.images.alt}
                    loading="lazy"
                  />
                </figure>
                <p>{mention.author.name}</p>
              </Link>
            ))}
          </div>

          <div className={styles.mentions_thanks}>
            <p>Thanks for all creators &#x1F496;</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
