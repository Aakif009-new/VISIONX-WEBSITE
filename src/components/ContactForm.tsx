"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import type { ReactNode } from "react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const contactMethods: {
  label: string;
  value: string;
  href: string;
  render: () => ReactNode;
}[] = [
  {
    label: "Official Email",
    value: "visionx.official.org@gmail.com",
    href: "mailto:visionx.official.org@gmail.com",
    render: () => <Mail className="w-5 h-5 text-[#00A3FF]" />,
  },
  {
    label: "Instagram",
    value: "@visionx.official_",
    href: "https://www.instagram.com/visionx.official_?igsh=aDhhMTFwbzgxOHZ3&utm_source=ig_contact_invite",
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#00A3FF]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "VisionX Community",
    href: "https://www.linkedin.com/company/visionxcommunity/",
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#00A3FF]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },

];

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const mailtoLink = `mailto:visionx.official.org@gmail.com?subject=${encodeURIComponent(
        "Contact Form Submission"
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank");
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ScrollReveal>
        <GlassCard className="text-center py-16 px-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#00A3FF]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#00A3FF]" />
          </div>
          <h3 className="text-white text-2xl font-semibold mb-3">Message Sent!</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Thank you for reaching out! We&apos;ll get back to you as soon as possible.
          </p>
        </GlassCard>
      </ScrollReveal>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {contactMethods.map((method, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <a
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[#00A3FF]/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center group-hover:bg-[#00A3FF]/20 transition-all duration-300">
                {method.render()}
              </div>
              <div>
                <p className="text-gray-400 text-xs">{method.label}</p>
                <p className="text-white text-sm font-medium">{method.value}</p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <div className="lg:col-span-3">
        <ScrollReveal>
          <GlassCard>
            <h3 className="text-white text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}
