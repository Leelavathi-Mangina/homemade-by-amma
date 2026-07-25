"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../../lib/api/auth";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      alert("Account created successfully.");

      router.push("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-orange-50 px-6 py-20">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-600">Join Homemade by Amma</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Full Name</label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-amber-700"
            />
          </div>

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
            <label className="mb-2 block font-medium">Phone Number</label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
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

          <div>
            <label className="mb-2 block font-medium">Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-amber-700"
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-amber-800 py-3 font-semibold text-white transition hover:bg-amber-900 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </section>
  );
}
