"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";
import { getMyOrders } from "../../lib/api/order";

import OrderCard from "../../components/orders/OrderCard";

export default function OrdersPage() {
  const router = useRouter();

  const { user, loading } = useAuth();

  const [orders, setOrders] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
      return;
    }

    async function fetchOrders() {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setPageLoading(false);
      }
    }

    if (user) {
      fetchOrders();
    }
  }, [loading, user, router]);

  if (loading || pageLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">
            Loading Orders...
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-10 text-4xl font-bold">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow">
            <h2 className="text-2xl font-semibold">
              No orders yet
            </h2>

            <p className="mt-4 text-gray-600">
              Place your first homemade order today.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCard
                key={order.orderId}
                order={order}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}