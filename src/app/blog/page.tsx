"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";
import { blogPosts as staticBlogPosts, blogCategories as staticCategories, type BlogPost } from "@/data/blogPosts";
import { apiUrl } from "@/lib/fetch-api";

function mapApiBlogPost(p: any): BlogPost {
  const text = p.excerpt || p.content || "";
  const wordsPerMin = 200;
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / wordsPerMin));

  return {
    id: p.id,
    title: p.title || "",
    excerpt: p.excerpt || "",
    category: p.category || "General",
    author: p.author || "VisionX Team",
    date: p.published_at
      ? new Date(p.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    image: p.image || undefined,
    readTime: `${readTime} min read`,
    slug: p.slug,
  };
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(staticBlogPosts);
  const [blogCategories, setBlogCategories] = useState<string[]>(staticCategories);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch(apiUrl("/api/blogs"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const posts: BlogPost[] = data.data.map(mapApiBlogPost);
          setBlogPosts(posts);
          const catSet = new Set(posts.map((p) => p.category));
          const cats = ["All", ...Array.from(catSet)];
          setBlogCategories(cats);
        }
      })
      .catch(() => {});
  }, []);

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Blog & News
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Stories, tips, and news from the VisionX community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#00A3FF] text-white"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
