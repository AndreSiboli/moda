import styles from "@/styles/pages/under-construction.module.scss";

import Link from "next/link";
import Container from "@/components/layout/Container";

export default function UnderConstruction() {
  return (
    <div className={styles.under}>
      <Container>
        <div className={styles.under_container}>
          <h1>Under Construction</h1>
          <p>
            Why was the fashion site&apos;s construction so slowly?
            <br />
            Because it was constantly “breaking” the style!
          </p>
          <Link href="/">Back to home</Link>
        </div>
      </Container>
    </div>
  );
}
