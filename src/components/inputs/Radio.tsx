import styles from "@/styles/inputs/Radio.module.scss";
import { ComponentProps } from "react";

interface PropsType extends ComponentProps<"input"> {
  id: string;
  text: string;
}

export default function Radio(props: PropsType) {
  const { id, text, ...rest } = props;

  return (
    <div className={styles.radio}>
      <input {...rest} type="radio" id={id} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
