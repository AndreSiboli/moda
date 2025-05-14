import styles from "@/styles/navbar/Collections.module.scss";

import Link from "next/link";
import Img from "@/components/utils/Img";
import Carousel from "@/components/carousel/Carousel";

import summer from "@/assets/collections/summer/pexels-eduardordone-2602717.jpg";
import genz from "@/assets/collections/genz/joshua-rondeau-TG8vuPf2O-I-unsplash.jpg";
import sport from "@/assets/collections/sport/alonso-reyes-xd4tmzR8Uog-unsplash.jpg";
import spring from "@/assets/collections/spring/pexels-vitoriasantos-3050943.jpg";

import { PiHandSwipeLeft } from "react-icons/pi";
import { CarouselConfigTypes } from "@/_types/CarouselTypes";

export default function Collections() {
  const images = [
    {
      src: summer,
      title: "Summer '24",
      href: "/collections/summer",
    },
    {
      src: sport,
      title: "Sport '24",
      href: "/collections/sport",
    },
    {
      src: genz,
      title: "Gen Z '24",
      href: "/collections/gen-z",
    },
    {
      src: spring,
      title: "Spring '24",
      href: "/collections/spring",
    },
  ];
  const links = [
    {
      text: "All models",
      href: "/under-construction",
    },
    {
      text: "Events",
      href: "/under-construction",
    },
    {
      text: "Design your own",
      href: "/under-construction",
    },
  ];
  const config: CarouselConfigTypes = {
    gap: 8,
    controllLayout: handleCarouselLayout,
  };

  function handleCarouselLayout(): Omit<CarouselConfigTypes, "controllLayout"> {
    const width = window.innerWidth;
    const smallDevices = width <= 768;
    return {
      itemsAppearance: smallDevices ? 2 : 4,
      peek: smallDevices ? 0.1 : 0,
      isSlide: smallDevices,
    };
  }

  return (
    <div className={styles.store}>
      <aside className={styles.store_aside}>
        <div className={styles.aside_title}>
          <h2>Collections</h2>
        </div>

        <nav className={styles.aside_nav}>
          {links.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </nav>
      </aside>

      <nav className={styles.store_nav}>
        <p className={styles.nav_swipe}>
          <PiHandSwipeLeft /> Swipe
        </p>

        <Carousel parentConfig={config}>
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
