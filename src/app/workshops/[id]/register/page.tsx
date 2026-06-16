"use client";

import { useState, type FormEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { workshops } from "@/data/workshops";

export default function RegisterPage() {
  const params = useParams();
  const workshop = workshops.find((w) => w.id === params.id);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
    year: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!workshop) {
    return (
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-gray-400">Workshop not found.</p>
          <Link href="/workshops" className="text-[#00A3FF] text-sm mt-4 inline-block">
            Back to Workshops
          </Link>
        </div>
      </section>
    );
  }

  if (!workshop.isRegistrationOpen || workshop.registeredCount >= workshop.capacity) {
    return (
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-lg mx-auto text-center">
          <GlassCard className="py-12">
            <h2 className="text-white text-xl font-semibold mb-3">
              Registration Unavailable
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              {workshop.registeredCount >= workshop.capacity
                ? "This workshop is currently full."
                : "Registrations for this workshop are currently closed."}
            </p>
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 text-[#00A3FF] text-sm hover:underline"
            >
              <ArrowLeft size={16} />
              Browse Other Workshops
            </Link>
          </GlassCard>
        </div>
      </section>
    );
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Enter a valid email";
    if (!formData.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^[\d\s+()-]{10,15}$/.test(formData.mobile))
      errs.mobile = "Enter a valid mobile number";
    if (!formData.college.trim()) errs.college = "College name is required";
    if (!formData.department.trim()) errs.department = "Department is required";
    if (!formData.year) errs.year = "Year of study is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <GlassCard className="text-center py-16 px-8">
              <div className="w-16 h-16 rounded-full bg-[#00A3FF]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#00A3FF]" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Registration Successful!
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                Thank you for registering for <span className="text-white font-medium">{workshop.title}</span>.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Our team will contact you with further details at{" "}
                <span className="text-[#00A3FF]">{formData.email}</span>.
              </p>
              <Link
                href="/workshops"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300"
              >
                <ArrowLeft size={16} />
                Browse More Workshops
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <Link
            href={`/workshops/${workshop.id}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00A3FF] text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Workshop Details
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard>
            <h3 className="text-white text-2xl font-semibold mb-2">Register for Workshop</h3>
            <p className="text-gray-400 text-sm mb-1">{workshop.title}</p>
            <p className="text-gray-500 text-xs mb-8">
              {workshop.date} &middot; {workshop.time} &middot; {workshop.location}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Full Name <span className="text-[#00A3FF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.fullName
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-[#00A3FF]/10 focus:border-[#00A3FF]/40 focus:ring-[#00A3FF]/20"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email Address <span className="text-[#00A3FF]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@college.edu"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-[#00A3FF]/10 focus:border-[#00A3FF]/40 focus:ring-[#00A3FF]/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Mobile Number <span className="text-[#00A3FF]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.mobile
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-[#00A3FF]/10 focus:border-[#00A3FF]/40 focus:ring-[#00A3FF]/20"
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    College Name <span className="text-[#00A3FF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => handleChange("college", e.target.value)}
                    placeholder="Enter your college name"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.college
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-[#00A3FF]/10 focus:border-[#00A3FF]/40 focus:ring-[#00A3FF]/20"
                    }`}
                  />
                  {errors.college && (
                    <p className="text-red-400 text-xs mt-1">{errors.college}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Department <span className="text-[#00A3FF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => handleChange("department", e.target.value)}
                    placeholder="e.g., Computer Science"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.department
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-[#00A3FF]/10 focus:border-[#00A3FF]/40 focus:ring-[#00A3FF]/20"
                    }`}
                  />
                  {errors.department && (
                    <p className="text-red-400 text-xs mt-1">{errors.department}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Year of Study <span className="text-[#00A3FF]">*</span>
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => handleChange("year", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.year
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        : "border-[#00A3FF]/10 focus:border-[#00A3FF]/40 focus:ring-[#00A3FF]/20"
                    }`}
                  >
                    <option value="" className="bg-[#050816]">
                      Select year
                    </option>
                    {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Graduated"].map(
                      (y) => (
                        <option key={y} value={y} className="bg-[#050816]">
                          {y}
                        </option>
                      )
                    )}
                  </select>
                  {errors.year && (
                    <p className="text-red-400 text-xs mt-1">{errors.year}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Workshop / Event Name
                </label>
                <input
                  type="text"
                  value={workshop.title}
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-gray-400 text-sm cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Additional Notes <span className="text-gray-500">(Optional)</span>
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Any questions or special requirements?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 focus:ring-1 focus:ring-[#00A3FF]/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
              >
                Register Now
                <Send size={16} />
              </button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
