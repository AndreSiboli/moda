import { ComponentProps, useState } from "react";
import styles from "@/styles/ui/buttons/ButtonLoading.module.scss";

interface PropsType extends ComponentProps<"button"> {
  text: string;
  message?: string;
  handleClick: () => Promise<unknown>;
  variant?: "v1" | "v2";
}

export default function ButtonLoading(props: PropsType) {
  const { text, message, handleClick, variant = "v1", ...rest } = props;
  const [isLoading, setIsLoading] = useState<"normal" | "loading" | "info">(
    "normal"
  );
  const isNormal = isLoading === "normal" ? styles.active : "";
  const isItLoading = isLoading === "loading" ? styles.active : "";
  const isInfo = isLoading === "info" ? styles.active : "";

  async function handleOnClick() {
    if (isLoading !== "normal") return;

    try {
      setIsLoading("loading");
      await handleClick();

      if (message) {
        setIsLoading("info");
        setTimeout(() => setIsLoading("normal"), 1000);
        return;
      }
      setIsLoading("normal");
    } catch (err) {
      setIsLoading("normal");
    }
  }

  return (
    <button
      {...rest}
      className={`${styles.button} ${styles[variant]}`}
      aria-busy={isLoading === "loading"}
      onClick={handleOnClick}
    >
      <p className={`${styles.button_text} ${isNormal}`}>{text}</p>

      <div className={`${styles.button_loading} ${isItLoading}`}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

      <p className={`${styles.button_info} ${isInfo}`}>{message}</p>
    </button>
  );
}
