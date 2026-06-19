import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/services", label: "Services" },
  { href: "/workshops", label: "Workshops" },
  { href: "/blog", label: "Blog" },
  { href: "/apply", label: "Join VisionX" },
  { href: "/incubate", label: "Apply for Incubation" },
];

const socialLinks: { href: string; label: string; render: () => ReactNode }[] = [
  {
    href: "mailto:visionx.official.org@gmail.com",
    label: "Email",
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/visionx.official_?igsh=aDhhMTFwbzgxOHZ3&utm_source=ig_contact_invite",
    label: "Instagram",
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/visionxcommunity/",
    label: "LinkedIn",
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },

];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#00A3FF]/10 bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00A3FF]/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="VisionX"
                width={120}
                height={36}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              See Beyond. Build the Future.
            </p>
            <p className="text-gray-500 text-xs">
              Empowering student innovators to build the future.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00A3FF] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-xl text-gray-400 hover:text-[#00A3FF] hover:border-[#00A3FF]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.render()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:visionx.official.org@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00A3FF] text-sm transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                visionx.official.org@gmail.com
              </a>
              <a
                href="https://www.instagram.com/visionx.official_?igsh=aDhhMTFwbzgxOHZ3&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00A3FF] text-sm transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @visionx.official_
              </a>
              <a
                href="https://www.linkedin.com/company/visionxcommunity/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00A3FF] text-sm transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] shrink-0">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                VisionX Community
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} VisionX. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-medium tracking-wider">
            SEE BEYOND. BUILD THE FUTURE.
          </p>
        </div>
      </div>
    </footer>
  );
}
