'use client'

import styles from "@/styles/forms/Contact.module.scss";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import { MouseEvent } from "react";
import Submit from "../buttons/Submit";

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
          <Input input={{ id: "name", type: "text" }} text="Name" />
        </div>
        <div className={styles.input_container}>
          <Input input={{ id: "email", type: "email" }} text="Email" />
        </div>
        <div className={styles.input_container}>
          <Input
            input={{ id: "phone-number", type: "text" }}
            text="Phone Number"
          />
        </div>
        <div className={styles.input_container}>
          <Textarea data={{ id: "message", text: "Message" }} />
        </div>
      </div>

      <div className={styles.form_button}>
        <Submit text="Send us" handleSubmit={(e) => submit(e)} />
      </div>
    </form>
  );
}
