"use client";

import { useState } from "react";

import PageHeader from "../../components/products/PageHeader";
import ProductToolbar from "../../components/products/ProductToolbar";
import ProductGrid from "../../components/products/ProductGrid";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

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
