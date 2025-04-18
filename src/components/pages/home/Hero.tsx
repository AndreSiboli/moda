import { CSSProperties } from "react";
import { Courier_Prime } from "next/font/google";
import styles from "@/styles/pages/home/Hero.module.scss";

import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import Link from "next/link";
import LinkStyled from "@/components/links/LinkStyled";
import Circle from "@/components/shapes/Circle";
import Square from "@/components/shapes/Square";

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

type SquareType = {
  style: CSSProperties;
  color: "v1" | "v2" | "v3" | "v4" | "v5";
};

export default function Hero() {
  const mainSquares: SquareType[] = [
    {
      style: {
        width: "calc(270px - 5.8vw)",
        height: "70px",
        top: "0",
        right: "-60px",
      },
      color: "v1",
    },
    {
      style: {
        width: "340px",
        height: "125px",
        bottom: "0",
        right: "0",
      },
      color: "v3",
    },
  ];

  return (
    <main className={styles.hero}>
      <Container>
        <div className={styles.hero_container}>
          <SquareList items={mainSquares} />

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
                borderStyle: "dashed",
              }}
            />
          </div>

          <div className={styles.hero_wrapper}>
            <HeroSocial />
            <HeroAction />
          </div>
        </div>
      </Container>
    </main>
  );
}

function HeroSocial() {
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
    <nav className={styles.social}>
      {social.map((soc) => (
        <Link
          href={soc.href}
          target="_blank"
          aria-label={soc.label}
          key={soc.label}
          rel="noopener noreferrer"
        >
          {soc.icon}
        </Link>
      ))}
    </nav>
  );
}

function HeroAction() {
  const mainSquares: SquareType[] = [
    {
      style: { height: "80%", top: "15px", zIndex: "2" },
      color: "v3",
    },
    {
      style: {
        width: "80%",
        height: "50%",
        top: "-25px",
        left: "40%",
        zIndex: "-2",
      },
      color: "v5",
    },
  ];

  return (
    <section className={styles.action}>
      <SquareList items={mainSquares} />

      <div className={styles.action_title}>
        <h1 className={courier.className}>
          Find
          <br />
          your
          <br />
          style
          <br />
        </h1>
      </div>

      <div className={styles.action_text}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          ducimus libero illo quibusdam ad, corrupti deleniti provident sit aut
          maxime sunt ullam officia quo incidunt ex, optio aliquid amet sint!
        </p>
      </div>

      <div className={styles.action_button}>
        <LinkStyled text="Shop now" href="/under-construction" />
      </div>
    </section>
  );
}

function SquareList({ items }: { items: SquareType[] }) {
  return (
    <>
      {items.map((square, i) => (
        <Square
          key={square.color + i}
          style={square.style}
          color={square.color}
        />
      ))}
    </>
  );
}
