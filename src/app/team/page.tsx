"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TeamCard from "@/components/TeamCard";
import {
  foundingCouncil as staticFoundingCouncil,
  ceo as staticCeo,
  teamLeads as staticTeamLeads,
  type TeamMember,
} from "@/data/team";
import { apiUrl } from "@/lib/fetch-api";

function mapApiTeamMember(m: any, index: number): TeamMember {
  return {
    name: m.name,
    role: m.role,
    description: m.bio || "",
    image: m.image_url || undefined,
    council: m.council || false,
  };
}

export default function TeamPage() {
  const [foundingCouncil, setFoundingCouncil] = useState<TeamMember[]>(staticFoundingCouncil);
  const [ceo, setCeo] = useState<TeamMember>(staticCeo);
  const [teamLeads, setTeamLeads] = useState<TeamMember[]>(staticTeamLeads);

  useEffect(() => {
    fetch(apiUrl("/api/team"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const all: TeamMember[] = data.data.map(mapApiTeamMember);
          const ceoMember = all.find(
            (m: TeamMember) => m.role?.toLowerCase().includes("ceo")
          );
          const councilMembers = all.filter(
            (m: TeamMember) => m.council && m.name !== ceoMember?.name
          );
          const foundingPair = councilMembers.slice(0, 2);
          if (foundingPair.length > 0) setFoundingCouncil(foundingPair);
          if (ceoMember) setCeo(ceoMember);
          const leads = all.filter(
            (m: TeamMember) => !m.council && m.name !== ceoMember?.name
          );
          if (leads.length > 0) setTeamLeads(leads);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Meet the <span className="gradient-text">VisionX</span> Team
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Passionate individuals dedicated to building the student innovation ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Founding Council
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                The leadership driving VisionX forward
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {foundingCouncil.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Chief Executive Officer
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Leading the vision and operations of VisionX
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-sm mx-auto">
            <TeamCard member={ceo} index={0} />
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3FF]/[0.02] via-transparent to-[#00A3FF]/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Team Leads
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                The dedicated leads managing our core domains
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamLeads.map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
