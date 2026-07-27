"use client";

import { createContext, useContext, useEffect, useState } from "react";

import {
  getCart,
  addToCart as addToCartApi,
  updateCart as updateCartApi,
  removeFromCart as removeFromCartApi,
  clearCart as clearCartApi,
} from "../lib/api/cart";

import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();

  const [cart, setCart] = useState(null);

  const [loading, setLoading] = useState(false);

  async function loadCart() {
    if (!user) {
      setCart(null);
      return;
    }

    setLoading(true);

    try {
      const data = await getCart();
      setCart(data);
    } catch (error) {
      setCart(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCart();
  }, [user]);

  async function addToCart(productId, quantity = 1) {
    const updatedCart = await addToCartApi(productId, quantity);
    setCart(updatedCart);
  }

  async function updateCartItem(productId, quantity) {
    const updatedCart = await updateCartApi(productId, quantity);

    setCart(updatedCart);
  }

  async function removeFromCart(productId) {
    const updatedCart = await removeFromCartApi(productId);
    setCart(updatedCart);
  }

  async function clearCart() {
    const updatedCart = await clearCartApi();
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        loadCart,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
