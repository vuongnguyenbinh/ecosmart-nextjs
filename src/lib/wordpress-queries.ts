// GraphQL queries for WordPress Headless CMS

export const GET_POSTS = `
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage { node { sourceUrl altText } }
        categories { nodes { slug name } }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      excerpt
      date
      featuredImage { node { sourceUrl altText } }
      categories { nodes { slug name } }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = `
  query GetPostsByCategory($categorySlug: String!, $first: Int = 10, $after: String, $search: String) {
    posts(
      first: $first
      after: $after
      where: { categoryName: $categorySlug, search: $search }
    ) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage { node { sourceUrl altText } }
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = `
  query GetPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      slug
      content
      featuredImage { node { sourceUrl altText } }
    }
  }
`;

export const GET_SITE_SETTINGS = `
  query { generalSettings { title description url } }
`;
