"use client";

import { ProductType } from "@/_types/ProductsType";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { products } from "@/fake-api/ProductsData";
import styles from "@/styles/pages/products/Products.module.scss";

import Portraits from "@/components/products/Portraits";
import ProductInformation from "@/components/products/ProductInformation";
import ProductCarousel from "@/components/products/ProductCarousel";
import { PiHandSwipeLeft } from "react-icons/pi";
import Loading from "@/components/utils/Loading";
import { MessageContext } from "@/context/Message";

export default function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [handleCarousel, setHandleCarousel] = useState(false);
  const { defineMessage } = useContext(MessageContext);

  useEffect(() => {
    const prod = products.find((product) => product.id === id) || null;
    setProduct(prod);
  }, [id]);

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;
      if (width <= 916) return setHandleCarousel(true);
      setHandleCarousel(false);
    }
    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    defineMessage({
      title: "Attention",
      message:
        "This is a demo site. The images are not real products. All the author are credited in mentions on the footer.",
      type: "info",
    });
  }, []);

  return (
    <main className={styles.products}>
      {product ? (
        <article className={styles.products_container}>
          <section
            className={
              handleCarousel ? styles.products_carousel : styles.products_images
            }
          >
            {handleCarousel ? (
              <>
                <ProductCarousel images={product.images} />
                <p className={styles.carousel_swipe} aria-hidden="true">
                  <PiHandSwipeLeft /> Swipe
                </p>
              </>
            ) : (
              <Portraits images={product.images} />
            )}
          </section>

          <section className={styles.products_info}>
            <ProductInformation product={product} />
          </section>
        </article>
      ) : (
        <div className={styles.loading}>
          <div className={styles.loading_container}>
            <Loading />
          </div>
        </div>
      )}
    </main>
  );
}
