// Blog list page - WordPress dynamic content
import Link from "next/link";
import { getPosts } from "@/lib/wordpress-data-fetcher";
import { SearchForm } from "@/components/search-form";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const { posts } = await getPosts(20);

  // Client-side filtering for search (server-side search available via category pages)
  const filteredPosts = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(q.toLowerCase()),
      )
    : posts;

  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <SearchForm placeholder="Tìm bài viết..." defaultValue={q} />

      <div className="grid gap-6 mt-8">
        {filteredPosts.length === 0 ? (
          <p className="opacity-70">Không tìm thấy bài viết nào.</p>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="p-6 border border-[var(--esg-gold)]/20 hover:border-[var(--esg-gold)] transition"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div
                className="opacity-70 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
