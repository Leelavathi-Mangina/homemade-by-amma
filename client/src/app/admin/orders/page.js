"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../../context/AuthContext";

import AdminOrderCard from "../../../components/admin/orders/AdminOrderCard";

export default function AdminOrdersPage() {
  const router = useRouter();

  const { user, loading } = useAuth();

  const [orders, setOrders] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

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

    async function fetchOrders() {
      try {
        const response = await fetch("http://localhost:5000/api/admin/orders", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        setOrders(result.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setPageLoading(false);
      }
    }

    fetchOrders();
  }, [loading, user, router]);

  if (loading || pageLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">Loading Orders...</h1>
        </div>
      </section>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">Manage Orders</h1>

        <p className="mt-3 text-gray-600">View and manage customer orders.</p>

        <div className="mt-10 space-y-6">
          {orders.map((order) => (
            <AdminOrderCard key={order.orderId} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
}
