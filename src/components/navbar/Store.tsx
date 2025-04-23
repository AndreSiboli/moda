import styles from "@/styles/navbar/Store.module.scss";

import Link from "next/link";
import Img from "@/components/utils/Img";
import Carousel from "@/components/common/Carousel";

import jewelry from "@/assets/products/jewelry/natali-hordiiuk-6xUNKC6sutk-unsplash.jpg";
import dress from "@/assets/products/dresses/jesus-santos-rUSJt8Y6Alw-unsplash.jpg";
import intimate from "@/assets/products/intimate/riccardo-carlo-rossi-x90HeQHJ1yE-unsplash.jpg";

import { PiHandSwipeLeft } from "react-icons/pi";

export default function Store() {
  const images = [
    {
      src: jewelry,
      title: "Jewelry",
      href: "/store/jewelry",
    },
    {
      src: dress,
      title: "Dresses",
      href: "/store/dress",
    },
    {
      src: intimate,
      title: "Intimate",
      href: "/store/intimate",
    },
  ];
  const clothes = [
    {
      text: "Dresses",
      href: "/store/dress",
    },
    {
      text: "Skirts",
      href: "/under-construction",
    },
    {
      text: "Tops",
      href: "/store/tops",
    },
    {
      text: "Shorts",
      href: "/store/shorts",
    },
    {
      text: "Pants",
      href: "/store/pants",
    },
    {
      text: "Intimate",
      href: "/store/intimate",
    },
    {
      text: "Shirts",
      href: "/store/shirt",
    },
  ];
  const swim = [
    {
      text: "Tops",
      href: "/under-construction",
    },
    {
      text: "Bottoms",
      href: "/under-construction",
    },
    {
      text: "Sets",
      href: "/under-construction",
    },
  ];
  const accessories = [
    {
      text: "Necklaces",
      href: "/store/necklace",
    },
    {
      text: "Rings",
      href: "/store/ring",
    },
    {
      text: "Bracelet",
      href: "/store/bracelet",
    },
    {
      text: "Earring",
      href: "/store/earring",
    },
    {
      text: "Hats",
      href: "/under-construction",
    },
    {
      text: "Bags",
      href: "/under-construction",
    },
  ];

  return (
    <div className={styles.store}>
      <aside className={styles.store_aside}>
        <nav className={styles.aside_nav}>
          <div className={styles.nav_links}>
            <h2>Clothes</h2>
            {clothes.map((link) => (
              <Link href={link.href} key={link.text}>
                {link.text}
              </Link>
            ))}
          </div>
          <div className={styles.nav_links}>
            <h2>Accessories</h2>
            {accessories.map((link) => (
              <Link href={link.href} key={link.text}>
                {link.text}
              </Link>
            ))}
          </div>
          <div className={styles.nav_links}>
            <h2>Swim</h2>
            {swim.map((link) => (
              <Link href={link.href} key={link.text}>
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      <nav className={styles.store_nav}>
        <p className={styles.nav_swipe}>
          <PiHandSwipeLeft /> Swipe
        </p>

        <Carousel parentConfig={{ itemsLength: 3 }}>
          {images.map((image) => (
            <Link href={image.href} className={styles.card} key={image.title}>
              <figure className={styles.card_image}>
                <Img src={image.src} />
              </figure>
              <p>{image.title}</p>
            </Link>
          ))}
        </Carousel>
      </nav>
    </div>
  );
}
