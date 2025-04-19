"use client";

import styles from "@/styles/forms/SignIn.module.scss";
import { MouseEvent } from "react";

import Input from "../inputs/Input";
import Link from "next/link";
import Submit from "../buttons/Submit";

export default function FormSignIn() {
  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert("It's just a fictional site.");
  }

  return (
    <form className={styles.form}>
      <legend>Sign In</legend>

      <div className={styles.form_inputs}>
        <div className={styles.input_container}>
          <Input input={{ id: "email", type: "email" }} text="Email" />
        </div>
        <div className={styles.input_container}>
          <Input input={{ id: "password", type: "password" }} text="Password" />
        </div>
      </div>

      <div className={styles.form_forgot}>
        <Link href="/under-construction">Forgot your password?</Link>
      </div>

      <div className={styles.form_button}>
        <Submit text="Sign In" onClick={(e) => submit(e)} variant="v2" />
      </div>

      <div className={styles.form_create}>
        <p>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </div>
    </form>
  );
}
