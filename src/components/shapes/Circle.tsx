import styles from "@/styles/shapes/Circle.module.scss";
import { CSSProperties } from "react";

interface PropsType {
  style: CSSProperties;
}

export default function Circle(props: PropsType) {
  const { style } = props;

  return <div className={styles.circle} style={style}></div>;
}
