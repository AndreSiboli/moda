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
    {
      author: "Ali Karimiboroujeni",
      href: "https://unsplash.com/pt-br/@alikarimiboroujeni",
    },
    {
      author: "Tamara Bellis",
      href: "https://unsplash.com/pt-br/@tamarabellis",
    },
    {
      author: "Jim Romero",
      href: "https://unsplash.com/pt-br/@jimromero",
    },
    {
      author: "Ernest Tarasov",
      href: "https://unsplash.com/pt-br/@rictrsv",
    },
    {
      author: "Shuvalova Natalia",
      href: "https://www.pexels.com/pt-br/@shuvalova-natalia-415991090",
    },
    {
      author: "Joe Ciciarelli",
      href: "https://unsplash.com/pt-br/@claritycontrol",
    },
    {
      author: "Kate Tepl",
      href: "https://unsplash.com/pt-br/@kate_tepla",
    },
    {
      author: "Semen Zhuravlev",
      href: "https://unsplash.com/pt-br/@sezha72",
    },
    {
      author: "Anna Deli",
      href: "https://unsplash.com/pt-br/@andeli",
    },
    {
      author: "Ddddddarya",
      href: "https://unsplash.com/pt-br/@ddddddarya",
    },
    {
      author: "Taylor Harding",
      href: "https://unsplash.com/pt-br/@taylorjamesphotos",
    },
    {
      author: "Katie Mukhina",
      href: "https://unsplash.com/pt-br/@muukhina",
    },
  ].sort((a, b) => {
    if (a.author < b.author) return -1;
    if (a.author > b.author) return 1;
    return 0;
  });

  const freePik = [
    {
      author: "Home video by freepik",
      href: "https://www.freepik.com/free-video/brunette-girl-lying-beach-bed-using-phone_2832936#fromView=search&page=5&position=32&uuid=4eac92f2-75d2-4ebd-a36e-8564c4382622",
    },
    {
      author: "Image by halayalex on Freepik",
      href: "https://www.freepik.com/free-photo/portrait-beautiful-sensual-brunette-woman-girl-elegant-white-classic-clothes-wide-pants-white-background_6883359.htm#fromView=search&page=1&position=34&uuid=f064bd65-af6e-4c96-ae7f-af76ea9ffec7",
    },
    {
      author: "Sign in image by lookstudio on Freepik",
      href: "https://www.freepik.com/free-photo/charming-girl-with-curly-dark-cool-hairstyle-striped-lilac-wide-sleeve-blouse-posing-with-closed-eyes-isolated-wall_15860725.htm#fromView=search&page=1&position=50&uuid=2176ebdd-e67f-480c-94a6-3068ce8e191f",
    },
    {
      author: "Sign up image by lookstudio on Freepik",
      href: "https://www.freepik.com/free-photo/woman-gold-earrings-glasses-striped-cropped-top-laughs-isolated-wall_12859947.htm#fromView=search&page=15&position=27&uuid=2176ebdd-e67f-480c-94a6-3068ce8e191f",
    },
    {
      author: "FAQ image by lookstudio on Freepik",
      href: "https://www.freepik.com/free-photo/pensive-slim-lady-with-tanned-skin-brunette-hair-gold-accessories-wide-sleeve-lilac-shirt-looking-up-posing_23928210.htm#fromView=search&page=3&position=2&uuid=4c6db930-776c-4b0f-8de2-520563f7f24b",
    },
    {
      author: "Contact image by lookstudio on Freepik",
      href: "https://www.freepik.com/free-photo/curly-haired-pretty-lady-red-headband-yellow-trendy-sundress-blowing-kiss-holding-glass-isolated-backdrop_23938362.htm#from_view=detail_alsolike",
    },
  ];

  return (
    <div className={styles.mentions}>
      <Container>
        <div className={styles.mentions_container}>
          {mentions.map((mention) => (
            <Link href={mention.href} target="_blank" key={mention.author}>
              {mention.author}
            </Link>
          ))}

          {freePik.map((mention) => (
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
