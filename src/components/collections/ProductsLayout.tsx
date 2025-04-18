"use client";

import { ProductType } from "@/_types/ProductsType";
import { RoutesCollectionType, RoutesStoreType } from "@/_types/RoutesType";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { chooseCollectionPage, chooseCollection } from "@/utils/storeManager";
import styles from "@/styles/collections/ProductLayout.module.scss";
import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";
import Loading from "../utils/Loading";

interface PropsType {
  page: RoutesCollectionType | RoutesStoreType | null;
  products: ProductType[] | null;
}

export default function ProductsLayout(props: PropsType) {
  const { page, products } = props;

  return (
    <div className={styles.layout}>
      {page && products ? (
        <>
          <HeroCollections data={page} />
          <Collection data={products} title={page.title} />
        </>
      ) : (
        <div className={styles.layout_loading}>
          <div className={styles.loading_container}>
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
}
