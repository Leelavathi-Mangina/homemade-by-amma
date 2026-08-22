import Link from "next/link";

export default function ProductCard({
  image,
  name,
  category,
  price,
  unit,
  shortDescription,
  slug,
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="h-56 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100">
        {image?.startsWith("http") ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-7xl">
            {image || "🍬"}
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-7">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-3 text-gray-600">
          {shortDescription}
        </p>

        <p className="mt-5 text-2xl font-bold text-amber-700">
          ₹{price} / {unit}
        </p>

        <p className="mt-6 font-medium text-amber-800">
          View Product →
        </p>
      </div>
    </Link>
  );
}