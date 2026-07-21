import CategoryCard from "../home/CategoryCard";

const categoryIcons = {
  sweets: "🍬",
  pickles: "🥭",
  "spicy-crunchy-snacks": "🍪",
  flours: "🥣",
};

export default function CategoryGrid({ categories }) {
  if (!categories.length) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            No Categories Available
          </h2>

          <p className="mt-4 text-gray-600">
            Categories will appear here once they are added.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            icon={categoryIcons[category.slug] || "🍽️"}
            title={category.name}
            description={category.description}
            href={`/products?category=${category.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
