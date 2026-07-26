"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";

import ProfileCard from "../../components/profile/ProfileCard";
import ProfileActions from "../../components/profile/ProfileActions";

export default function ProfilePage() {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            Loading Profile...
          </h1>
        </div>
      </section>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            My Profile
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Manage your account information and customer activities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProfileCard user={user} />
          </div>

          <div>
            <ProfileActions />
          </div>
        </div>
      </div>
    </section>
  );
}