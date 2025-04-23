import styles from "@/styles/messages/Message.module.scss";
import { PiCheckCircle, PiInfo, PiWarning } from "react-icons/pi";
import { VscError } from "react-icons/vsc";

interface PropsType {
  message: {
    title: string;
    message: string;
    type: "success" | "error" | "warning" | "info";
  };
  isVisible: boolean;
}

export default function Message(props: PropsType) {
  const { message, isVisible } = props;

  return (
    <div
      className={`${styles.message} ${styles[message.type]} ${
        isVisible ? styles.visible : ""
      } $`}
    >
      <div className={styles.message_title}>
        <div className={styles.icon}>
          {message.type === "success" && <PiCheckCircle />}
          {message.type === "error" && <VscError />}
          {message.type === "warning" && <PiWarning />}
          {message.type === "info" && <PiInfo />}
        </div>
        <h1>{message.title}</h1>
      </div>
      <div className={styles.message_text}>
        <p>{message.message}</p>
      </div>
    </div>
  );
}
