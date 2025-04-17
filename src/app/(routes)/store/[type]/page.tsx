"use client";

// import styles from "@/styles/pages/store/Dresses.module.scss";
import HeroCollections from "@/components/collections/HeroCollections";
import Collection from "@/components/collections/Collections";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductType } from "@/_types/ProductsType";
import { chooseProductPage, chooseProductType } from "@/utils/storeManager";
import { StorePageType } from "@/_types/StorePageType";

export default function Store() {
  const params = useParams();
  const [page, setPage] = useState<StorePageType | null>(null);
  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    if (!params.type) return;
    const choosenPage = chooseProductPage(params.type as string);
    const choosenProducts = chooseProductType(params.type as string);
    setPage(choosenPage[0]);
    setProducts(choosenProducts);
  }, [params]);

  return page && products ? (
    <>
      <HeroCollections data={page} />
      <Collection data={products} title={page.title} />
    </>
  ) : (
    <div>Loading</div>
  );
}
