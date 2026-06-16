"use client";

import type { TimelineEvent } from "@/data/timeline";
import ScrollReveal from "./ScrollReveal";

interface Props {
  events: TimelineEvent[];
}

export default function Timeline({ events }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00A3FF]/40 via-[#00A3FF]/20 to-transparent" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <ScrollReveal
            key={index}
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div
              className={`relative flex flex-col md:flex-row items-start gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:flex md:w-1/2 justify-end">
                {index % 2 === 0 && (
                  <div className="text-right pr-8">
                    <span className="text-[#00A3FF] font-orbitron text-sm tracking-wider">
                      {event.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-1">{event.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A3FF] border-2 border-[#050816] shadow-[0_0_10px_rgba(0,163,255,0.5)]" />

              <div className="md:hidden pl-10">
                <span className="text-[#00A3FF] font-orbitron text-xs tracking-wider">
                  {event.year}
                </span>
                <h3 className="text-white font-semibold text-base mt-1">{event.title}</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="hidden md:flex md:w-1/2">
                {index % 2 !== 0 && (
                  <div className="pl-8">
                    <span className="text-[#00A3FF] font-orbitron text-sm tracking-wider">
                      {event.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-1">{event.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
