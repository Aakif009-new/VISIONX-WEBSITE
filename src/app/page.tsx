"use client";

import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ImpactCounter from "@/components/ImpactCounter";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";
import { features } from "@/data/features";
import { impactStats } from "@/data/impactStats";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Empowering Innovation at Every Step
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                From idea to launch, we provide the ecosystem students need to build
                successful startups.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3FF]/[0.03] via-transparent to-[#00A3FF]/[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
                Our Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                VisionX in Numbers
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Our growing community of innovators, founders, and changemakers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <ImpactCounter
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mb-8">
              Whether you have a startup idea or want to be part of the innovation
              ecosystem, VisionX is the place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href="/apply" variant="primary">
                Join VisionX
              </CTAButton>
              <CTAButton href="/incubate" variant="outline">
                Apply for Incubation
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
