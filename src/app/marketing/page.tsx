// Marketing category - WordPress dynamic content
import { getPostsByCategory } from "@/lib/wordpress-data-fetcher";
import { CategoryPage } from "@/components/category-page";

export default async function MarketingPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const { posts } = await getPostsByCategory("marketing", 20, undefined, q);

  return (
    <CategoryPage
      title="Marketing"
      posts={posts}
      basePath="/marketing"
      searchQuery={q}
    />
  );
}
