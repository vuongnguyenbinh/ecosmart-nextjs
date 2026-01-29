// GraphQL queries for WordPress Headless CMS

export const GET_POSTS = `
  query GetPosts($first: Int = 10) {
    posts(first: $first) {
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
