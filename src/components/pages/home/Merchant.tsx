import styles from "@/styles/pages/home/Merchant.module.scss";
import { Courier_Prime } from "next/font/google";

import Container from "@/components/layout/Container";
import Img from "@/components/utils/Img";
import LinkButton from "@/components/links/LinkButton";

import mainImage from "@/assets/genz/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg";
import image2 from "@/assets/genz/joshua-rondeau-xFAD1brcgQk-unsplash.jpg";
import image3 from "@/assets/genz/laurence-la-madeleine-UFx2N7b1fCw-unsplash.jpg";

const courier = Courier_Prime({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

//It has component within
export default function Merchant() {
  return (
    <section className={styles.merchant}>
      <Container>
        <div className={styles.merchant_container}>
          <div className={styles.merchant_image}>
            <figure className={styles.image_container}>
              <Img src={mainImage} />
            </figure>
          </div>

          <div className={styles.merchant_action}>
            <div className={styles.action_container}>
              <Title />

              <div className={styles.action_info}>
                <div className={styles.info_text}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque libero ut asperiores inventore vero aut facere.
                  </p>
                </div>
                <div className={styles.info_button}>
                  <LinkButton
                    href="/collections/gen-z"
                    text="See collection!"
                  />
                </div>
              </div>
            </div>

            <div className={styles.action_images}>
              <figure className={styles.images_container}>
                <Img src={mainImage} />
              </figure>
              <figure className={styles.images_container}>
                <Img src={image2} />
              </figure>
              <figure className={styles.images_container}>
                <Img src={image3} />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Title() {
  return (
    <div className={styles.title}>
      <h1 className={courier.className}>
        <p className={styles.h1_title}>
          Gen <span className={styles.title_2}> Z</span>
        </p>
        <p className={styles.h1_year}>2024</p>
      </h1>
    </div>
  );
}
