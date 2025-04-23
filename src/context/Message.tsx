"use client";

import { createContext, ReactNode, useRef, useState } from "react";
import Message from "@/components/messages/Message";

type MessageProps = {
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
};

interface MessageContextProps {
  defineMessage: (data: MessageProps) => void;
}

export const MessageContext = createContext({} as MessageContextProps);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState({
    title: "",
    message: "",
    type: "" as "success" | "error" | "warning" | "info",
  });
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function clearMessage() {
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  function defineMessage(data: MessageProps) {
    clearMessage();

    setTimeout(() => {
      setMessage(data);
      setIsVisible(true);

      timeoutRef.current = setTimeout(() => {
        clearMessage();
      }, 8000);
    }, 650);
  }

  return (
    <MessageContext.Provider value={{ defineMessage }}>
      {children}
      <Message message={message} isVisible={isVisible} />
    </MessageContext.Provider>
  );
}
