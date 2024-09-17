import styles from "@/styles/pages/help/mentions.module.scss";

import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Mentions() {
  const mentions = [
    {
      author: "Brian Lawson",
      href: "https://unsplash.com/pt-br/@visualartery",
    },
    {
      author: "Jayro Cerqueira da Silva",
      href: "https://www.pexels.com/pt-br/@jayrinho/",
    },
    {
      author: "EVG Kowalievska",
      href: "https://www.pexels.com/pt-br/@kowalievska/",
    },
    {
      author: "Vitória Santos",
      href: "https://www.pexels.com/pt-br/@vitoriasantos/",
    },
    {
      author: "Lance Reis",
      href: "https://unsplash.com/pt-br/@lancereis",
    },
    {
      author: "Benigno Hoyuela",
      href: "https://unsplash.com/pt-br/@benignohoyuela ",
    },
    {
      author: "Jasmin Chew",
      href: "https://unsplash.com/pt-br/@majestical_jasmin",
    },
    {
      author: "Sam Chapman",
      href: "https://unsplash.com/pt-br/@samchapmanvisuals",
    },
    {
      author: "Bailey Burton",
      href: "https://unsplash.com/pt-br/@17thcw",
    },
    {
      author: "Jernej Graj",
      href: "https://unsplash.com/pt-br/@jernejgraj",
    },
    {
      author: "Christopher Campbell",
      href: "https://unsplash.com/pt-br/@chrisjoelcampbell ",
    },
    {
      author: "Alexander Jawfox",
      href: "https://unsplash.com/pt-br/@jawfox_photography",
    },
    {
      author: "Sule Makaroglu",
      href: "https://unsplash.com/pt-br/@sulemakaroglu",
    },
    {
      author: "Alexander Grey",
      href: "https://unsplash.com/pt-br/@sharonmccutcheon",
    },
    {
      author: "Nina Hill",
      href: "https://unsplash.com/pt-br/@ninanaction",
    },
    {
      author: "Laurence la Madeleine",
      href: "https://unsplash.com/pt-br/@laurence_lmxo",
    },
    {
      author: "Joshua Rondeau",
      href: "https://unsplash.com/pt-br/@liferondeau",
    },
    {
      author: "Artem Mihailov",
      href: "https://unsplash.com/pt-br/@mihailovart_pht",
    },
    {
      author: "Mahdi Chaghari",
      href: "https://unsplash.com/pt-br/@mahdi_chf",
    },
    {
      author: "Sergey Sokolov",
      href: "https://unsplash.com/pt-br/@svsokolov ",
    },
    {
      author: "Erwans Socks",
      href: "https://unsplash.com/pt-br/@erwans_socks",
    },
    {
      author: "Korie Cull",
      href: "https://unsplash.com/pt-br/@korie ",
    },
    {
      author: "Sheldon",
      href: "https://unsplash.com/pt-br/@hfestudio",
    },
    {
      author: "Tamara Bellis",
      href: "https://unsplash.com/pt-br/@tamarabellis",
    },
    {
      author: "Tudor Adrian",
      href: "https://unsplash.com/pt-br/@tudor_photography",
    },
    {
      author: "Stepan Kalinin",
      href: "https://unsplash.com/pt-br/@incrprl",
    },
    {
      author: "Nick Pliahas",
      href: "https://unsplash.com/pt-br/@nick_pliachas",
    },
    {
      author: "Alonso Reyes",
      href: "https://unsplash.com/pt-br/@alonsoreyes",
    },
    {
      author: "Tony Luginsland",
      href: "https://unsplash.com/pt-br/@tonyluginsland",
    },
    {
      author: "Ayo Ogunseinde",
      href: "https://unsplash.com/pt-br/@armedshutter",
    },
    {
      author: "Anastase Maragos",
      href: "https://unsplash.com/pt-br/@visualsbyroyalz",
    },
    {
      author: "Shayna Douglas",
      href: "https://unsplash.com/pt-br/@itsmaemedia",
    },
    {
      author: "Dom Hill",
      href: "https://unsplash.com/pt-br/@domjewel",
    },
    {
      author: "Guilherme Caetano",
      href: "https://unsplash.com/pt-br/@guicaetano",
    },
    {
      author: "Vitalii Khodzinskyi",
      href: "https://unsplash.com/pt-br/@khodzinskyi",
    },
    {
      author: "Ophie Sköld",
      href: "https://unsplash.com/pt-br/@sophieskold",
    },
    {
      author: "Andie Gómez-Acebo",
      href: "https://unsplash.com/pt-br/@andesany",
    },
    {
      author: "Kateryna Hliznitsova",
      href: "https://unsplash.com/pt-br/@kate_gliz",
    },
    {
      author: "Max Ducourneau",
      href: "https://unsplash.com/pt-br/@maxdcrn",
    },
    {
      author: "Natali Hordiiuk",
      href: "https://unsplash.com/pt-br/@whynotnatali",
    },
    {
      author: "Nataliya Melnychuk",
      href: "https://unsplash.com/pt-br/@natinati",
    },
    {
      author: "Cat Han",
      href: "https://unsplash.com/pt-br/@figmentprints",
    },
    {
      author: "Angelo Pantazis",
      href: "https://unsplash.com/pt-br/@angelopantazis",
    },
    {
      author: "Julia Cheperis",
      href: "https://unsplash.com/pt-br/@inception",
    },
    {
      author: "Jesus Santos",
      href: "https://unsplash.com/pt-br/@jesussantosphotography",
    },
  ].sort((a, b) => {
    if (a.author < b.author) return -1;
    if (a.author > b.author) return 1;
    return 0;
  });

  return (
    <div className={styles.mentions}>
      <Container>
        <div className={styles.mentions_container}>
          {mentions.map((mention) => (
            <Link href={mention.href} target="_blank" key={mention.author}>
              {mention.author}
            </Link>
          ))}

          <div className={styles.mentions_thanks}>
            <p>Thanks for all creators &#x1F496;</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
