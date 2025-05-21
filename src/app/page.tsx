"use client";

import styles from "@/styles/pages/page.module.scss";
import { MessageContext } from "@/context/Message";
import { useContext, useEffect } from "react";

import Hero from "@/components/pages/home/Hero";
import Video from "@/components/pages/home/Video";
import Merchant from "@/components/pages/home/Merchant";
import Products from "@/components/pages/home/Products";

export default function Home() {
  const { defineMessage } = useContext(MessageContext);

  useEffect(() => {
    defineMessage({
      title: "Attention",
      message:
        "This is a demo site. The images are not real products. All the author are credited in mentions on the footer.",
      type: "info",
    });
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      <Merchant />
      <Video />
      <Products />
    </main>
  );
}
