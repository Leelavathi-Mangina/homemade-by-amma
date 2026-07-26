"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function ProductDetails({ product }) {
  const { user } = useAuth();

  const { addToCart } = useCart();

  const [adding, setAdding] = useState(false);

  async function handleAddToCart() {
    if (!user) {
      alert("Please login to add products to cart.");
      return;
    }

    try {
      setAdding(true);

      await addToCart(product._id, 1);

      alert("Product added to cart.");
    } catch (error) {
      alert(error.message);
    } finally {
      setAdding(false);
    }
  }

  const [quantity, setQuantity] = useState(product.minOrderQuantity || 1);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back Navigation */}
        <Link
          href="/products"
          className="mb-8 inline-block font-medium text-amber-700 hover:text-amber-900"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Product Image */}
          <div className="flex h-96 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 text-9xl">
            {product.images?.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full rounded-3xl object-cover"
              />
            ) : (
              <span>🍬</span>
            )}
          </div>

          {/* Product Information */}
          <div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-amber-700">
              {product.category?.name}
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-amber-700">
              ₹{product.price} / {product.unit}
            </p>

            <p className="mt-5 text-lg text-gray-600">
              {product.shortDescription}
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Made To Order */}
            {product.madeToOrder && (
              <div className="mt-6 inline-flex rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
                ✓ Prepared Fresh After Order
              </div>
            )}

            {/* Ingredients */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900">Ingredients</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                {product.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Shelf Life */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Shelf Life</h2>

              <p className="mt-2 text-gray-600">{product.shelfLife}</p>
            </div>

            {/* Quantity */}
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Quantity</h2>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(product.minOrderQuantity || 1, prev - 1),
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xl font-bold hover:bg-gray-100"
                >
                  −
                </button>

                <span className="min-w-[40px] text-center text-xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xl font-bold hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Minimum order: {product.minOrderQuantity} {product.unit}
              </p>
            </div>

            {/* Add To Cart */}
            <div className="mt-10">
              <Button
                className="bg-amber-800 hover:bg-amber-900"
                disabled={adding}
                onClick={handleAddToCart}
              >
                {adding ? "Adding..." : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
