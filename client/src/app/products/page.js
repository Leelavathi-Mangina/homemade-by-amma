"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import PageHeader from "../../components/products/PageHeader";
import ProductToolbar from "../../components/products/ProductToolbar";
import ProductGrid from "../../components/products/ProductGrid";
import { HOME_CATEGORIES } from "../../constants/categories";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const matchedCategory = HOME_CATEGORIES.find(
    (category) => category.slug === categoryFromUrl,
  );

  const initialCategory = matchedCategory
    ? matchedCategory.title
    : "All Categories";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);

  return (
    <>
      <PageHeader
        title="Our Products"
        description="Discover fresh homemade sweets, snacks, pickles and flours prepared with love and quality ingredients."
      />

      <ProductToolbar
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        category={category}
        onCategoryChange={(e) => setCategory(e.target.value)}
        onClearSearch={() => setSearch("")}
      />

      <ProductGrid
        search={search}
        category={category}
        onClearSearch={() => setSearch("")}
      />
    </>
  );
}
