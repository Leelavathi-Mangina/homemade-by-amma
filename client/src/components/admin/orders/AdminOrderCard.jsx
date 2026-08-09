import Link from "next/link";

export default function AdminOrderCard({ order }) {
  const orderDate = new Date(
    order.createdAt
  ).toLocaleDateString();

  const deliveryDate = order.preferredDeliveryDate
    ? new Date(
        order.preferredDeliveryDate
      ).toLocaleDateString()
    : "Not Selected";

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Order Information */}
        <div className="space-y-2">

          <p className="text-sm text-gray-500">
            Order ID
          </p>

          <h2 className="text-xl font-bold text-gray-900">
            {order.orderId}
          </h2>

          <p className="text-gray-600">
            Customer: {order.user.name}
          </p>

          <p className="text-gray-600">
            Phone: {order.user.phone}
          </p>

          <p className="text-gray-500">
            Ordered on {orderDate}
          </p>

          <p className="text-gray-500">
            Delivery: {deliveryDate}
          </p>

        </div>

        {/* Order Summary */}
        <div className="space-y-3 lg:text-right">

          <p className="text-lg font-bold text-amber-700">
            ₹{order.totalAmount}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">
              Order Status:
            </span>{" "}
            {order.status}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">
              Payment:
            </span>{" "}
            {order.paymentStatus}
          </p>

          <Link
            href={`/admin/orders/${order.orderId}`}
            className="inline-flex rounded-xl bg-amber-800 px-5 py-3 font-semibold text-white transition hover:bg-amber-900"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}