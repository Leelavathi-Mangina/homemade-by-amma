export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-amber-300 hover:shadow-xl">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-100 text-5xl transition-colors duration-300 group-hover:scale-110 group-hover:bg-amber-200">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}