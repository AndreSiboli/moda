import { ComponentProps } from "react";
import styles from "@/styles/ui/links/LinkBoxed.module.scss";
import Link from "next/link";

interface PropsType extends ComponentProps<"a"> {
  href: string;
  text: string;
}

export default function LinkBoxed(props: PropsType) {
  const { href, text, ...rest } = props;

  return (
    <Link {...rest} href={href} className={styles.link}>
      <span className={styles.link_span}>{text}</span>
    </Link>
  );
}
