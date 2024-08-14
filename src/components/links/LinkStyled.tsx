import styles from "@/styles/links/LinkStyled.module.scss";

interface PropsType {
  text: string;
  href: string;
}

export default function LinkStyled(props: PropsType) {
  const { text, href } = props;

  return (
    <a href={href} className={styles.link}>
      {text}
    </a>
  );
}
