"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}

export default function NeonGlow({ children, className = "", strong = false }: Props) {
  return (
    <div className={cn(strong ? "neon-glow-strong" : "neon-glow", className)}>
      {children}
    </div>
  );
}
