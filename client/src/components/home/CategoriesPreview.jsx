import CategoryCard from "./CategoryCard";
import { HOME_CATEGORIES } from "../../constants/categories";

export default function CategoriesPreview() {
  return (
    <section className="bg-orange-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">
            Categories
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-lg text-gray-600">
            Explore our homemade specialties prepared with love, tradition and
            fresh ingredients.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              href="/categories"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
