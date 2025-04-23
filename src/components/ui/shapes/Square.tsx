import { ComponentProps } from "react";
import styles from "@/styles/ui/shapes/Square.module.scss";

interface PropsType extends ComponentProps<"div"> {
  color: "v1" | "v2" | "v3" | "v4" | "v5";
}

export default function Square(props: PropsType) {
  const { color, ...rest } = props;

  return <div {...rest} className={`${styles.square} ${styles[color]}`} />;
}
