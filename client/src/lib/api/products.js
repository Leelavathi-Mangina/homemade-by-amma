import API_BASE_URL from "./config";

export async function getProducts(category = "", search = "") {
  const params = new URLSearchParams();

  if (category) {
    params.append("category", category);
  }

  if (search) {
    params.append("search", search);
  }

  const url = `${API_BASE_URL}/products${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
}

export async function getFeaturedProducts() {
  const response = await fetch(
    `${API_BASE_URL}/products/featured`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured products");
  }

  const result = await response.json();

  return result.data;
}

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