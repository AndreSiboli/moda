import React from "react";
import { Courier_Prime } from "next/font/google";
import styles from "@/styles/layout/Footer.module.scss";

import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";

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

export default function Footer() {
  const socialLinks = [
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

  const sections = [
    {
      title: "Help & Support",
      text: "(555) 123-4567\nMonday to Friday | 9am to 7pm",
      links: [
        { label: "FAQ", href: "/help/FAQ" },
        { label: "Terms", href: "/under-construction" },
        { label: "Privacy Policy", href: "/under-construction" },
        { label: "Mentions", href: "/help/mentions" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Fashion Shows", href: "/under-construction" },
        { label: "Shop", href: "/under-construction" },
        { label: "Models", href: "/under-construction" },
      ],
    },
    {
      title: "Collections",
      links: [
        { label: "Summer", href: "/collections/summer" },
        { label: "Gen Z", href: "/collections/gen-z" },
        { label: "Sport", href: "/collections/sport" },
        { label: "Spring", href: "/collections/spring" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <div className={styles.footer_header}>
            <nav className={styles.header_social}>
              {socialLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
            </nav>

            <div className={styles.header_slogan}>
              <p className={courier.className}>Chic, Unique, You</p>
            </div>

            <div className={styles.header_logo}>
              <Logo />
            </div>
          </div>

          <div className={styles.footer_body}>
            {sections.map((section) => (
              <FooterNav {...section} key={section.title} />
            ))}
          </div>

          <div className={styles.footer_footer}>
            <p>Moda &copy; {new Date().getFullYear()}. This is not a real website.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

interface FooterNavProps {
  title: string;
  text?: string;
  links: { label: string; href: string }[];
}

function FooterNav({ title, text, links }: FooterNavProps) {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_title}>
        <p>{title}</p>
      </div>
      <nav className={styles.navigation_links}>
        {text && (
          <p>
            {text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}
        <FooterLinks links={links} />
      </nav>
    </div>
  );
}

function FooterLinks({ links }: { links: FooterNavProps["links"] }) {
  return (
    <>
      {links.map(({ label, href }) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </>
  );
}
