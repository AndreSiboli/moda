import { Courier_Prime } from "next/font/google";
import styles from "@/styles/pages/home/Hero.module.scss";

import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import Link from "next/link";
import LinkStyled from "@/components/links/LinkStyled";
import Circle from "@/components/shapes/Circle";

import image from "@/assets/hero.png";
import {
  PiInstagramLogo,
  PiPinterestLogo,
  PiXLogo,
  PiFacebookLogo,
} from "react-icons/pi";

const courier = Courier_Prime({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export default function Hero() {
  const social = [
    {
      icon: <PiInstagramLogo />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <PiPinterestLogo />,
      label: "Pinterest",
      href: "https://pinterest.com",
    },
    {
      icon: <PiFacebookLogo />,
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <PiXLogo />,
      label: "X",
      href: "https://x.com",
    },
  ];

  return (
    <main className={styles.hero}>
      <Container>
        <div className={styles.hero_container}>
          <div className={styles.square_1}></div>
          <div className={styles.square_2}></div>

          <div className={styles.hero_image}>
            <Img src={image} styles={{ objectFit: "contain" }} />
            <Circle
              style={{
                top: "10%",
                left: "50%",
                transform: "translate(-50%, 0)",
                zIndex: -1,
                width: "50%",
                minWidth: 350,
              }}
            />
          </div>

          <div className={styles.hero_wrapper}>
            <nav className={styles.hero_social}>
              {social.map((soc) => (
                <Link
                  href={soc.href}
                  target="_blank"
                  aria-label={soc.label}
                  key={soc.label}
                >
                  {soc.icon}
                </Link>
              ))}
            </nav>

            <section className={styles.hero_action}>
              <div className={styles.action_square}></div>
              <div className={styles.action_square_2}></div>

              <h1 className={courier.className}>
                <span>Find</span>
                <span>your</span>
                <span>style</span>
              </h1>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias ducimus libero illo quibusdam ad, corrupti deleniti
                provident sit aut maxime sunt ullam officia quo incidunt ex,
                optio aliquid amet sint!
              </p>

              <div className={styles.action_button}>
                <LinkStyled text="Shop now" href="/under-construction" />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
