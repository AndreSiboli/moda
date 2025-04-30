"use client";

import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/forms/Contact.module.scss";

import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import Submit from "../ui/buttons/Submit";
import { formatPhone } from "@/utils/formatter";
import {
  checkEmail,
  checkName,
  checkPhoneNumber,
  checkSubject,
} from "@/utils/inputsManager";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    resetErrors();
    if (!isDataValid()) return;
    alert("It's just a fictional site.");
    router.refresh();
  }

  function isDataValid() {
    if (!checkName(name, setErrorMessage))
      return setInputError((prev) => ({ ...prev, name: true }));
    if (!checkEmail(email, setErrorMessage))
      return setInputError((prev) => ({ ...prev, email: true }));
    if (!checkPhoneNumber(phone, setErrorMessage))
      return setInputError((prev) => ({ ...prev, phone: true }));
    if (!checkSubject(subject, setErrorMessage))
      return setInputError((prev) => ({ ...prev, subject: true }));
    return true;
  }

  function resetErrors() {
    setInputError({
      name: false,
      email: false,
      phone: false,
      subject: false,
    });
    setErrorMessage("");
  }

  return (
    <form className={styles.form}>
      <div className={styles.form_inputs}>
        <div className={styles.input_container}>
          <Input
            id="name"
            name="name"
            type="text"
            text="Name"
            required
            isError={inputError.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <Input
            id="email"
            name="email"
            type="email"
            text="Email"
            required
            isError={inputError.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <Input
            id="phone-number"
            name="phone-number"
            type="tel"
            text="Phone Number"
            required
            isError={inputError.phone}
            value={phone}
            onChange={(e) => {
              const number = formatPhone(e.target.value);
              setPhone(number);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <Textarea
            id="message"
            text="Message"
            name="message"
            required
            isError={inputError.subject}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ resize: "none" }}
          />
        </div>
      </div>

      <div className={styles.form_error}>
        <p>{errorMessage}</p>
      </div>

      <div className={styles.form_button}>
        <Submit text="Send us" onClick={(e) => submit(e)} variant="v2" />
      </div>
    </form>
  );
}
