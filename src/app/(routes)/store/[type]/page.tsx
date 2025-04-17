"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductType } from "@/_types/ProductsType";
import { chooseProductPage, chooseProductType } from "@/utils/storeManager";
import { StorePageType } from "@/_types/StorePageType";
import ProductsLayout from "@/components/collections/ProductsLayout";

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

  return <ProductsLayout page={page} products={products}/>
}
