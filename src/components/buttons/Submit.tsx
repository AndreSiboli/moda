import RalewayFont from "@/components/fonts/RalewayFont";
import styles from "@/styles/buttons/Submit.module.scss";

import { ComponentProps } from "react";

interface PropsType extends ComponentProps<"button"> {
  text: string;
  variant?: 'v1' | 'v2'
}

export default function Submit(props: PropsType) {
  const { text, variant='v1' } = props;

  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`}>
      <RalewayFont>{text}</RalewayFont>
    </button>
  );
}
