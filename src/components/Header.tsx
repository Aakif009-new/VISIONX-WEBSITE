"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/workshops", label: "Workshops" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-[#00A3FF]/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-orbitron text-xl sm:text-2xl font-black tracking-[0.15em]">
            <span className="text-[#00A3FF]">VISION</span>
            <span className="text-white font-light">X</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                pathname === link.href
                  ? "text-[#00A3FF]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00A3FF] rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-5 py-2 rounded-full text-sm font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Join VisionX
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#050816]/95 backdrop-blur-2xl" />
            <div className="relative flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <span className="font-orbitron text-xl font-black tracking-[0.15em]">
                  <span className="text-[#00A3FF]">VISION</span>
                  <span className="text-white font-light">X</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-[#00A3FF] bg-[#00A3FF]/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/apply"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300"
                >
                  Join VisionX
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
