import Button from "../ui/Button";
import ProductCard from "../home/ProductCard";
import { HOME_FEATURED_PRODUCTS } from "../../constants/products";

export default function ProductGrid({ search, category, onClearSearch }) {
  const searchText = search.trim().toLowerCase();

  const filteredProducts = HOME_FEATURED_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All Categories" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="pb-20">
      <div className="mx-auto mb-8 flex max-w-7xl items-center justify-between px-6">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </p>
      </div>

      {filteredProducts.length === 0 && (
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-dashed border-gray-300 bg-orange-50 py-16 text-center">
            <div className="text-6xl">🔍</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              No matching products found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Try changing your search or selecting another category.
            </p>

            {search.trim() !== "" && (
              <Button className="mt-8" onClick={onClearSearch}>
                Clear Search
              </Button>
            )}
          </div>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              unit={product.unit}
              shortDescription={product.shortDescription}
              slug={product.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
}
