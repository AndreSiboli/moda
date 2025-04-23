import { ComponentProps } from "react";
import styles from "@/styles/ui/buttons/Button.module.scss";

interface PropsType extends ComponentProps<"button"> {
  text: string;
}

export default function Button(props: PropsType) {
  const { text } = props;

  return (
    <button {...props} className={styles.button}>
      {text}
    </button>
  );
}
