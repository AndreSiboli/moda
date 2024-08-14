import styles from "@/styles/Navbar/Store.module.scss";

import Link from "next/link";
import Img from "@/components/utils/Img";
import Carousel from "@/components/carousel/Carousel";

import summer from "@/assets/store/matas-katinas-jYDRaDUfYsA-unsplash.jpg";
import genz from "@/assets/store/joshua-rondeau-TG8vuPf2O-I-unsplash.jpg";
import sport from "@/assets/store/mahdi-chaghari-C0iF9gJ3TWs-unsplash.jpg";
import spring from "@/assets/store/pexels-vitoriasantos-3050943.jpg";

import { PiHandSwipeLeft, PiLink } from "react-icons/pi";

export default function Store() {
  const images = [
    {
      src: summer,
      title: "Summer",
      href: "/",
    },
    {
      src: sport,
      title: "Sport",
      href: "/",
    },
    {
      src: genz,
      title: "Gen Z",
      href: "/",
    },
    {
      src: spring,
      title: "Spring",
      href: "/",
    },
  ];
  const links = [
    {
      text: "All models",
      href: "/collections",
    },
    {
      text: "Events",
      href: "/events",
    },
    {
      text: "Design your own",
      href: "/design-your-own",
    },
  ];

  return (
    <div className={styles.store}>
      <aside className={styles.store_aside}>
        <div className={styles.aside_title}>
          <h2>Collections</h2>
        </div>

        <nav className={styles.aside_nav}>
          {links.map((link) => (
            <Link href={link.href} key={link.text}>{link.text}</Link>
          ))}
        </nav>
      </aside>

      <nav className={styles.store_nav}>
        <p className={styles.nav_swipe}>
          <PiHandSwipeLeft /> Swipe
        </p>

        <Carousel>
          {images.map((image) => (
            <div className={styles.card} key={image.title}>
              <figure className={styles.card_image}>
                <Img src={image.src} />
                <Link href={image.href} aria-label={image.title}>
                  <PiLink />
                </Link>
              </figure>
              <p>{image.title}</p>
            </div>
          ))}
        </Carousel>
      </nav>
    </div>
  );
}
