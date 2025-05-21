"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/collections/Collections.module.scss";
import {
  sortByPriceHigherToLower,
  sortByPriceLowerToHigher,
  sortByRating,
} from "@/utils/productsManager";
import { ProductType } from "@/_types/ProductsType";

import Sort from "@/components/collections/Sort";
import RadioCollection from "@/components/collections/RadioCollection";
import ProductCard from "@/components/cards/ProductCard";

interface PropsType {
  data: ProductType[];
  title: string;
}

export default function Collection(props: PropsType) {
  const { data, title } = props;
  const [products, setProducts] = useState(data);
  const [grid, setGrid] = useState("grid-4");
  const [sort, setSort] = useState("br");
  const [isAddingItem, setIsAddingItem] = useState(false);

  function defineGrid(columns: string) {
    setGrid(`grid-${columns}`);
  }

  function defineSort(value: string) {
    setSort(value);
  }

  function toggleAddingItem(isAdding: boolean) {
    setIsAddingItem(isAdding);
  }

  useEffect(() => {
    let sorted = data;
    if (sort === "br") sorted = sortByRating(data);
    else if (sort === "hl") sorted = sortByPriceHigherToLower(data);
    else if (sort === "lh") sorted = sortByPriceLowerToHigher(data);
    setProducts([...sorted]);
  }, [sort]);

  return (
    <section className={styles.collection}>
      <header className={styles.collection_header}>
        <div className={styles.header_title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.header_manager}>
          <div className={styles.manager_sort}>
            <Sort handleValue={defineSort} sort={sort} />
          </div>
          <fieldset className={styles.manager_radios}>
            <legend>Choose the layout grade:</legend>
            <RadioCollection
              id={"4"}
              name="grid-collection"
              grid={grid}
              onChange={(e) => defineGrid(e.target.value)}
              aria-label="Grid colection 4 column"
            />
            <RadioCollection
              id={"2"}
              name="grid-collection"
              grid={grid}
              onChange={(e) => defineGrid(e.target.value)}
              aria-label="Grid colection 2 column"
            />
          </fieldset>
        </div>
      </header>
      <div className={`${styles.collection_group} ${styles[grid]}`}>
        {products.map((item) => (
          <ProductCard
            product={item}
            key={item.id}
            handleBlockingTime={toggleAddingItem}
            isBlocking={isAddingItem}
          />
        ))}
      </div>
    </section>
  );
}
