import PageHeader from "../../components/products/PageHeader";
import CategorySummary from "../../components/categories/CategorySummary";
import CategoryGrid from "../../components/categories/CategoryGrid";
import { HOME_CATEGORIES } from "../../constants/categories";

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        title="Shop by Category"
        description="Choose from our authentic homemade specialties, carefully prepared after every order to ensure freshness, quality and traditional taste."
      />

      <CategorySummary totalCategories={HOME_CATEGORIES.length} />

      <CategoryGrid />
    </>
  );
}
