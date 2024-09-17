import styles from "@/styles/pages/contact/contact.module.scss";

import Container from "@/components/layout/Container";
import Link from "next/link";
import ContactForm from "@/components/forms/Contact";
import Img from "@/components/utils/Img";

import image from "@/assets/contact.jpg";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <figure className={styles.contact_image}>
        <Img src={image} />
      </figure>

      <Container>
        <div className={styles.contact_container}>
          <h1>Contact us</h1>

          <div className={styles.contact_wrapper}>
            <div className={styles.contact_info}>
              <div className={styles.info}>
                <h2>Phone Number</h2>
                <p>
                  Monday - Friday from 8AM to 8PM <br />
                  Saturday - Sunday from 9AM to 6PM
                </p>
                <Link href="tel:+123-456-7890">123-456-7890</Link>
              </div>
              <div className={styles.info}>
                <h2>Email</h2>
                <p>You will be answered as soon as possible.</p>
                <Link href="mailto:moda.fictional@outlook.com">
                  moda.fictional@outlook.com
                </Link>
              </div>
            </div>

            <div className={styles.contact_form}>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
