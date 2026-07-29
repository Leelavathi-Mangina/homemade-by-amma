"use client";

import Link from "next/link";

import OrderStatusBadge from "./OrderStatusBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";

export default function OrderCard({ order }) {
  const orderDate = new Date(order.createdAt).toLocaleDateString();

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Order ID</p>

          <h2 className="text-xl font-bold text-gray-900">{order.orderId}</h2>

          <p className="text-gray-600">Ordered on {orderDate}</p>
        </div>

        <div className="grid gap-3 text-sm md:text-right">
          <div>
            <span className="font-semibold">Status:</span>{" "}
            <OrderStatusBadge status={order.status} />
          </div>

          <div>
            <span className="font-semibold">Payment:</span>{" "}
            <PaymentStatusBadge status={order.paymentStatus} />
          </div>

          <div className="text-lg font-bold text-amber-700">
            ₹{order.totalAmount}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/orders/${order.orderId}`}
          className="inline-flex rounded-xl bg-amber-800 px-5 py-3 font-semibold text-white transition hover:bg-amber-900"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
