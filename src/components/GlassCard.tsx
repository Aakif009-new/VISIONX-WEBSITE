"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = false }: Props) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500",
        hover && "glass-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
