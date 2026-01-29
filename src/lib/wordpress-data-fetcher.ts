// WordPress data fetching functions
import { fetchGraphQL } from "./apollo-client";
import {
  GET_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_BY_CATEGORY,
  GET_PAGE_BY_SLUG,
  GET_SITE_SETTINGS,
} from "./wordpress-queries";
import type { WPPost, WPPage, SiteSettings } from "@/types/wordpress-types";

interface PostsResponse {
  posts: {
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
    nodes: WPPost[];
  };
}

export async function getPosts(
  first = 10,
  after?: string,
): Promise<{
  posts: WPPost[];
  hasNextPage: boolean;
  endCursor: string | null;
}> {
  const data = await fetchGraphQL<PostsResponse>(GET_POSTS, { first, after });
  return {
    posts: data.posts.nodes,
    hasNextPage: data.posts.pageInfo.hasNextPage,
    endCursor: data.posts.pageInfo.endCursor,
  };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await fetchGraphQL<{ post: WPPost | null }>(GET_POST_BY_SLUG, {
    slug,
  });
  return data.post;
}

export async function getPostsByCategory(
  categorySlug: string,
  first = 10,
  after?: string,
  search?: string,
): Promise<{
  posts: WPPost[];
  hasNextPage: boolean;
  endCursor: string | null;
}> {
  const data = await fetchGraphQL<PostsResponse>(GET_POSTS_BY_CATEGORY, {
    categorySlug,
    first,
    after,
    search: search || null,
  });
  return {
    posts: data.posts.nodes,
    hasNextPage: data.posts.pageInfo.hasNextPage,
    endCursor: data.posts.pageInfo.endCursor,
  };
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const data = await fetchGraphQL<{ page: WPPage | null }>(GET_PAGE_BY_SLUG, {
    slug,
  });
  return data.page;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchGraphQL<{ generalSettings: SiteSettings }>(
    GET_SITE_SETTINGS,
  );
  return data.generalSettings;
}
