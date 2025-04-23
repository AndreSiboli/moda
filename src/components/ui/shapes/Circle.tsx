import { ComponentProps } from "react";
import styles from "@/styles/ui/shapes/Circle.module.scss";

interface PropsType extends ComponentProps<"div"> {}

export default function Circle(props: PropsType) {
  const { ...rest } = props;

  return <div {...rest} className={styles.circle} />;
}
