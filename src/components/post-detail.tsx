// Reusable post detail component
import Link from "next/link";
import type { WPPost } from "@/types/wordpress-types";

interface PostDetailProps {
  post: WPPost;
  backLink: string;
  backLabel: string;
}

export function PostDetail({ post, backLink, backLabel }: PostDetailProps) {
  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <Link
        href={backLink}
        className="text-[var(--esg-gold)] hover:underline mb-8 inline-block"
      >
        ← {backLabel}
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
