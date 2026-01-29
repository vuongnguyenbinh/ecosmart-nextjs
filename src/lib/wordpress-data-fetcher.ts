// WordPress data fetching functions
import { fetchGraphQL } from "./apollo-client";
import {
  GET_POSTS,
  GET_PAGE_BY_SLUG,
  GET_SITE_SETTINGS,
} from "./wordpress-queries";
import type { WPPost, WPPage, SiteSettings } from "@/types/wordpress-types";

export async function getPosts(first = 10): Promise<WPPost[]> {
  const data = await fetchGraphQL<{ posts: { nodes: WPPost[] } }>(GET_POSTS, {
    first,
  });
  return data.posts.nodes;
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
