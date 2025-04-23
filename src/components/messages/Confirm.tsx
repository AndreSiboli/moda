"use client";

import { useState } from "react";
import styles from "@/styles/messages/Confirm.module.scss";

import Button from "@/components/ui/buttons/Button";

interface PropsType {
  title: string;
  text: string;
  isOpened: boolean;
  handleAgree: () => void;
  handleDesagree: () => void;
}

export default function Confirm(props: PropsType) {
  const { title, text, handleAgree, handleDesagree } = props;

  function confirm(isConfirmed: boolean) {
    if (isConfirmed) return handleAgree();
    handleDesagree();
  }

  return (
    <div className={styles.confirm}>
      <div className={styles.confirm_container}>
        <div className={styles.confirm_text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className={styles.confirm_buttons}>
          <Button text="Yes" onClick={() => confirm(true)} />
          <Button text="No" onClick={() => confirm(false)} />
        </div>
      </div>
    </div>
  );
}
