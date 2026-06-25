export default function TestimonialCard({ name, location, review }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-amber-300 hover:shadow-xl">
      <div className="mb-6 text-2xl tracking-wide text-amber-500">★★★★★</div>

      <div className="mb-4 text-5xl leading-none text-amber-200">&ldquo;</div>

      <p className="relative text-[15px] italic leading-8 text-gray-600">
        "{review}"
      </p>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>

        <p className="mt-1 text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
}
