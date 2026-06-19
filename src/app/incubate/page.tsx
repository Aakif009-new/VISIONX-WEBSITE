"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ApplicationForm from "@/components/ApplicationForm";

const fields = [
  { name: "fullName", label: "Full Name", type: "text" as const, placeholder: "Enter your full name", required: true },
  { name: "college", label: "College Name", type: "text" as const, placeholder: "Enter your college name", required: true },
  { name: "startupName", label: "Startup Name", type: "text" as const, placeholder: "Enter your startup name", required: true },
  { name: "problem", label: "Problem Being Solved", type: "textarea" as const, placeholder: "Describe the problem your startup is solving...", required: true },
  { name: "audience", label: "Target Audience", type: "text" as const, placeholder: "Who are your target customers?", required: true },
  {
    name: "stage",
    label: "Current Startup Stage",
    type: "select" as const,
    required: true,
    options: [
      "Idea Stage",
      "Validation Stage",
      "MVP Development",
      "Early Traction",
      "Growth Stage",
    ],
  },
  { name: "support", label: "Support Needed From VisionX", type: "textarea" as const, placeholder: "What kind of support are you looking for?", required: true },
];

export default function IncubatePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Startup Incubation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Apply for <span className="gradient-text">Incubation</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Have a startup idea? Apply for the VisionX Incubation Program and get the
              support you need to turn your vision into reality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ApplicationForm
            title="Incubation Application"
            description="Tell us about your startup and how we can help you grow."
            fields={fields}
            submitLabel="Apply For Incubation"
            emailSubject="Startup Incubation Application"
            apiEndpoint="/api/incubation/apply"
            getPayload={(data) => ({
              full_name: data.fullName,
              college_name: data.college,
              startup_name: data.startupName,
              problem_statement: data.problem,
              target_audience: data.audience,
              startup_stage: data.stage,
              support_needed: data.support,
            })}
          />
        </div>
      </section>
    </>
  );
}
