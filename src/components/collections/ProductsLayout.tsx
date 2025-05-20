"use client";

import { ProductType } from "@/_types/ProductsType";
import { RoutesCollectionType, RoutesStoreType } from "@/_types/RoutesType";
import styles from "@/styles/collections/ProductLayout.module.scss";
import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";
import StoreSkeleton from "../ui/loading/StoreSkeleton";

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
        <StoreSkeleton />
      )}
    </div>
  );
}
