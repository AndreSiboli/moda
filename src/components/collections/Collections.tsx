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
import Radio from "@/components/collections/Radio";
import Product from "@/components/layout/Product";

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

  function addProduct(product: ProductType & {quantity: number}) {
    dispatch(insertItem(product));
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
      <div className={styles.collection_manager}>
        <div className={styles.manager_title}>
          <p>{title}</p>
        </div>
        <div className={styles.manager_end}>
          <div className={styles.manager_sort}>
            <Sort handleValue={defineSort} sort={sort} />
          </div>
          <div className={styles.manager_radios}>
            <Radio handleValue={defineGrid} grid={grid} id={"4"} />
            <Radio handleValue={defineGrid} grid={grid} id={"2"} />
          </div>
        </div>
      </div>
      <div className={`${styles.collection_group} ${styles[grid]}`}>
        {products.map((item) => (
          <Product product={item} key={item.id} handleItem={addProduct} />
        ))}
      </div>
    </section>
  );
}
