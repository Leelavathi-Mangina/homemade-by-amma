import API_BASE_URL from "./config";

export async function getProfile() {
  const response = await fetch(
    `${API_BASE_URL}/users/profile`,
    {
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Not authenticated");
  }

  const result = await response.json();

  return result.data;
}