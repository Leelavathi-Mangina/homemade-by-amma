import Link from "next/link";
import Button from "../ui/Button";

export default function ProductDetails({ product }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Back Navigation */}
        <Link
          href="/products"
          className="mb-8 inline-block font-medium text-amber-700 hover:text-amber-900"
        >
          ← Back to Products
        </Link>


        <div className="grid gap-12 md:grid-cols-2">

          {/* Product Image */}
          <div className="flex h-96 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 text-9xl">
            {product.image}
          </div>


          {/* Product Information */}
          <div>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-amber-700">
              {product.category}
            </span>


            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>


            <p className="mt-5 text-3xl font-bold text-amber-700">
              ₹{product.price} / {product.unit}
            </p>


            <p className="mt-5 text-lg text-gray-600">
              {product.shortDescription}
            </p>


            <p className="mt-6 leading-8 text-gray-600">
              {product.description}
            </p>


            {/* Made To Order */}
            {product.madeToOrder && (
              <div className="mt-6 inline-flex rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
                ✓ Prepared Fresh After Order
              </div>
            )}


            {/* Ingredients */}
            <div className="mt-10">

              <h2 className="text-xl font-bold text-gray-900">
                Ingredients
              </h2>


              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                {product.ingredients.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>


            {/* Shelf Life */}
            <div className="mt-8">

              <h2 className="text-xl font-bold text-gray-900">
                Shelf Life
              </h2>


              <p className="mt-2 text-gray-600">
                {product.shelfLife}
              </p>

            </div>


            {/* CTA */}
            <div className="mt-10">
              <Button className="bg-amber-800 hover:bg-amber-900">
                Order Now
              </Button>
            </div>


          </div>

        </div>

      </div>
    </section>
  );
}