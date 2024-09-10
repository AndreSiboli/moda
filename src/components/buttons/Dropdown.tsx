"use client";

import styles from "@/styles/buttons/Dropdown.module.scss";
import { ReactNode, useEffect, useState } from "react";

import Container from "../layout/Container";

import { PiCaretDown } from "react-icons/pi";
import { useParams } from "next/navigation";

interface PropsType {
  text: string;
  children: ReactNode;
  isOpened: boolean;
  handleOpen: () => void;
}

export default function Dropdown(props: PropsType) {
  const { text, children, isOpened, handleOpen } = props;

  return (
    <div className={`${styles.dropdown} ${isOpened && styles.opened}`}>
      <div className={styles.dropdown_title} onClick={handleOpen}>
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
