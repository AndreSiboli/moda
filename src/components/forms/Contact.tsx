"use client";

import styles from "@/styles/forms/Contact.module.scss";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import { MouseEvent } from "react";
import Submit from "../ui/buttons/Submit";

interface PropsType {}

export default function ContactForm(props: PropsType) {
  const {} = props;

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("It's just a fictional site.");
  }

  return (
    <form className={styles.form}>
      <div className={styles.form_inputs}>
        <div className={styles.input_container}>
          <Input id="name" name="name" type="text" text="Name" />
        </div>
        <div className={styles.input_container}>
          <Input id="email" name="email" type="email" text="Email" />
        </div>
        <div className={styles.input_container}>
          <Input id="phone-number" name="phone-number" type="text" text="Phone Number" />
        </div>
        <div className={styles.input_container}>
          <Textarea data={{ id: "message", text: "Message" }} />
        </div>
      </div>

      <div className={styles.form_button}>
        <Submit text="Send us" onClick={(e) => submit(e)} variant="v2" />
      </div>
    </form>
  );
}
