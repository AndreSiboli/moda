import styles from "@/styles/shapes/Square.module.scss";
import { CSSProperties } from "react";

interface PropsType {
  style: CSSProperties;
  color: "v1" | "v2" | "v3" | "v4" | "v5";
}

export default function Square(props: PropsType) {
  const { style, color } = props;

  return <div className={`${styles.square} ${styles[color]}`} style={style} />;
}
