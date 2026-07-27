"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import { placeOrder } from "../../lib/api/order";

export default function CheckoutPage() {
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const { cart, loading: cartLoading, loadCart } = useCart();

  const [placingOrder, setPlacingOrder] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    houseNo: "",
    street: "",
    villageOrCity: "",
    district: "",
    state: "",
    pincode: "",
    landmark: "",
    deliveryDate: "",
    specialInstructions: "",
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [authLoading, user, router]);

  useEffect(() => {
    if (!cartLoading && (!cart || cart.items.length === 0)) {
      router.push("/cart");
    }
  }, [cartLoading, cart, router]);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.name || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handlePlaceOrder() {
    try {
      setPlacingOrder(true);

      const orderData = {
        deliveryAddress: {
          fullName: formData.fullName,
          houseNo: formData.houseNo,
          street: formData.street,
          villageOrCity: formData.villageOrCity,
          district: formData.district,
          state: formData.state,
          pincode: formData.pincode,
          landmark: formData.landmark,
        },
        phone: formData.phone,
        orderNotes: formData.specialInstructions,
        preferredDeliveryDate: formData.deliveryDate,
      };

      const order = await placeOrder(orderData);

      await loadCart();

      alert(`Order placed successfully!\nOrder ID: ${order.orderId}`);

      router.push("/orders");
    } catch (error) {
      alert(error.message);
    } finally {
      setPlacingOrder(false);
    }
  }

  if (authLoading || cartLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-semibold">Loading Checkout...</h1>
        </div>
      </section>
    );
  }

  if (!user || !cart) {
    return null;
  }

  const total = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-4xl font-bold">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">Delivery Details</h2>

              <div className="grid gap-5">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="rounded-xl border p-3"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-xl border p-3"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="houseNo"
                    value={formData.houseNo}
                    onChange={handleChange}
                    placeholder="House No."
                    className="rounded-xl border p-3"
                  />

                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street"
                    className="rounded-xl border p-3"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="villageOrCity"
                    value={formData.villageOrCity}
                    onChange={handleChange}
                    placeholder="Village / City"
                    className="rounded-xl border p-3"
                  />

                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="District"
                    className="rounded-xl border p-3"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="rounded-xl border p-3"
                  />

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="rounded-xl border p-3"
                  />
                </div>

                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Landmark (Optional)"
                  className="rounded-xl border p-3"
                />

                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="rounded-xl border p-3"
                />

                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder="Special Instructions (Optional)"
                  rows={4}
                  className="rounded-xl border p-3"
                />
              </div>
            </div>
          </div>

          <div className="h-fit rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="mt-6 space-y-4">
              {cart.items.map((item) => (
                <div key={item.product._id} className="flex justify-between">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>

                  <span>₹{item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placingOrder}
              className="mt-8 w-full rounded-xl bg-amber-800 py-3 font-semibold text-white transition hover:bg-amber-900 disabled:opacity-60"
            >
              {placingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
