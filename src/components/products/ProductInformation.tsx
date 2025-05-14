import { ProductType } from "@/_types/ProductsType";
import styles from "@/styles/pages/products/ProductInformation.module.scss";
import { useEffect, useRef, useState } from "react";
import Select from "../inputs/Select";
import Rating from "../common/Rating";
import ProductNavigation from "./information/ProductNavigation";
import ProductButton from "./information/ProductButton";
import ProductDetails from "./information/ProductDetails";
import ProductHeader from "./information/ProductHeader";

interface PropsType {
  product: ProductType;
}

export default function ProductInformation(props: PropsType) {
  const { product } = props;
  const [size, setSize] = useState<string | null>(
    product.sizes?.length !== 1 ? null : "TU"
  );
  const [scrollPos, setScrollPos] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);

  function handleSelect(value: string) {
    setSize(value);
  }

  //Controlls Sidebar effect
  useEffect(() => {
    function scroll() {
      const element = parentRef.current;
      if (!element) return;

      const currentScrollPos = window.scrollY;
      const elHeight = element.getBoundingClientRect().height;
      const elTop = element.getBoundingClientRect().top;
      const winHeight = window.innerHeight;
      const marginFromTop = 7 * 16; // 7em
      const paddingBottom = 32;
      const howManyScrolled = scrollPos - currentScrollPos; //To avoid bug when scroll too fast

      // When the element is smaller than window
      if (winHeight > elHeight + marginFromTop) {
        element.style.top = `${marginFromTop}px`;
        return;
      }

      // When the element is taller than window and scrolling to top
      if (scrollPos > currentScrollPos) {
        const calc = Math.min(marginFromTop, elTop + howManyScrolled);
        element.style.top = `${calc}px`;
        setScrollPos(currentScrollPos);
        return;
      }

      // If scrolling to bottom and the element doesn't fit
      const availableSpace = winHeight - elHeight - paddingBottom;
      if (availableSpace > elTop) return;

      const calculatedTop = Math.max(availableSpace, elTop - -howManyScrolled);
      element.style.top = `${calculatedTop}px`;
      setScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, [scrollPos]);

  useEffect(() => {
    if (!parentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const marginTop = 7 * 16; //7em
        const winHeight = window.innerHeight;

        if (entry.contentRect.height + marginTop < winHeight)
          return ((
            entry.target as HTMLDivElement
          ).style.top = `${marginTop}px`);
      }
    });

    resizeObserver.observe(parentRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <article className={styles.info} ref={parentRef}>
      <ProductNavigation type={product.type[0]} />

      <ProductHeader product={product} />

      {product.sizes.length !== 1  && (
        <div className={styles.info_size}>
          <Select
            placeholder="Size"
            value={size}
            options={product.sizes.map((size) => ({
              title: size.size.toString(),
              value: size.size.toString(),
              disabled: size.stock === 0,
            }))}
            handleSelect={handleSelect}
          />
        </div>
      )}

      <ProductButton product={product} selectedSize={size} />

      <ProductDetails product={product} />
    </article>
  );
}
