import Container from "@/components/layout/Container";
import styles from "@/styles/pages/not-found.module.scss";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <Container>
        <div className={styles.notfound_container}>
          <h1>404.</h1>
          <div className={styles.notfound_joke}>
            <p>
              Why did the fashion influencer get a 404 on their latest post?{" "}
            </p>
            <p>Because their outfit of the day was not found!</p>
          </div>
          <Link href='/'>Back to home</Link>
        </div>
      </Container>
    </div>
  );
}
