"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Comprehensive support for student entrepreneurs at every stage of their journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              details={service.details}
              icon={service.icon}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
