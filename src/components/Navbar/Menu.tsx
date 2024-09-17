"use client";

import { useState } from "react";
import styles from "@/styles/Navbar/Menu.module.scss";

import Link from "next/link";
import Collection from "./Collections";
import Store from "./Store";

import { PiArrowLeft } from "react-icons/pi";

interface PropsType {
  isOpen: boolean;
}

export default function Menu(props: PropsType) {
  const { isOpen } = props;
  const [subMenu, setSubMenu] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);

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
        <nav className={styles.menu_navigation}>
          <Link href="#" onClick={() => openSubMenu("collections")}>
            Collections
          </Link>
          <Link href="#" onClick={() => openSubMenu("store")}>
            Store
          </Link>
          <Link href="/contact">Contact</Link>
        </nav>

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
