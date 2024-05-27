// fetchFunctions.ts
export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export type Methods = "PUT" | "GET" | "POST" | "DELETE";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export async function fetchWithOptions(
  resource: string,
  options: FetchOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  method: Methods,
) {
  const response = await fetch(resource, {
    ...options,
    method,
  });

  if (response.ok) {
    return response.json();
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || "An error occurred");
  }
}
