export default function CategorySummary({ totalCategories }) {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
          <div className="text-3xl">🥣</div>

          <h3 className="mt-4 font-bold text-gray-900">
            {totalCategories} Homemade Categories
          </h3>

          <p className="mt-2 text-gray-600">
            Sweets, snacks, pickles and flours.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
          <div className="text-3xl">👩‍🍳</div>

          <h3 className="mt-4 font-bold text-gray-900">
            Made After Every Order
          </h3>

          <p className="mt-2 text-gray-600">
            Fresh preparation for every customer.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
          <div className="text-3xl">📦</div>

          <h3 className="mt-4 font-bold text-gray-900">Bulk Orders Welcome</h3>

          <p className="mt-2 text-gray-600">
            Perfect for festivals and family functions.
          </p>
        </div>
      </div>
    </section>
  );
}
