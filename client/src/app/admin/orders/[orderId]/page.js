"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useAuth } from "../../../../context/AuthContext";
import {
  updateOrderStatus,
  updatePaymentStatus,
} from "../../../../lib/api/order";

const ORDER_STATUS_TRANSITIONS = {
  Pending: ["Confirmed", "Cancelled"],

  Confirmed: ["Preparing", "Cancelled"],

  Preparing: ["Ready for Delivery", "Cancelled"],

  "Ready for Delivery": ["Out for Delivery"],

  "Out for Delivery": ["Delivered"],

  Delivered: [],

  Cancelled: [],
};

const PAYMENT_STATUS_TRANSITIONS = {
  Pending: ["Paid", "Failed"],
  Paid: ["Refunded"],
  Failed: [],
  Refunded: [],
};

export default function AdminOrderDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const { user, loading } = useAuth();

  const [order, setOrder] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      router.push("/login");
      return;
    }

    if (user.role !== "admin") {
      router.push("/");
      return;
    }

    async function fetchOrder() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/orders/${params.orderId}`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        setOrder(result.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setPageLoading(false);
      }
    }

    if (params.orderId) {
      fetchOrder();
    }
  }, [loading, user, router, params.orderId]);

  async function handleOrderStatusChange(event) {
    const newStatus = event.target.value;

    if (newStatus === order.status) {
      return;
    }

    try {
      setUpdatingStatus(true);

      const updatedOrder = await updateOrderStatus(order.orderId, newStatus);

      setOrder((currentOrder) => ({
        ...currentOrder,
        status: updatedOrder.status,
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      setUpdatingStatus(false);
    }
  }

  async function handlePaymentStatusChange(event) {
    const newPaymentStatus = event.target.value;

    if (newPaymentStatus === order.paymentStatus) {
      return;
    }

    try {
      setUpdatingStatus(true);

      const updatedOrder = await updatePaymentStatus(
        order.orderId,
        newPaymentStatus,
      );

      setOrder((currentOrder) => ({
        ...currentOrder,
        paymentStatus: updatedOrder.paymentStatus,
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      setUpdatingStatus(false);
    }
  }

  if (loading || pageLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">Loading Order...</h1>
        </div>
      </section>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  if (!order) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">Order Not Found</h1>
        </div>
      </section>
    );
  }

  const deliveryDate = order.preferredDeliveryDate
    ? new Date(order.preferredDeliveryDate).toLocaleDateString()
    : "Not Selected";

  const orderDate = new Date(order.createdAt).toLocaleDateString();

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">Order Details</h1>

        <p className="mt-3 text-gray-600">Manage order {order.orderId}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Order Information */}
          <div className="space-y-8 lg:col-span-2">
            {/* Customer Information */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">Customer Information</h2>

              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Name:</span> {order.user.name}
                </p>

                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {order.user.email}
                </p>

                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {order.user.phone}
                </p>
              </div>
            </div>

            {/* Ordered Items */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">Ordered Items</h2>

              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div
                    key={`${item.productName}-${index}`}
                    className="flex flex-col gap-2 border-b pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-semibold">{item.productName}</h3>

                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity} {item.unit}
                      </p>
                    </div>

                    <p className="font-semibold text-amber-700">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between border-t pt-6 text-xl font-bold">
                <span>Total</span>
                <span>₹{order.totalAmount}</span>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">Delivery Information</h2>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {order.deliveryAddress.fullName}
                </p>

                <p>{order.deliveryAddress.houseNo}</p>
                <p>{order.deliveryAddress.street}</p>
                <p>{order.deliveryAddress.villageOrCity}</p>
                <p>{order.deliveryAddress.district}</p>
                <p>{order.deliveryAddress.state}</p>
                <p>{order.deliveryAddress.pincode}</p>

                {order.deliveryAddress.landmark && (
                  <p>
                    <span className="font-semibold">Landmark:</span>{" "}
                    {order.deliveryAddress.landmark}
                  </p>
                )}

                <p className="pt-3">
                  <span className="font-semibold">
                    Preferred Delivery Date:
                  </span>{" "}
                  {deliveryDate}
                </p>

                <p>
                  <span className="font-semibold">Order Notes:</span>{" "}
                  {order.orderNotes || "No notes"}
                </p>
              </div>
            </div>
          </div>

          {/* Order Status */}
          <div>
            <div className="rounded-2xl bg-white p-6 shadow lg:sticky lg:top-24">
              <h2 className="mb-6 text-2xl font-bold">Order Status</h2>

              <div className="space-y-5">
                <div>
                  <p className="font-semibold">Order ID</p>

                  <p>{order.orderId}</p>
                </div>

                <div>
                  <p className="font-semibold">Ordered On</p>

                  <p>{orderDate}</p>
                </div>

                <div>
                  <p className="font-semibold">Order Status</p>

                  <select
                    value={order.status}
                    onChange={handleOrderStatusChange}
                    disabled={
                      updatingStatus ||
                      ORDER_STATUS_TRANSITIONS[order.status]?.length === 0
                    }
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200 disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    <option value={order.status}>{order.status}</option>

                    {ORDER_STATUS_TRANSITIONS[order.status]?.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>

                  {updatingStatus && (
                    <p className="mt-2 text-sm text-gray-500">
                      Updating status...
                    </p>
                  )}
                </div>

                <div>
                  <p className="font-semibold">Payment Status</p>

                  <select
                    value={order.paymentStatus}
                    onChange={handlePaymentStatusChange}
                    disabled={
                      updatingStatus ||
                      PAYMENT_STATUS_TRANSITIONS[order.paymentStatus]
                        ?.length === 0
                    }
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200 disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    <option value={order.paymentStatus}>
                      {order.paymentStatus}
                    </option>

                    {PAYMENT_STATUS_TRANSITIONS[order.paymentStatus]?.map(
                      (status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ),
                    )}
                  </select>

                  {updatingStatus && (
                    <p className="mt-2 text-sm text-gray-500">
                      Updating payment status...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
