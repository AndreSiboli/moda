import styles from "@/styles/pages/help/mentions.module.scss";

import { mentions } from "@/data/mentions";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function Mentions() {
  // const mentions = [
  //   {
  //     name: "Brian Lawson",
  //     url: "https://unsplash.com/pt-br/@visualartery",
  //   },

  //   {
  //     name: "Shayna Douglas",
  //     url: "https://unsplash.com/pt-br/@itsmaemedia",
  //   },

  //   {
  //     name: "Ophie Sköld",
  //     url: "https://unsplash.com/pt-br/@sophieskold",
  //   },
  //   {
  //     name: "Andie Gómez-Acebo",
  //     url: "https://unsplash.com/pt-br/@andesany",
  //   },
  //   {
  //     name: "Kateryna Hliznitsova",
  //     url: "https://unsplash.com/pt-br/@kate_gliz",
  //   },
  //   {
  //     name: "Max Ducourneau",
  //     url: "https://unsplash.com/pt-br/@maxdcrn",
  //   },
  //   {
  //     name: "Natali Hordiiuk",
  //     url: "https://unsplash.com/pt-br/@whynotnatali",
  //   },
  //   {
  //     name: "Nataliya Melnychuk",
  //     url: "https://unsplash.com/pt-br/@natinati",
  //   },
  //   {
  //     name: "Cat Han",
  //     url: "https://unsplash.com/pt-br/@figmentprints",
  //   },
  //   {
  //     name: "Angelo Pantazis",
  //     url: "https://unsplash.com/pt-br/@angelopantazis",
  //   },
  //   {
  //     name: "Julia Cheperis",
  //     url: "https://unsplash.com/pt-br/@inception",
  //   },
  //   {
  //     name: "Jesus Santos",
  //     url: "https://unsplash.com/pt-br/@jesussantosphotography",
  //   },
  //   {
  //     name: "Ali Karimiboroujeni",
  //     url: "https://unsplash.com/pt-br/@alikarimiboroujeni",
  //   },

  //   {
  //     name: "Jim Romero",
  //     url: "https://unsplash.com/pt-br/@jimromero",
  //   },
  //   {
  //     name: "Ernest Tarasov",
  //     url: "https://unsplash.com/pt-br/@rictrsv",
  //   },
  //   {
  //     name: "Shuvalova Natalia",
  //     url: "https://www.pexels.com/pt-br/@shuvalova-natalia-415991090",
  //   },
  //   {
  //     name: "Joe Ciciarelli",
  //     url: "https://unsplash.com/pt-br/@claritycontrol",
  //   },
  //   {
  //     name: "Kate Tepl",
  //     url: "https://unsplash.com/pt-br/@kate_tepla",
  //   },
  //   {
  //     name: "Semen Zhuravlev",
  //     url: "https://unsplash.com/pt-br/@sezha72",
  //   },
  //   {
  //     name: "Anna Deli",
  //     url: "https://unsplash.com/pt-br/@andeli",
  //   },
  //   {
  //     name: "Ddddddarya",
  //     url: "https://unsplash.com/pt-br/@ddddddarya",
  //   },
  //   {
  //     name: "Taylor Harding",
  //     url: "https://unsplash.com/pt-br/@taylorjamesphotos",
  //   },
  //   {
  //     name: "Katie Mukhina",
  //     url: "https://unsplash.com/pt-br/@muukhina",
  //   },
  //   {
  //     name: "Cottonbro studio",
  //     url: "https://www.pexels.com/pt-br/foto/flores-plantas-ramalhete-buque-4974347",
  //   },
  //   {
  //     name: "R. Fera",
  //     url: "https://www.pexels.com/pt-br/foto/homem-tirando-selfie-432059",
  //   },
  //   {
  //     name: "Matheus Bertelli",
  //     url: "https://www.pexels.com/pt-br/foto/fotografia-de-uma-mulher-segurando-luzes-799420",
  //   },
  //   {
  //     name: "Ali Pazani",
  //     url: "https://www.pexels.com/pt-br/foto/foto-de-mulher-segurando-seus-oculos-2829369",
  //   },
  //   {
  //     name: "Yaroslav Shuraev",
  //     url: "https://www.pexels.com/pt-br/foto/mulher-relaxamento-descanso-petalas-6811905",
  //   },
  // ].sort((a, b) => {
  //   if (a.name < b.name) return -1;
  //   if (a.name > b.name) return 1;
  //   return 0;
  // });

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
                  <Image src={mention.images.src} alt={mention.images.alt} loading="lazy"/>
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
