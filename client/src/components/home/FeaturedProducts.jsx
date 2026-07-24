import Link from "next/link";
import ProductCard from "./ProductCard";
import Button from "../ui/Button";
import { getFeaturedProducts } from "../../lib/api/products";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

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
          {products.map((product) => (
            <ProductCard
              key={product._id}
              image={product.images?.[0] || "🍬"}
              name={product.name}
              category={product.category?.name || ""}
              price={product.price}
              unit={product.unit}
              shortDescription={product.shortDescription}
              slug={product.slug}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/products">
            <Button variant="secondary">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}