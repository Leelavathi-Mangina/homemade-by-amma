import ProductCard from "./ProductCard";
import { HOME_FEATURED_PRODUCTS } from "../../constants/products";
import Button from "../ui/Button";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Featured Products
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Amma's Best Sellers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Freshly prepared homemade favorites loved by our customers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {HOME_FEATURED_PRODUCTS.map((product) => (
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

        <div className="mt-14 text-center">
          <Button variant="secondary">View All Products</Button>
        </div>
      </div>
    </section>
  );
}
