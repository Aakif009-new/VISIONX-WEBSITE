"use client";

import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import Timeline from "@/components/Timeline";
import { timelineEvents } from "@/data/timeline";
import { Lightbulb, Shield, Users, Target, Sparkles, Heart } from "lucide-react";

const values = [
  { title: "Innovation", description: "Pushing boundaries and embracing creative solutions.", icon: Lightbulb },
  { title: "Leadership", description: "Leading with vision, integrity, and purpose.", icon: Shield },
  { title: "Collaboration", description: "Building together through teamwork and partnership.", icon: Users },
  { title: "Excellence", description: "Striving for the highest standards in everything we do.", icon: Target },
  { title: "Integrity", description: "Acting with honesty, transparency, and accountability.", icon: Sparkles },
  { title: "Impact", description: "Creating meaningful change that lasts.", icon: Heart },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              VisionX was founded to create a platform where students can innovate,
              collaborate, and build impactful solutions. We believe every successful
              startup starts with a vision, and our goal is to provide students with the
              ecosystem needed to bring that vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3FF]/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <ScrollReveal>
            <GlassCard className="p-8 h-full">
              <h3 className="text-white text-2xl font-bold mb-4">
                <span className="text-[#00A3FF]">Mission</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To empower students through innovation, entrepreneurship, technology,
                mentorship, and startup incubation.
              </p>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <GlassCard className="p-8 h-full">
              <h3 className="text-white text-2xl font-bold mb-4">
                <span className="text-[#00A3FF]">Vision</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To become the leading student innovation ecosystem that nurtures future
                founders, creators, and changemakers.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What Drives Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <GlassCard hover className="group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00A3FF]/20 transition-all duration-500">
                    <value.icon className="w-6 h-6 text-[#00A3FF]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A3FF]/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                The VisionX Timeline
              </h2>
            </div>
          </ScrollReveal>
          <Timeline events={timelineEvents} />
        </div>
      </section>
    </>
  );
}
