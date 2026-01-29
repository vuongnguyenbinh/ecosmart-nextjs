// Blog detail page - WordPress dynamic content
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/wordpress-data-fetcher";

export async function generateStaticParams() {
  const { posts } = await getPosts(100);
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <Link
        href="/blog"
        className="text-[var(--esg-gold)] hover:underline mb-8 inline-block"
      >
        ← Quay lại Blog
      </Link>

      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-sm opacity-50 mb-8 block">
          {new Date(post.date).toLocaleDateString("vi-VN")}
        </time>

        {post.featuredImage && (
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            className="w-full h-64 object-cover mb-8"
          />
        )}

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>
    </main>
  );
}
