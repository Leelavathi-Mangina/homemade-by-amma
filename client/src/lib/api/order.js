import API_BASE_URL from "./config";

export async function placeOrder(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function getMyOrders() {
  const response = await fetch(
    `${API_BASE_URL}/orders/my-orders`,
    {
      credentials: "include",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function getOrderById(orderId) {
  const response = await fetch(
    `${API_BASE_URL}/orders/${orderId}`,
    {
      credentials: "include",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}