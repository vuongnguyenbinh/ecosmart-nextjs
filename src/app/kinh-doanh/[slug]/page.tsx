// Kinh doanh post detail - WordPress dynamic content
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getPostsByCategory,
} from "@/lib/wordpress-data-fetcher";
import { PostDetail } from "@/components/post-detail";

export async function generateStaticParams() {
  const { posts } = await getPostsByCategory("kinh-doanh", 100);
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function KinhDoanhPostPage({
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
    <PostDetail
      post={post}
      backLink="/kinh-doanh"
      backLabel="Quay lại Kinh Doanh"
    />
  );
}
