import { ReactNode } from "react";
import styles from "@/styles/layout/MainContainer.module.scss";

import Navbar from "@/components/Navbar/Index";
import Footer from "@/components/Footer/Index";

interface PropsType {
  children: ReactNode;
}

export default function MainContainer({ children }: PropsType) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
