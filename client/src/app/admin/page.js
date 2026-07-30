"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";

import DashboardGrid from "../../components/admin/DashboardGrid";

export default function AdminDashboardPage() {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
        return;
      }

      if (user.role !== "admin") {
        router.push("/");
      }
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">Loading...</h1>
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
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>

        <p className="mt-3 text-gray-600">Welcome back, {user.name}</p>

        <DashboardGrid />
      </div>
    </section>
  );
}
