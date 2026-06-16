"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useInView } from "framer-motion";

interface Props {
  label: string;
  value: number;
  suffix: string;
  index: number;
}

export default function ImpactCounter({ label, value, suffix, index }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(16, duration / value);
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div ref={ref} className="text-center p-6">
        <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
          {count}
          {suffix}
        </div>
        <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
          {label}
        </p>
      </div>
    </ScrollReveal>
  );
}
