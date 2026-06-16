"use client";

import type { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function FeatureCard({ title, description, icon: Icon, index }: Props) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard hover className="group h-full">
        <div className="mb-4 w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center group-hover:bg-[#00A3FF]/20 transition-all duration-500">
          <Icon className="w-6 h-6 text-[#00A3FF]" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </GlassCard>
    </ScrollReveal>
  );
}
