export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  posts?: Post[];
}

export interface Author {
  id?: string;
  name: string;
  email?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  coverImageUrl?: string | null;
  views: number;
  readingTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  category: Category;
  tags: Tag[];
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PostsResponse {
  success: boolean;
  data: Post[];
  pagination: Pagination;
}

export interface PostDetailResponse {
  success: boolean;
  data: Post;
}
