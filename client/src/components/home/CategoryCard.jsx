import Link from "next/link";

export default function CategoryCard({
  icon,
  title,
  description,
  href = "#",
}) {
  return (
    <Link href={href}>
      <div className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 text-5xl transition-colors duration-300 group-hover:bg-amber-200">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-6 text-sm font-semibold text-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore →
        </div>
      </div>
    </Link>
  );
}