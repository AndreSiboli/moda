"use client";

import styles from "@/styles/buttons/Dropdown.module.scss";
import { ReactNode, useState } from "react";

import Container from "../layout/Container";

import { PiCaretDown } from "react-icons/pi";

interface PropsType {
  text: string;
  children: ReactNode;
}

export default function Dropdown(props: PropsType) {
  const { text, children } = props;
  const [isOpened, setIsOpened] = useState(false);

  function defineIsOpened() {
    setIsOpened((prevState) => !prevState);
  }

  return (
    <div className={`${styles.dropdown} ${isOpened && styles.opened}`}>
      <div className={styles.dropdown_title} onClick={defineIsOpened}>
        <p>{text}</p>
        <PiCaretDown />
      </div>
      <div className={styles.dropdown_content}>
        <Container style={{ paddingTop: "6em" }}>
          <div className={styles.content_wrapper}>{children}</div>
        </Container>
      </div>
    </div>
  );
}
