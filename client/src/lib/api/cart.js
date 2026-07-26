import API_BASE_URL from "./config";

export async function getCart() {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    credentials: "include",
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function addToCart(productId, quantity = 1) {
  const response = await fetch(`${API_BASE_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function updateCart(productId, quantity) {
  const response = await fetch(`${API_BASE_URL}/cart/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function removeFromCart(productId) {
  const response = await fetch(
    `${API_BASE_URL}/cart/remove/${productId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function clearCart() {
  const response = await fetch(`${API_BASE_URL}/cart/clear`, {
    method: "DELETE",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}