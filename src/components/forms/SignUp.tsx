"use client";

import styles from "@/styles/forms/SignUp.module.scss";
import { MouseEvent } from "react";

import Input from "../inputs/Input";
import Link from "next/link";
import Submit from "../buttons/Submit";

interface PropsType {}

export default function FormSignUp(props: PropsType) {
  const {} = props;

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("It's just a fictional site.");
  }

  return (
    <form className={styles.form}>
      <legend>Sign Up</legend>

      <div className={styles.form_inputs}>
        <div className={`${styles.input_container} ${styles.split}`}>
          <Input input={{ id: "first-name", type: "text" }} text="First Name" />
          <Input input={{ id: "last-name", type: "text" }} text="Last Name" />
        </div>
        <div className={styles.input_container}>
          <Input input={{ id: "email", type: "email" }} text="Email" />
        </div>
        <div className={styles.input_container}>
          <Input input={{ id: "password", type: "password" }} text="Password" />
        </div>
        <div className={styles.input_container}>
          <Input
            input={{ id: "password-confirmation", type: "password" }}
            text="Password Confirmation"
          />
        </div>
      </div>

      <div className={styles.form_button}>
        <Submit text="Sign Up" onClick={(e) => submit(e)} />
      </div>

      <div className={styles.form_create}>
        <p>
          Do you have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </div>
    </form>
  );
}
