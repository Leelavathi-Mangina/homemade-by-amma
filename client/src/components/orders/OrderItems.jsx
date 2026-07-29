export default function OrderItems({ items }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Ordered Items
      </h2>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.product}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h3 className="text-lg font-semibold">
                {item.productName}
              </h3>

              <p className="text-gray-500">
                {item.quantity} {item.unit}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                ₹{item.price}/{item.unit}
              </p>

              <p className="text-lg font-bold text-amber-700">
                ₹{item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}