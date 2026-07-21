import API_BASE_URL from "./config";

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await response.json();

  return result.data;
}