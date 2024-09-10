"use client";

import { createContext, ReactNode, useState } from "react";
import styles from "./Message.module.scss";

interface MessageContextProps {
  defineMessage: (message: string) => void;
}

export const MessageContext = createContext({} as MessageContextProps);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");

  function defineMessage(msg: string) {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 8000);
  }

  return (
    <MessageContext.Provider value={{ defineMessage }}>
      {children}
      {message && (
        <div className={styles.message}>
          <h1>Something here</h1>
          <p>{message}</p>
        </div>
      )}
    </MessageContext.Provider>
  );
}
