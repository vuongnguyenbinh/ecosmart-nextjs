// Kế toán category - WordPress dynamic content
import { getPostsByCategory } from "@/lib/wordpress-data-fetcher";
import { CategoryPage } from "@/components/category-page";

export default async function KeToanPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const { posts } = await getPostsByCategory("ke-toan", 20, undefined, q);

  return (
    <CategoryPage
      title="Kế Toán"
      posts={posts}
      basePath="/ke-toan"
      searchQuery={q}
    />
  );
}
