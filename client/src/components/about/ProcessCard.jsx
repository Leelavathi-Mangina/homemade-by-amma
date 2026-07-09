export default function ProcessCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}