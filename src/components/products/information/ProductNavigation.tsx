import styles from "@/styles/pages/products/information/ProductNavigation.module.scss";
import { formatCapitalize } from "@/utils/formatter";
import Link from "next/link";

interface PropsType {
  type: string;
  href: string;
}

export default function ProductNavigation(props: PropsType) {
  const { type, href } = props;

  return (
    <nav className={styles.product_nav}>
      <div className={styles.nav_link}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.nav_link}>
        <Link href={href}>{formatCapitalize(type)}</Link>
      </div>
    </nav>
  );
}
