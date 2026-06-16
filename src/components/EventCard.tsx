"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import type { Event } from "@/data/events";

interface Props {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: Props) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard hover className="h-full flex flex-col">
        <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#00A3FF]/10 to-[#3BB8FF]/5 border border-[#00A3FF]/10 mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-center p-4">
            <div className="font-orbitron text-[#00A3FF] text-lg font-bold tracking-wider">
              {event.isPast ? "PAST EVENT" : "UPCOMING"}
            </div>
            <div className="text-white/40 text-xs mt-1">{event.title.slice(0, 30)}</div>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-2">
          {event.isPast ? (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-500/20 text-gray-400 uppercase tracking-wider">
              Past
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#00A3FF]/20 text-[#00A3FF] uppercase tracking-wider animate-pulse-glow">
              Upcoming
            </span>
          )}
        </div>

        <h3 className="text-white font-semibold text-lg mb-3">{event.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {event.description}
        </p>

        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Calendar size={14} className="text-[#00A3FF]" />
            {event.date}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Clock size={14} className="text-[#00A3FF]" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <MapPin size={14} className="text-[#00A3FF]" />
            {event.location}
          </div>
        </div>

        {!event.isPast && (
          <Link
            href="/workshops"
            className="w-full text-center px-5 py-2.5 rounded-full text-sm font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
          >
            Register Now
          </Link>
        )}
      </GlassCard>
    </ScrollReveal>
  );
}
