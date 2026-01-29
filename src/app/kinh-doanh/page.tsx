// Kinh doanh category - WordPress dynamic content
import { getPostsByCategory } from "@/lib/wordpress-data-fetcher";
import { CategoryPage } from "@/components/category-page";

export default async function KinhDoanhPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const { posts } = await getPostsByCategory("kinh-doanh", 20, undefined, q);

  return (
    <CategoryPage
      title="Kinh Doanh"
      posts={posts}
      basePath="/kinh-doanh"
      searchQuery={q}
    />
  );
}
