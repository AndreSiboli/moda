"use client";

import styles from "@/styles/Navbar/Menu.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import Store from "./Store";

interface PropsType {
  isOpen: boolean;
}

export default function Menu(props: PropsType) {
  const { isOpen } = props;

  useEffect(() => {}, []);

  return (
    <div className={`${styles.menu} ${isOpen && styles.opened}`} id="menu">
      <aside className={styles.menu_container}>
        <div className={styles.menu_wrapper}>
          <nav className={styles.menu_navigation}>
            <Link href="/">Women</Link>
            <Link href="/">Contact</Link>
          </nav>
          <Store />
        </div>
      </aside>
    </div>
  );
}
