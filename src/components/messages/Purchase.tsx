"use client";

import { formatToDecimal } from "@/utils/formatter";
import styles from "@/styles/messages/Purchase.module.scss";

import Button from "@/components/ui/buttons/Button";
import SimpleButton from "@/components/ui/buttons/SimpleButton";

interface PropsType {
  total: number;

  handleAgree: () => void;
  handleDesagree: () => void;
}

export default function Purchase(props: PropsType) {
  const { total, handleAgree, handleDesagree } = props;

  function confirm(isConfirmed: boolean) {
    if (isConfirmed) return handleAgree();
    handleDesagree();
  }

  return (
    <div className={styles.confirm}>
      <div className={styles.confirm_container}>
        <div className={styles.confirm_text}>
          <h1>Do you want to proceed with the purchase?</h1>
          <p>Your total will be</p>
          <p className={styles.price}>${formatToDecimal(total, 2)}</p>
        </div>
        <div className={styles.confirm_buttons}>
          <Button text="Proceed" onClick={() => confirm(true)} />
          <SimpleButton text="Not yet" onClick={() => confirm(false)} />
        </div>
      </div>
    </div>
  );
}
