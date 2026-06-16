"use client";

import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

interface Props {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, details, icon: Icon, index }: Props) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard hover className="group h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00A3FF]/20 transition-all duration-500">
            <Icon className="w-6 h-6 text-[#00A3FF]" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{description}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
              <Check size={14} className="text-[#00A3FF] mt-0.5 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </GlassCard>
    </ScrollReveal>
  );
}
