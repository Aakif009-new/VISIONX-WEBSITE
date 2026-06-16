"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface Props {
  title: string;
  description: string;
  fields: Field[];
  submitLabel: string;
  emailSubject: string;
}

export default function ApplicationForm({
  title,
  description,
  fields,
  submitLabel,
  emailSubject,
}: Props) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const messageBody = fields
      .map((f) => `${f.label}: ${formData[f.name] || ""}`)
      .join("\n");

    const mailtoLink = `mailto:visionx@email.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(messageBody)}`;

    await new Promise((r) => setTimeout(r, 800));

    window.open(mailtoLink, "_blank");
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
          <h3 className="text-white text-2xl font-semibold mb-3">Application Submitted!</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Thank you for your interest! We&apos;ve received your application and will get back to you
            shortly at your provided email address.
          </p>
        </GlassCard>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <GlassCard className="max-w-2xl mx-auto">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-8">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                {field.label}
                {field.required && <span className="text-[#00A3FF] ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300 resize-none"
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.required}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300"
                >
                  <option value="" disabled className="bg-[#050816]">
                    Select an option
                  </option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#050816]">
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              "Submitting..."
            ) : (
              <>
                {submitLabel}
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      </GlassCard>
    </ScrollReveal>
  );
}
