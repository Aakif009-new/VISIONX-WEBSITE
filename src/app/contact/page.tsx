"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Have a question, idea, or want to collaborate? We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
