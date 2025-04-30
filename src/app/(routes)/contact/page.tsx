import styles from "@/styles/pages/contact/contact.module.scss";

import ContactForm from "@/components/forms/Contact";
import Img from "@/components/utils/Img";

import wallpaper from "@/assets/contact.jpg";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_container}>
        <div className={styles.contact_wrapper}>
          <section className={styles.contact_header}>
            <h1>Get in touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              omnis voluptatem id provident laudantium, dolorum sit tenetur fuga
              quo! Commodi!
            </p>
          </section>

          <div className={styles.contact_form}>
            <ContactForm />
          </div>
        </div>
      </div>

      <figure className={styles.contact_image}>
        <Img src={wallpaper} styles={{ objectPosition: "50% 70%" }} />
      </figure>
    </div>
  );
}
