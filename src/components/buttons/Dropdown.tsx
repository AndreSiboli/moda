"use client";

import styles from "@/styles/buttons/Dropdown.module.scss";
import { Dispatch, SetStateAction, ReactNode, useEffect, useRef } from "react";

import Container from "../layout/Container";
import { PiCaretDown } from "react-icons/pi";

interface PropsType {
  text: string;
  children: ReactNode;
  isOpened: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Dropdown(props: PropsType) {
  const { text, children, isOpened, handleOpen } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        handleOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function isDropdownOpened() {
    handleOpen((prevState) => !prevState);
  }

  return (
    <div
      className={`${styles.dropdown} ${isOpened && styles.opened}`}
      ref={ref}
    >
      <button className={styles.dropdown_button} onClick={isDropdownOpened}>
        {text}
        <PiCaretDown />
      </button>
      <div className={styles.dropdown_content}>
        <Container style={{ paddingTop: "6em" }}>
          <div className={styles.content_wrapper}>{children}</div>
        </Container>
      </div>
    </div>
  );
}
