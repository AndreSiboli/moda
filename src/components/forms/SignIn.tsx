"use client";

import { MouseEvent, useState } from "react";
import { checkEmail } from "@/utils/inputsManager";
import { useRouter } from "next/navigation";
import styles from "@/styles/forms/SignIn.module.scss";

import Input from "../inputs/Input";
import Link from "next/link";
import Submit from "../ui/buttons/Submit";

export default function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setError("");
    if (!isDataValid()) return;
    alert("It's just a fictional site, so you can't sign in.");
    router.push("/");
  }

  function isDataValid() {
    //This validated only exist to not pass to backend excessive calls.
    if (!checkEmail(email, setError) || password.length < 8)
      return setError("Invalid email or password.");
    return true;
  }

  return (
    <form className={styles.form}>
      <legend>Sign In</legend>

      <div className={styles.form_inputs}>
        <div className={styles.input_container}>
          <Input
            id="email"
            type="email"
            text="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <Input
            id="password"
            type="password"
            text="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.form_forgot}>
        <Link href="/under-construction">Forgot your password?</Link>
      </div>

      <div className={styles.form_error}>
        <p>{error}</p>
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
