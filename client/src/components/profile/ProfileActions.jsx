"use client";

import { useRouter } from "next/navigation";

import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

export default function ProfileActions() {
  const router = useRouter();

  const { logout } = useAuth();

  async function handleLogout() {
    await logout();

    router.push("/");
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Quick Actions
      </h2>

      <div className="space-y-4">
        <Button
          className="w-full"
          onClick={() => router.push("/orders")}
        >
          My Orders
        </Button>

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => router.push("/cart")}
        >
          My Cart
        </Button>

        <Button
          variant="secondary"
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}