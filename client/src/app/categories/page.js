import PageHeader from "../../components/products/PageHeader";
import CategorySummary from "../../components/categories/CategorySummary";
import CategoryGrid from "../../components/categories/CategoryGrid";
import { getCategories } from "../../lib/api/categories";

export default async function CategoriesPage() {
  let categories = [];

  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  return (
    <>
      <PageHeader
        title="Shop by Category"
        description="Choose from our authentic homemade specialties, carefully prepared after every order to ensure freshness, quality and traditional taste."
      />

      <CategorySummary totalCategories={categories.length} />

      <CategoryGrid categories={categories} />
    </>
  );
}