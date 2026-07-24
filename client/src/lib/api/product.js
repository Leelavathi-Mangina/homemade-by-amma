import API_BASE_URL from "./config";

export async function getProductBySlug(slug) {
  const response = await fetch(
    `${API_BASE_URL}/products/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await response.json();

  return result.data;
}