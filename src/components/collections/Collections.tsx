"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/collections/Collections.module.scss";
import {
  sortByPriceHigherToLower,
  sortByPriceLowerToHigher,
  sortByRating,
} from "@/utils/productsManager";
import { ProductType } from "@/_types/ProductsType";
import { useDispatch } from "react-redux";
import { insertItem } from "@/redux/features/cart-slice";

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
  const dispatch = useDispatch();

  function defineGrid(str: string) {
    setGrid(`grid-${str}`);
  }

  function defineSort(str: string) {
    setSort(str);
  }

  // function addProduct(product: ProductType & { quantity: number }) {
  //   // dispatch(insertItem(product));
  // } //I have to reformule this

  useEffect(() => {
    let sorted = data;
    if (sort === "br") sorted = sortByRating(data);
    else if (sort === "hl") sorted = sortByPriceHigherToLower(data);
    else if (sort === "lh") sorted = sortByPriceLowerToHigher(data);
    setProducts([...sorted]);
  }, [sort]);

  return (
    <section className={styles.collection}>
      <header className={styles.collection_manager}>
        <div className={styles.manager_title}>
          <p>{title}</p>
        </div>
        <div className={styles.manager_end}>
          <div className={styles.manager_sort}>
            <Sort handleValue={defineSort} sort={sort} />
          </div>
          <div className={styles.manager_radios}>
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
          </div>
        </div>
      </header>
      <div className={`${styles.collection_group} ${styles[grid]}`}>
        {products.map((item) => (
          <ProductCard product={item} key={item.id} handleItem={() => {}} />
        ))}
      </div>
    </section>
  );
}
