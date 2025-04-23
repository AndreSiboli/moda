import { ComponentProps } from "react";
import styles from "@/styles/ui/links/LinkButton.module.scss";
import Link from "next/link";

interface PropsType extends ComponentProps<"a"> {
  href: string;
  text: string;
  variant?: "v1" | "v2";
}

export default function LinkButton(props: PropsType) {
  const { text, href, variant = "v1", ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
      className={`${styles.link} ${styles[variant]}`}
    >
      {text}
    </Link>
  );
}
