"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

export default function NavbarActions() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  return (
    <div className="hidden items-center gap-4 md:flex">
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-100"
        aria-label="Cart"
      >
        <ShoppingCart size={22} />
      </button>

      {loading ? (
        <span className="text-sm text-gray-500">Loading...</span>
      ) : user ? (
        <>
          <span className="font-medium text-amber-700">
            Hi, {user.name.split(" ")[0]}
          </span>

          <Link href="/profile">
            <Button>Profile</Button>
          </Link>

          <Button
            variant="secondary"
            onClick={async () => {
              await logout();
              router.push("/");
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
}
