"use client";

import { useState } from "react";
import styles from "@/styles/buttons/Details.module.scss";

interface PropsType {
  data: {
    text: string;
    content: string;
  };
}

export default function Details(props: PropsType) {
  const { data } = props;
  const [isActive, setIsActive] = useState(false);

  function defineIsActive() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <div className={`${styles.details} ${isActive && styles.active}`}>
      <div className={styles.details_info} onClick={() => defineIsActive()}>
        <div className={styles.info_wrapper}>
          <span>{data.text}</span>
        </div>

        <div className={styles.info_button}>
          <div className={styles.plus}></div>
          <div className={styles.minus}></div>
        </div>
      </div>

      <div className={styles.details_content}>
        <div className={styles.details_content_wrapper}>{data.content}</div>
      </div>
    </div>
  );
}
