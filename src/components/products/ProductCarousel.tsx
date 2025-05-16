import { CarouselConfigTypes } from "@/_types/CarouselTypes";
import styles from "@/styles/pages/products/ProductCarousel.module.scss";
import Image, { StaticImageData } from "next/image";
import Carousel from "../carousel/Carousel";

interface PropsType {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
}

export default function ProductCarousel(props: PropsType) {
  const { images } = props;

  const config: CarouselConfigTypes = {
    itemsPerView: 1,
    isSlide: true,
    animationTime: 200,
    itemsAppearance: 1,
    gap: 0,
    controllLayout: null,
  };

  return (
    <section className={styles.carousel}>
      <Carousel parentConfig={config}>
        {images.map((image, i) => (
          <section className={styles.carousel_wrapper} key={image.src.src + i}>
            <figure className={styles.carousel_image}>
              <Image src={image.src} alt={image.alt} />
            </figure>
          </section>
        ))}
      </Carousel>
    </section>
  );
}
