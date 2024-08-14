import styles from "@/styles/links/LinkButton.module.scss";
import Link from "next/link";

interface PropsType {
  href: string;
  text: string;
}

export default function LinkButton(props: PropsType) {
  const { href, text } = props;

  return (
    <Link href={href} className={styles.link}>
      {text}
    </Link>
  );
}
