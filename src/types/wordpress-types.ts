// WordPress GraphQL response types

export interface WPImage {
  sourceUrl: string;
  altText: string;
}

export interface WPCategory {
  slug: string;
  name: string;
}

export interface WPPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  featuredImage?: { node: WPImage };
  categories?: { nodes: WPCategory[] };
}

export interface WPPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage?: { node: WPImage };
}

export interface SiteSettings {
  title: string;
  description: string;
  url: string;
}
