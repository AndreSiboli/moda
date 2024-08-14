import styles from "@/styles/pages/page.module.scss";

import Hero from "@/components/pages/home/Hero";
import Video from "@/components/pages/home/Video";
import Merchant from "@/components/pages/home/Merchant";
import Products from "@/components/pages/home/Products";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      {/* <Merchant />
      <Video />
      <Products /> */}
    </main>
  );
}
