"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { login as loginApi } from "../../lib/api/auth";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const user = await loginApi(formData);

      login(user);

      alert("Login successful.");

      router.push("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-orange-50 px-6 py-20">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Login to continue shopping.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-amber-700"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-amber-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-amber-800 py-3 font-semibold text-white transition hover:bg-amber-900 disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-amber-700 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
