"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useAuth } from "../../../../context/AuthContext";
import {
  getProducts,
  updateProduct,
} from "../../../../lib/api/products";

export default function AdminEditProductPage() {
  const router = useRouter();
  const params = useParams();

  const { user, loading } = useAuth();

  const [product, setProduct] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    shortDescription: "",
    description: "",
    ingredients: "",
    shelfLife: "",
    madeToOrder: true,
    price: "",
    unit: "kg",
    approximatePiecesPerKg: "",
    minOrderQuantity: "",
    estimatedDeliveryDays: "",
    customizable: false,
    featured: false,
  });

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

    async function fetchProduct() {
      try {
        const products = await getProducts();

        const foundProduct = products.find(
          (item) => item.productId === params.productId
        );

        if (!foundProduct) {
          throw new Error("Product not found");
        }

        setProduct(foundProduct);

        setFormData({
          name: foundProduct.name || "",
          slug: foundProduct.slug || "",
          shortDescription:
            foundProduct.shortDescription || "",
          description: foundProduct.description || "",
          ingredients: Array.isArray(foundProduct.ingredients)
            ? foundProduct.ingredients.join(", ")
            : "",
          shelfLife: foundProduct.shelfLife || "",
          madeToOrder: foundProduct.madeToOrder ?? true,
          price: foundProduct.price ?? "",
          unit: foundProduct.unit || "kg",
          approximatePiecesPerKg:
            foundProduct.approximatePiecesPerKg ?? "",
          minOrderQuantity:
            foundProduct.minOrderQuantity ?? "",
          estimatedDeliveryDays:
            foundProduct.estimatedDeliveryDays ?? "",
          customizable:
            foundProduct.customizable ?? false,
          featured:
            foundProduct.featured ?? false,
        });
      } catch (error) {
        alert(error.message);
        router.push("/admin/products");
      } finally {
        setPageLoading(false);
      }
    }

    if (params.productId) {
      fetchProduct();
    }
  }, [loading, user, router, params.productId]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSaving(true);

      const updatedProduct = await updateProduct(
        params.productId,
        {
          name: formData.name,
          slug: formData.slug,
          shortDescription: formData.shortDescription,
          description: formData.description,
          ingredients: formData.ingredients
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
          shelfLife: formData.shelfLife,
          madeToOrder: formData.madeToOrder,
          price: Number(formData.price),
          unit: formData.unit,
          approximatePiecesPerKg:
            formData.approximatePiecesPerKg
              ? Number(formData.approximatePiecesPerKg)
              : undefined,
          minOrderQuantity:
            Number(formData.minOrderQuantity),
          estimatedDeliveryDays:
            Number(formData.estimatedDeliveryDays),
          customizable: formData.customizable,
          featured: formData.featured,
        }
      );

      setProduct(updatedProduct);

      alert("Product updated successfully");

      router.push("/admin/products");
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading || pageLoading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-gray-600">
            Loading product...
          </p>
        </div>
      </main>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-gray-600">
            Product not found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Edit Product
          </h1>

          <p className="mt-3 text-gray-600">
            Update product information for{" "}
            <span className="font-semibold">
              {product.name}
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-8"
        >

          {/* Basic Information */}
          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="text-2xl font-bold text-gray-900">
              Basic Information
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Slug
                </label>

                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

            </div>

            <div className="mt-6">
              <label className="mb-2 block font-semibold">
                Short Description
              </label>

              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block font-semibold">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block font-semibold">
                Ingredients
              </label>

              <input
                type="text"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Besan, Pure Ghee, Sugar, Cardamom"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />

              <p className="mt-2 text-sm text-gray-500">
                Separate ingredients using commas.
              </p>
            </div>

            <div className="mt-6">
              <label className="mb-2 block font-semibold">
                Shelf Life
              </label>

              <input
                type="text"
                name="shelfLife"
                value={formData.shelfLife}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </div>

          </div>

          {/* Pricing & Order Information */}
          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="text-2xl font-bold text-gray-900">
              Pricing & Order Information
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  min="1"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Unit
                </label>

                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Approximate Pieces per Kg
                </label>

                <input
                  type="number"
                  name="approximatePiecesPerKg"
                  min="1"
                  value={formData.approximatePiecesPerKg}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Minimum Order Quantity
                </label>

                <input
                  type="number"
                  name="minOrderQuantity"
                  min="1"
                  value={formData.minOrderQuantity}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Estimated Delivery Days
                </label>

                <input
                  type="number"
                  name="estimatedDeliveryDays"
                  min="1"
                  value={formData.estimatedDeliveryDays}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
                />
              </div>

            </div>

          </div>

          {/* Product Options */}
          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="text-2xl font-bold text-gray-900">
              Product Options
            </h2>

            <div className="mt-6 space-y-5">

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="madeToOrder"
                  checked={formData.madeToOrder}
                  onChange={handleChange}
                  className="h-5 w-5"
                />

                <span>
                  <span className="font-semibold">
                    Made to Order
                  </span>

                  <span className="block text-sm text-gray-500">
                    Product is prepared after the order is placed.
                  </span>
                </span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="customizable"
                  checked={formData.customizable}
                  onChange={handleChange}
                  className="h-5 w-5"
                />

                <span>
                  <span className="font-semibold">
                    Customizable
                  </span>

                  <span className="block text-sm text-gray-500">
                    Customers can provide customization instructions.
                  </span>
                </span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="h-5 w-5"
                />

                <span>
                  <span className="font-semibold">
                    Featured Product
                  </span>

                  <span className="block text-sm text-gray-500">
                    Show this product in the featured products section.
                  </span>
                </span>
              </label>

            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => router.push("/admin/products")}
              disabled={saving}
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving Changes..." : "Save Changes"}
            </button>

          </div>

        </form>

      </div>
    </main>
  );
}