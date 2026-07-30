import Link from "next/link";

export default function DashboardCard({
  title,
  description,
  icon,
  href,
}) {
  return (
    <Link href={href}>
      <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-4 text-5xl">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

      </div>
    </Link>
  );
}