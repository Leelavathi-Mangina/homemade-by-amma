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

export async function updateOrderStatus(orderId, status) {
  const response = await fetch(
    `${API_BASE_URL}/admin/orders/${orderId}/status`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function updatePaymentStatus(
  orderId,
  paymentStatus
) {
  const response = await fetch(
    `${API_BASE_URL}/admin/orders/${orderId}/payment-status`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentStatus,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}