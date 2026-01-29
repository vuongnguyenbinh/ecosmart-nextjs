// Pháp lý category - WordPress dynamic content
import { getPostsByCategory } from "@/lib/wordpress-data-fetcher";
import { CategoryPage } from "@/components/category-page";

export default async function PhapLyPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const { posts } = await getPostsByCategory("phap-ly", 20, undefined, q);

  return (
    <CategoryPage
      title="Pháp Lý"
      posts={posts}
      basePath="/phap-ly"
      searchQuery={q}
    />
  );
}
