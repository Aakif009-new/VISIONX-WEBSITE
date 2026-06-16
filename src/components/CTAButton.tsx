"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  children: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function CTAButton({ children, href, variant = "primary", className = "" }: Props) {
  const base =
    "relative inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-500 overflow-hidden group";

  const variants = {
    primary:
      "bg-[#00A3FF] text-white hover:shadow-[0_0_30px_rgba(0,163,255,0.4)] hover:scale-105",
    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-[#00A3FF]/50 hover:shadow-[0_0_20px_rgba(0,163,255,0.15)]",
    outline:
      "bg-transparent text-[#00A3FF] border border-[#00A3FF]/40 hover:bg-[#00A3FF]/10 hover:border-[#00A3FF] hover:shadow-[0_0_20px_rgba(0,163,255,0.2)]",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#00A3FF] to-[#3BB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </Link>
  );
}
