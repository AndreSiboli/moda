"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Navbar/Index.module.scss";

import Link from "next/link";
import Cart from "./Cart";
import Logo from "@/components/layout/Logo";
import Container from "@/components/layout/Container";
import Dropdown from "@/components/buttons/Dropdown";

import { PiShoppingCartSimple, PiUser } from "react-icons/pi";
import Store from "./Store";
import Menu from "./Menu";

export default function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const links = [
    {
      text: "Women",
      href: "/women",
    },
    {
      text: "Contact",
      href: "/store",
    },
  ];

  useEffect(() => {
    function top() {
      const scrollY = window.scrollY;
      if (scrollY === 0) return setIsOnTop(true);
      setIsOnTop(false);
    }

    window.addEventListener("scroll", top);

    return () => {
      window.removeEventListener("scroll", top);
    };
  }, [isOnTop]);

  useEffect(() => {
    function resize() {
      const windowWidth = window.innerWidth;

      if (windowWidth > 768) setIsMenuOpen(false);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMenuOpen]);

  function defineIsMenuOpen() {
    if (isMenuOpen) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";

    setIsMenuOpen((prevState) => !prevState);
  }

  function defineIsCart() {
    if (isCart) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";

    setIsCart((prevState) => !prevState);
  }

  return (
    <header
      className={`${styles.header} ${isOnTop && styles.onTop} ${
        isMenuOpen && styles.open
      }`}
    >
      <Container style={{ position: "static" }}>
        <div className={styles.header_container}>
          <section className={styles.header_start}>
            <nav className={styles.header_logo}>
              <Logo />
            </nav>

            <nav className={styles.header_links}>
              <Dropdown text="Store">
                <Store />
              </Dropdown>

              {links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.text}
                </Link>
              ))}
            </nav>
          </section>

          <section className={styles.header_end}>
            <button onClick={defineIsCart} aria-label="Cart">
              <PiShoppingCartSimple />
            </button>
            <Link href="/login" aria-label="Login/Sign up">
              <PiUser />
            </Link>
            <div className={styles.header_menu} onClick={defineIsMenuOpen}>
              <span className={styles.trace}></span>
              <span className={styles.trace}></span>
              <span className={styles.trace}></span>
            </div>
          </section>
        </div>
      </Container>

      <Menu isOpen={isMenuOpen} />
      <Cart isOpen={isCart} handleCart={defineIsCart} />
    </header>
  );
}
