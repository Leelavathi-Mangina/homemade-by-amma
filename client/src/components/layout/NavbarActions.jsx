"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";

export default function NavbarActions() {
  const { user, loading, logout } = useAuth();
  const { cart } = useCart();
  const router = useRouter();

  const cartCount =
    cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <div className="hidden items-center gap-4 md:flex">
      <Link href="/cart">
        <button
          className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
          aria-label="Cart"
        >
          <ShoppingCart size={22} />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </Link>

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
