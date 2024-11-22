"use client";

import { createContext, ReactNode, useState } from "react";
import styles from "./Message.module.scss";

interface MessageContextProps {
  defineMessage: ({
    title,
    message,
  }: {
    title: string;
    message: string;
  }) => void;
}

export const MessageContext = createContext({} as MessageContextProps);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  function defineMessage({
    title,
    message,
  }: {
    title: string;
    message: string;
  }) {
    setTitle(title);
    setMessage(message);
    setTimeout(() => {
      setTitle("");
      setMessage("");
    }, 8000);
  }

  return (
    <MessageContext.Provider value={{ defineMessage }}>
      {children}
      {message && (
        <div className={styles.message}>
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
      )}
    </MessageContext.Provider>
  );
}
