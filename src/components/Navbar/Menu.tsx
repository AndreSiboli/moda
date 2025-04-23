"use client";

import { useState } from "react";
import styles from "@/styles/navbar/Menu.module.scss";

import Link from "next/link";
import Collection from "@/components/navbar/Collections";
import Store from "@/components/navbar/Store";
import Logo from "../layout/Logo";

import {
  PiArrowLeft,
  PiInstagramLogo,
  PiPinterestLogo,
  PiXLogo,
  PiFacebookLogo,
} from "react-icons/pi";

interface PropsType {
  isOpen: boolean;
}

export default function Menu(props: PropsType) {
  const { isOpen } = props;
  const [subMenu, setSubMenu] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);
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

  function closeSubMenu() {
    setIsOpened(false);
    setTimeout(() => {
      setSubMenu(null);
    }, 250);
  }

  function openSubMenu(str: string) {
    setSubMenu(str);
    setIsOpened(true);
  }

  return (
    <div className={`${styles.menu} ${isOpen && styles.opened}`} id="menu">
      <aside className={styles.menu_container}>
        <header className={styles.menu_header}>
          <Logo />
        </header>
        <div className={styles.menu_overflow}>
          <nav className={styles.menu_navigation}>
            <Link href="#" onClick={() => openSubMenu("collections")}>
              Collections
            </Link>
            <Link href="#" onClick={() => openSubMenu("store")}>
              Store
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <footer className={styles.menu_footer}>
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
          </footer>
        </div>

        <div className={`${styles.submenu} ${isOpened && styles.opened}`}>
          <div className={styles.submenu_button}>
            <button onClick={closeSubMenu}>
              <PiArrowLeft /> BACK
            </button>
          </div>

          <div className={styles.submenu_wrapper}>
            {(subMenu === "collections" && (
              <div className={styles.menu_wrapper}>
                <Collection />
              </div>
            )) ||
              (subMenu === "store" && (
                <div className={styles.menu_wrapper}>
                  <Store />
                </div>
              ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
