export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search homemade products..."
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
    />
  );
}