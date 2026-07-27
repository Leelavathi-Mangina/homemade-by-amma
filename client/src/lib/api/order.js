import API_BASE_URL from "./config";

export async function placeOrder(orderData) {
  const response = await fetch(
    `${API_BASE_URL}/orders`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}