// Reusable category list component for WordPress categories
import Link from "next/link";
import { SearchForm } from "./search-form";
import type { WPPost } from "@/types/wordpress-types";

interface CategoryPageProps {
  title: string;
  posts: WPPost[];
  basePath: string;
  searchQuery?: string;
}

export function CategoryPage({
  title,
  posts,
  basePath,
  searchQuery,
}: CategoryPageProps) {
  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      <SearchForm
        placeholder={`Tìm trong ${title}...`}
        defaultValue={searchQuery}
      />

      <div className="grid gap-6 mt-8">
        {posts.length === 0 ? (
          <p className="opacity-70">Không tìm thấy bài viết nào.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`${basePath}/${post.slug}`}
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
