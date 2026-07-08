import { PRODUCT_CATEGORIES } from "../../constants/productCategories";

export default function CategoryFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
    >
      {PRODUCT_CATEGORIES.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
}