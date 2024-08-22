import { Courier_Prime } from "next/font/google";
import styles from "@/styles/Footer/Index.module.scss";

import Container from "../layout/Container";
import Link from "next/link";
import Logo from "../layout/Logo";

const courier = Courier_Prime({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

import {
  PiInstagramLogo,
  PiPinterestLogo,
  PiXLogo,
  PiFacebookLogo,
} from "react-icons/pi";

export default function Footer() {
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
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <section className={styles.footer_header}>
            <nav className={styles.header_social}>
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
            <div className={styles.header_slogan}>
              <p className={courier.className}>Chic, Unique, You</p>
            </div>
            <div className={styles.header_logo}>
              <Logo />
            </div>
          </section>

          <section className={styles.footer_body}>
            <div className={styles.body_links}>
              <div className={styles.links_title}>
                <p>Help</p>
              </div>
              <nav className={styles.links_nav}>
                <p>
                  (555) 123-4567 <br />
                  Monday to Friday | 9am to 7pm
                </p>
                <Link href="/under-construction">FAQ</Link>
                <Link href="/under-construction">Terms</Link>
                <Link href="/under-construction">Privacy Policy</Link>
                <Link href="/help/mentions">Mentions</Link>
              </nav>
            </div>

            <div className={styles.body_links}>
              <div className={styles.links_title}>
                <p>About us</p>
              </div>
              <nav className={styles.links_nav}>
                <Link href="/under-construction">Fashion Shows</Link>
                <Link href="/under-construction">Shop</Link>
                <Link href="/under-construction">Models</Link>
              </nav>
            </div>

            <div className={styles.body_links}>
              <div className={styles.links_title}>
                <p>Products</p>
              </div>
              <nav className={styles.links_nav}>
                <Link href="/under-construction">Summer</Link>
                <Link href="/under-construction">Gen Z</Link>
                <Link href="/under-construction">Sport</Link>
                <Link href="/under-construction">Models</Link>
              </nav>
            </div>
          </section>

          <footer className={styles.footer_footer}>
            <p>Moda &copy; {new Date().getFullYear()}. All rights reserved.</p>
          </footer>
        </div>
      </Container>
    </footer>
  );
}
