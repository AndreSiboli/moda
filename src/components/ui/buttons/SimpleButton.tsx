import { ComponentProps } from "react";
import styles from "@/styles/ui/buttons/SimpleButton.module.scss";

interface PropsType extends ComponentProps<"button"> {
  text: string;
}

export default function SimpleButton(props: PropsType) {
  const { text, ...rest } = props;

  return (
    <button {...rest} className={styles.button}>
      {text}
    </button>
  );
}
