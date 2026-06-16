"use client";

import { Calendar, Clock } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";
import type { BlogPost } from "@/data/blogPosts";

interface Props {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: Props) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard hover className="group h-full flex flex-col">
        <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#00A3FF]/8 to-[#3BB8FF]/3 border border-[#00A3FF]/10 mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-center p-4">
            <div className="text-[#00A3FF]/50 text-xs font-medium uppercase tracking-wider mb-2">
              {post.category}
            </div>
            <div className="text-white/20 text-lg font-orbitron tracking-widest">
              VX
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
          <span className="px-2 py-0.5 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-[10px] font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#00A3FF] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">By {post.author}</span>
          <CTAButton href={`/blog/${post.id}`} variant="outline" className="text-xs px-4 py-1.5">
            Read More
          </CTAButton>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}
