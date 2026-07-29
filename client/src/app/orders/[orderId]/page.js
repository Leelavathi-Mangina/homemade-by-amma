"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useAuth } from "../../../context/AuthContext";
import { getOrderById } from "../../../lib/api/order";

import OrderSummary from "../../../components/orders/OrderSummary";
import OrderItems from "../../../components/orders/OrderItems";
import OrderTimeline from "../../../components/orders/OrderTimeline";

export default function OrderDetailsPage() {
  const router = useRouter();

  const params = useParams();

  const { user, loading } = useAuth();

  const [order, setOrder] = useState(null);

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
      return;
    }

    async function fetchOrder() {
      try {
        const data = await getOrderById(params.orderId);

        setOrder(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setPageLoading(false);
      }
    }

    if (user) {
      fetchOrder();
    }
  }, [loading, user, router, params]);

  if (loading || pageLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">Loading Order...</h1>
        </div>
      </section>
    );
  }

  if (!order) {
    return null;
  }

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-4xl font-bold">Order Details</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <OrderItems items={order.items} />
          </div>
          <div className="space-y-6">
            <OrderTimeline currentStatus={order.status} />

            <OrderSummary order={order} />
          </div>
        </div>
      </div>
    </section>
  );
}
