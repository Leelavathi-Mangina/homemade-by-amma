import Link from "next/link";
import CategoryCard from "../home/CategoryCard";
import { HOME_CATEGORIES } from "../../constants/categories";

export default function CategoryGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {HOME_CATEGORIES.map((category) => (
          <Link key={category.id} href={`/products?category=${category.slug}`}>
            <CategoryCard
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
