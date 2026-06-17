"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

interface Props {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: Props) {
  if (member.isHiring) {
    return (
      <ScrollReveal delay={index * 0.1}>
        <GlassCard className="text-center h-full flex flex-col items-center justify-center min-h-[250px] border-dashed border-[#00A3FF]/20">
          <div className="w-16 h-16 rounded-full bg-[#00A3FF]/5 border-2 border-dashed border-[#00A3FF]/30 flex items-center justify-center mb-4">
            <Users className="w-7 h-7 text-[#00A3FF]/50" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-1">Hiring In Progress</h3>
          <p className="text-[#00A3FF] text-sm font-medium">{member.role}</p>
        </GlassCard>
      </ScrollReveal>
    );
  }

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard
        hover
        className={cn(
          "text-center h-full flex flex-col items-center",
          member.council ? "p-8" : "p-6"
        )}
      >
        {member.image ? (
          <div className={cn("relative mb-4", member.council ? "w-24 h-24" : "w-20 h-20")}>
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className={cn(
  "rounded-full object-cover w-full h-full border-2 border-[#00A3FF]/20",
  member.objectPosition || "object-center"
)}
            />
          </div>
        ) : (
          <div
            className={cn(
              "rounded-full bg-gradient-to-br from-[#00A3FF]/20 to-[#3BB8FF]/10 border-2 border-[#00A3FF]/20 flex items-center justify-center text-white font-bold mb-4",
              member.council ? "w-24 h-24 text-2xl" : "w-20 h-20 text-xl"
            )}
          >
            {initials}
          </div>
        )}
        <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
        <p className="text-[#00A3FF] text-sm font-medium mb-3">{member.role}</p>
        {member.description && (
          <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
        )}
      </GlassCard>
    </ScrollReveal>
  );
}
