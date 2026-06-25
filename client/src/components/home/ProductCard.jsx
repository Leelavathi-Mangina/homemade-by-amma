import Button from "../ui/Button";

export default function ProductCard({ image, name, category, price }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl">
      <div className="flex h-56 items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100 text-7xl transition-transform duration-300 group-hover:scale-105">
        {image}
      </div>

      <div className="p-7">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold text-gray-900">{name}</h3>

        <p className="mt-4 text-2xl font-bold text-amber-700">{price}</p>

        <div className="mt-8">
          <Button className="w-full">Order Now</Button>
        </div>
      </div>
    </div>
  );
}
