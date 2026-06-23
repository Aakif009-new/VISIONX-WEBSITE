import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { apiUrl } from "@/lib/fetch-api";

interface BlogPost {
  id: string; title: string; slug: string; excerpt: string | null; content: string;
  category: string | null; author: string; image: string | null; status: string;
  published_at: string | null; created_at: string;
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(apiUrl(`/api/blogs/${slug}`), {
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found | VisionX" };
  return {
    title: `${post.title} | VisionX`,
    description: post.excerpt || post.title,
    openGraph: { title: post.title, description: post.excerpt || post.title },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-[#00A3FF] hover:underline">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            {post.category && (
              <span className="px-2 py-0.5 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-xs font-medium">{post.category}</span>
            )}
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.published_at ? new Date(post.published_at).toLocaleDateString() : new Date(post.created_at).toLocaleDateString()}</span>
            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">{post.title}</h1>

          {post.image && (
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {post.excerpt && <p className="text-gray-400 text-sm mb-6 italic">{post.excerpt}</p>}

          <div
            className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </GlassCard>
      </div>
    </section>
  );
}
