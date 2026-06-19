"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ApplicationForm from "@/components/ApplicationForm";

const fields = [
  { name: "fullName", label: "Full Name", type: "text" as const, placeholder: "Enter your full name", required: true },
  { name: "college", label: "College Name", type: "text" as const, placeholder: "Enter your college name", required: true },
  { name: "department", label: "Department", type: "text" as const, placeholder: "e.g., Computer Science", required: true },
  {
    name: "year",
    label: "Year of Study",
    type: "select" as const,
    required: true,
    options: ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Graduated"],
  },
  {
    name: "role",
    label: "Role Interested In",
    type: "select" as const,
    required: true,
    options: [
      "Tech Team",
      "Media Team",
      "Startup Team",
      "Events Team",
      "Content Team",
      "Design Team",
      "General Member",
    ],
  },
  {
    name: "reason",
    label: "Why Do You Want To Join VisionX?",
    type: "textarea" as const,
    placeholder: "Tell us about your motivation...",
    required: true,
  },
  {
    name: "experience",
    label: "Relevant Experience",
    type: "textarea" as const,
    placeholder: "Any past experience in tech, entrepreneurship, or leadership...",
    required: false,
  },
];

export default function ApplyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Join VisionX
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Become Part of <span className="gradient-text">VisionX</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Ready to make an impact? Apply to join the VisionX team and be part of the
              student innovation ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ApplicationForm
            title="Application Form"
            description="Fill out the form below and our team will review your application."
            fields={fields}
            submitLabel="Apply Now"
            emailSubject="VisionX Membership Application"
            apiEndpoint="/api/join-visionx/apply"
            getPayload={(data) => ({
              full_name: data.fullName,
              college_name: data.college,
              department: data.department,
              year_of_study: data.year,
              role_interested: data.role,
              why_join: data.reason,
              relevant_experience: data.experience || null,
            })}
          />
        </div>
      </section>
    </>
  );
}
