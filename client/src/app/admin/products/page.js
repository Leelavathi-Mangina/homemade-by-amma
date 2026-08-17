"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../../context/AuthContext";
import {
  getProducts,
  updateProductAvailability,
  updateFeaturedStatus,
} from "../../../lib/api/products";

export default function AdminProductsPage() {
  const router = useRouter();

  const { user, loading } = useAuth();

  const [products, setProducts] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [updatingProduct, setUpdatingProduct] = useState(null);
  const [updatingFeaturedProduct, setUpdatingFeaturedProduct] = useState(null);

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

    async function fetchProducts() {
      try {
        const data = await getProducts();

        setProducts(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setPageLoading(false);
      }
    }

    fetchProducts();
  }, [loading, user, router]);

  async function handleAvailabilityChange(product) {
    try {
      setUpdatingProduct(product.slug);

      const updatedProduct = await updateProductAvailability(
        product.slug,
        !product.isAvailable,
      );

      setProducts((currentProducts) =>
        currentProducts.map((currentProduct) =>
          currentProduct.slug === product.slug
            ? {
                ...currentProduct,
                isAvailable: updatedProduct.isAvailable,
              }
            : currentProduct,
        ),
      );
    } catch (error) {
      alert(error.message);
    } finally {
      setUpdatingProduct(null);
    }
  }

  async function handleFeaturedChange(product) {
    try {
      setUpdatingFeaturedProduct(product.slug);

      const updatedProduct = await updateFeaturedStatus(
        product.slug,
        !product.featured,
      );

      setProducts((currentProducts) =>
        currentProducts.map((currentProduct) =>
          currentProduct.slug === product.slug
            ? {
                ...currentProduct,
                featured: updatedProduct.featured,
              }
            : currentProduct,
        ),
      );
    } catch (error) {
      alert(error.message);
    } finally {
      setUpdatingFeaturedProduct(null);
    }
  }

  if (loading || pageLoading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-gray-600">Loading products...</p>
        </div>
      </main>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Product Management
          </h1>

          <p className="mt-3 text-gray-600">Manage product availability.</p>
        </div>

        {products.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-white p-8 shadow">
            <p className="text-gray-600">No products found.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Product ID: {product.productId}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-gray-900">
                      {product.name}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      product.isAvailable
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </div>

                <p className="mt-4 text-gray-600">{product.shortDescription}</p>

                <div className="mt-5 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category?.name || "No Category"}
                  </p>

                  <p>
                    <span className="font-semibold">Price:</span> ₹
                    {product.price} / {product.unit}
                  </p>

                  <p>
                    <span className="font-semibold">Minimum Order:</span>{" "}
                    {product.minOrderQuantity} {product.unit}
                  </p>
                </div>

                {/* Product Availability */}
                <div className="mt-6 border-t pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Product Availability
                      </p>

                      <p className="text-sm text-gray-500">
                        Control whether customers can order this product.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAvailabilityChange(product)}
                      disabled={updatingProduct === product.slug}
                      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
                        product.isAvailable ? "bg-green-600" : "bg-gray-300"
                      } ${
                        updatingProduct === product.slug
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer"
                      }`}
                      aria-label={`Toggle availability for ${product.name}`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                          product.isAvailable
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {updatingProduct === product.slug && (
                    <p className="mt-2 text-sm text-gray-500">
                      Updating availability...
                    </p>
                  )}

                  

                  <div className="mt-5 border-t pt-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          Featured Product
                        </p>

                        <p className="text-sm text-gray-500">
                          Show this product in the homepage featured section.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleFeaturedChange(product)}
                        disabled={updatingFeaturedProduct === product.slug}
                        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
                          product.featured ? "bg-amber-600" : "bg-gray-300"
                        } ${
                          updatingFeaturedProduct === product.slug
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        }`}
                        aria-label={`Toggle featured status for ${product.name}`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                            product.featured ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {updatingFeaturedProduct === product.slug && (
                      <p className="mt-2 text-sm text-gray-500">
                        Updating featured status...
                      </p>
                    )}
                  </div>
                </div>

                {/* Edit Product */}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`/admin/products/${product.productId}`)
                    }
                    className="w-full rounded-xl border border-amber-800 px-4 py-3 font-semibold text-amber-800 transition hover:bg-amber-50"
                  >
                    Edit Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
