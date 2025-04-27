"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/buttons/Details.module.scss";

interface PropsType {
  data: {
    title: string;
    content: string;
  };
}

export default function Details(props: PropsType) {
  const { data } = props;
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOtherOpened(e: CustomEvent) {
      if (e.detail !== ref.current) {
        setIsActive(false);
      }
    }

    document.addEventListener("detail-opened", handleOtherOpened as EventListener);

    return () => {
      document.removeEventListener("detail-opened", handleOtherOpened as EventListener);
    };
  }, []);

  function defineIsActive() {
    if (!isActive) {
      const event = new CustomEvent("detail-opened", { detail: ref.current });
      document.dispatchEvent(event);
    }
    setIsActive((prevState) => !prevState);
  }

  return (
    <section
      className={`${styles.details} ${isActive ? styles.active : ""}`}
      ref={ref}
    >
      <header className={styles.details_info} onClick={defineIsActive}>
        <div className={styles.info_wrapper}>
          <span>{data.title}</span>
        </div>

        <div className={styles.info_button}>
          <div className={styles.plus}></div>
          <div className={styles.minus}></div>
        </div>
      </header>

      <div className={styles.details_content}>
        <div className={styles.details_content_wrapper}>
          {data.content}
        </div>
      </div>
    </section>
  );
}
