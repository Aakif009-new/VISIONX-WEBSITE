"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filtered =
    filter === "all"
      ? events
      : filter === "upcoming"
      ? events.filter((e) => !e.isPast)
      : events.filter((e) => e.isPast);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Events
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Join us for hackathons, workshops, bootcamps, and networking events
              designed to empower student innovators.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-center gap-3 mb-12">
              {(["all", "upcoming", "past"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === f
                      ? "bg-[#00A3FF] text-white shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {f === "all" ? "All Events" : f === "upcoming" ? "Upcoming" : "Past Events"}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 text-sm py-12">No events found.</p>
          )}
        </div>
      </section>
    </>
  );
}
