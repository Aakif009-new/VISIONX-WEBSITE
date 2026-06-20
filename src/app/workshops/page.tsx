"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import WorkshopCard from "@/components/WorkshopCard";
import type { Workshop } from "@/data/workshops";

function mapApiWorkshop(w: any): Workshop {
  return {
    id: w.id,
    title: w.title,
    date: w.event_date || "",
    time: w.event_time || "",
    location: w.venue || "",
    description: w.description || "",
    fullDescription: w.description || "",
    banner: w.banner_image || undefined,
    capacity: w.max_seats || 0,
    registeredCount: w.registrations?.length || 0,
    isRegistrationOpen: w.registration_open ?? true,
    category: w.category || "Workshop",
    googleFormUrl: w.google_form_url || undefined,
    price: w.price || undefined,
  };
}

export default function WorkshopsPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    fetch("/api/workshops")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setWorkshops(data.data.map(mapApiWorkshop));
        }
      })
      .catch(() => {});
  }, []);

  const categories = ["All", ...Array.from(new Set(workshops.map((w) => w.category)))];

  const filtered =
    filter === "All" ? workshops : workshops.filter((w) => w.category === filter);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-4 block">
              Workshops
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Workshops</span> &amp; Bootcamps
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Hands-on learning experiences designed to build practical skills and
              accelerate your journey as a student innovator.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-[#00A3FF] text-white shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((workshop, i) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 text-sm py-12">
              No workshops found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
