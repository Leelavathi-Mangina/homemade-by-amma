export default function ContactCard({
  icon,
  title,
  value,
  description,
}) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl">

      <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 font-semibold text-amber-700">
        {value}
      </p>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

    </div>
  );
}