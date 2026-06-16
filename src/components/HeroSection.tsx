"use client";

import ParticleBackground from "./ParticleBackground";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        <ScrollReveal delay={0.1}>
          <div className="mb-6 inline-block">
            <span className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.15em]">
              <span className="text-[#00A3FF]">VISION</span>
              <span className="text-white font-light">X</span>
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Empowering Student Innovators to{" "}
            <span className="gradient-text">Build the Future</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            VisionX is a student-led innovation ecosystem that helps students
            transform ideas into startups through incubation, mentorship,
            technology, events, and collaboration.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/apply" variant="primary">
              Join VisionX
            </CTAButton>
            <CTAButton href="/incubate" variant="outline">
              Apply for Incubation
            </CTAButton>
            <CTAButton href="/events" variant="secondary">
              Explore Events
            </CTAButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 animate-float">
            <div className="w-6 h-10 border-2 border-[#00A3FF]/30 rounded-full mx-auto flex justify-center">
              <div className="w-1.5 h-3 bg-[#00A3FF] rounded-full mt-2 animate-pulse-glow" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />
    </section>
  );
}
