import styles from "@/styles/utils/Loading.module.scss";
import Logo from "../layout/Logo";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Logo />
    </div>
  );
}
