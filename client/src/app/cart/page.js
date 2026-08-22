"use client";

import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const {
    cart,
    loading: cartLoading,
    updateCartItem,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [authLoading, user, router]);

  if (authLoading || cartLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            Loading Cart...
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
        <h1 className="mb-8 text-4xl font-bold text-gray-900">My Cart</h1>

        {!cart || cart.items.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some delicious homemade food to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <>
              {/* Cart Items */}
              <div className="space-y-6 lg:col-span-2">
                {cart.items.map((item) => (
                  <div
                    key={item.product._id}
                    className="flex gap-6 rounded-2xl bg-white p-6 shadow"
                  >
                    <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-orange-100 text-5xl">
                      {item.product.images?.[0]?.url ? (
                        <img
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          className="h-full w-full rounded-2xl object-cover"
                        />
                      ) : (
                        "🍬"
                      )}
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">
                        {item.product.name}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500">
                        {item.product.shortDescription}
                      </p>

                      <p className="mt-2 font-semibold text-amber-700">
                        ₹{item.product.price} / {item.product.unit}
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          className="h-8 w-8 rounded-lg border"
                          onClick={() =>
                            updateCartItem(
                              item.product._id,
                              Math.max(
                                item.product.minOrderQuantity || 1,
                                item.quantity - 1,
                              ),
                            )
                          }
                        >
                          -
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                          className="h-8 w-8 rounded-lg border"
                          onClick={() =>
                            updateCartItem(item.product._id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="mt-4 rounded-lg bg-red-100 px-4 py-2 font-medium text-red-700 transition hover:bg-red-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="rounded-2xl bg-white p-6 shadow lg:sticky lg:top-24 h-fit">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                <div className="mt-6 flex justify-between">
                  <span>Subtotal</span>

                  <span className="font-semibold">
                    ₹
                    {cart.items.reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0,
                    )}
                  </span>
                </div>

                <div className="mt-4 flex justify-between">
                  <span>Delivery</span>

                  <span>Calculated at Checkout</span>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>

                  <span>
                    ₹
                    {cart.items.reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0,
                    )}
                  </span>
                </div>

                <Link href="/checkout">
                  <button className="mt-8 w-full rounded-xl bg-amber-800 py-3 font-semibold text-white transition hover:bg-amber-900">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </>
          </div>
        )}
      </div>
    </section>
  );
}
