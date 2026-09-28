import { Category, Post, PostsResponse, Tag } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

async function fetcher<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${path}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new ApiError(data.message || `Request failed with status ${res.status}`, res.status);
    }

    return data as T;
  } catch (err: unknown) {
    if (err instanceof ApiError) {
      throw err;
    }
    const message = err instanceof Error ? err.message : "Network error or server unreachable";
    throw new ApiError(message, 500);
  }
}

export const readerApi = {
  posts: {
    getPublished: async (params: { page?: number; limit?: number; tag?: string } = {}) => {
      const searchParams = new URLSearchParams();
      if (params.page) searchParams.append("page", params.page.toString());
      if (params.limit) searchParams.append("limit", params.limit.toString());
      if (params.tag) searchParams.append("tag", params.tag);

      const qs = searchParams.toString() ? `?${searchParams.toString()}` : "";
      return fetcher<PostsResponse>(`/api/posts${qs}`);
    },

    getBySlug: async (slug: string) => {
      const res = await fetcher<{ success: boolean; data: Post }>(`/api/posts/${encodeURIComponent(slug)}`);
      return res.data;
    },
  },

  categories: {
    getAll: async () => {
      const res = await fetcher<{ success: boolean; count: number; categories: Category[] }>("/api/categories");
      return res.categories || [];
    },

    getBySlug: async (slug: string) => {
      const res = await fetcher<{ success: boolean; category: Category }>(`/api/categories/${encodeURIComponent(slug)}`);
      return res.category;
    },
  },

  tags: {
    getAll: async () => {
      const res = await fetcher<{ success: boolean; count: number; data: Tag[] }>("/api/tags");
      return res.data || [];
    },
  },
};
