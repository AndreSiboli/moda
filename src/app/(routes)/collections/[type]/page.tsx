"use client";

// import styles from "@/styles/pages/store/Dresses.module.scss";
import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductType } from "@/_types/ProductsType";
import { chooseCollectionPage, chooseCollection } from "@/utils/storeManager";
import { ColletctionPageType } from "@/_types/StorePageType";

export default function Collections() {
  const params = useParams();
  const [page, setPage] = useState<ColletctionPageType | null>(null);
  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    if (!params.type) return;
    const choosenPage = chooseCollectionPage(params.type as string);
    const choosenProducts = chooseCollection(params.type as string);
    setPage(choosenPage[0]);
    setProducts(choosenProducts);
  }, [params]);

  return page && products ? (
    <>
      <HeroCollections
        data={page}
      />
      <Collection data={products} title="Dress" />
    </>
  ) : (
    <div>Loading</div>
  );
}
