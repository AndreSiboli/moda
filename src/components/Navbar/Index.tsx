"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar/Index.module.scss";

import Link from "next/link";
import Cart from "./Cart";
import Logo from "@/components/layout/Logo";
import Container from "@/components/layout/Container";
import Dropdown from "@/components/buttons/Dropdown";
import Collections from "./Collections";
import Menu from "./Menu";

import { PiShoppingCartSimple, PiUser } from "react-icons/pi";
import Store from "./Store";

export default function Navbar() {
  const path = usePathname();
  const [isOnTop, setIsOnTop] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollOpen, setIsCollOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const drops = [
    {
      text: "Collections",
      isAction: isCollOpen,
      setIsAction: defineIsCollOpen,
      children: <Collections />,
    },
    {
      text: "Store",
      isAction: isStoreOpen,
      setIsAction: defineIsStoreOpen,
      children: <Store />,
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

  useEffect(() => {
    checkLightPages();
    closeAllTabs();
  }, [path]);

  function checkLightPages() {
    const paths = [
      "/collections/summer",
      "/collections/sport",
      "/collections/gen-z",
      "/collections/spring",
      "/store/jewelry",
      "/store/dress",
      "/store/intimate",
    ];

    if (paths.includes(path)) return setIsLight(true);
    setIsLight(false);
  }

  function closeAllTabs() {
    setIsMenuOpen(false);
    setIsCollOpen(false);
    setIsCartOpen(false);
    setIsStoreOpen(false);
    document.body.style.overflow = "auto";
  }

  function defineIsMenuOpen() {
    if (isMenuOpen) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";

    setIsMenuOpen((prevState) => !prevState);
  }

  function defineIsCart() {
    if (isCartOpen) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";

    setIsCartOpen((prevState) => !prevState);
  }

  function defineIsCollOpen() {
    setIsCollOpen((prevState) => !prevState);
    setIsStoreOpen(false);
  }

  function defineIsStoreOpen() {
    setIsStoreOpen((prevState) => !prevState);
    setIsCollOpen(false);
  }

  return (
    <header
      className={`${styles.header} ${isOnTop && styles.onTop} ${
        isMenuOpen && styles.open
      } ${isLight && styles.light} 
      ${(isCollOpen || isStoreOpen || isMenuOpen) && styles.drop}`}
    >
      <Container style={{ position: "static" }}>
        <div className={styles.header_container}>
          <section className={styles.header_start}>
            <nav className={styles.header_logo}>
              <Logo />
            </nav>

            <nav className={styles.header_links}>
              {drops.map((drop) => (
                <Dropdown
                  text={drop.text}
                  isOpened={drop.isAction}
                  handleOpen={drop.setIsAction}
                  key={drop.text}
                >
                  {drop.children}
                </Dropdown>
              ))}

              <Link href={"/contact"}>Contact</Link>
            </nav>
          </section>

          <section className={styles.header_end}>
            <button onClick={defineIsCart} aria-label="Cart">
              <PiShoppingCartSimple />
            </button>
            <Link href="/sign-in" aria-label="Sign In/Sign up">
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
      <Cart isOpen={isCartOpen} handleCart={defineIsCart} />
    </header>
  );
}
