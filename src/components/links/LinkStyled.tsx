import { ComponentProps } from "react";
import styles from "@/styles/links/LinkStyled.module.scss";
import Link from "next/link";

interface PropsType extends ComponentProps<"a"> {
  href: string;
  text: string;
}

export default function LinkStyled(props: PropsType) {
  const { text, href } = props;

  return (
    <Link {...props} href={href} className={styles.link}>
      {text}
    </Link>
  );
}
