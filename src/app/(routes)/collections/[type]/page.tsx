"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductType } from "@/_types/ProductsType";
import { chooseCollectionPage, chooseCollection } from "@/utils/storeManager";
import { ColletctionPageType } from "@/_types/StorePageType";
import ProductsLayout from "@/components/collections/ProductsLayout";

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

  return <ProductsLayout page={page} products={products} />;
}
