"use client";

import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import type { Workshop } from "@/data/workshops";
import { cn } from "@/lib/utils";

interface Props {
  workshop: Workshop;
  index: number;
}

export default function WorkshopCard({ workshop, index }: Props) {
  const isFull = workshop.registeredCount >= workshop.capacity;
  const spotsLeft = workshop.capacity - workshop.registeredCount;

  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard hover className="group h-full flex flex-col">
        <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#00A3FF]/10 to-[#3BB8FF]/5 border border-[#00A3FF]/10 mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-center p-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-[#00A3FF]/15 text-[#00A3FF] uppercase tracking-wider">
              {workshop.category}
            </span>
            <div className="font-orbitron text-[#00A3FF]/40 text-sm tracking-widest mt-3">
              {workshop.title.slice(0, 25)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider",
                isFull
                  ? "bg-red-500/20 text-red-400"
                  : workshop.isRegistrationOpen
                    ? "bg-green-500/20 text-green-400"
                    : "bg-gray-500/20 text-gray-400"
              )}
            >
              {isFull ? "Full" : workshop.isRegistrationOpen ? "Open" : "Closed"}
            </span>
            {workshop.price && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#00A3FF]/15 text-[#00A3FF]">
                {workshop.price}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 text-gray-500 text-xs">
            <Users size={12} />
            {workshop.registeredCount}/{workshop.capacity}
          </span>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#00A3FF] transition-colors duration-300">
          {workshop.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 whitespace-pre-line line-clamp-3">
          {workshop.description}
        </p>

        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Calendar size={14} className="text-[#00A3FF]" />
            {workshop.date}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Clock size={14} className="text-[#00A3FF]" />
            {workshop.time}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <MapPin size={14} className="text-[#00A3FF]" />
            {workshop.location}
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/workshops/${workshop.id}`}
            className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
          {workshop.isRegistrationOpen && !isFull && (
            workshop.googleFormUrl ? (
              <a
                href={workshop.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
              >
                Register <ExternalLink size={14} />
              </a>
            ) : (
              <Link
                href={`/workshops/${workshop.id}/register`}
                className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
              >
                {spotsLeft <= 5 ? `Only ${spotsLeft} left!` : "Register"}
              </Link>
            )
          )}
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}
