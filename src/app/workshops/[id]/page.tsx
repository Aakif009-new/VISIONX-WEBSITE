"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { useParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { workshops } from "@/data/workshops";
import { cn } from "@/lib/utils";

export default function WorkshopDetailPage() {
  const params = useParams();
  const workshop = workshops.find((w) => w.id === params.id);

  if (!workshop) notFound();

  const isFull = workshop.registeredCount >= workshop.capacity;
  const percentage = Math.round((workshop.registeredCount / workshop.capacity) * 100);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00A3FF] text-sm mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              Back to Workshops
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="text-[#00A3FF] text-xs font-medium uppercase tracking-widest mb-2 block">
                  {workshop.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {workshop.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} className="text-[#00A3FF]" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock size={16} className="text-[#00A3FF]" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="text-[#00A3FF]" />
                    {workshop.location}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <GlassCard className="mb-6">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    About This Workshop
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                    {workshop.fullDescription}
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal delay={0.2}>
                <GlassCard className="sticky top-28">
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Registration Status
                  </h3>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-gray-400">Capacity</span>
                      <span className="text-white font-medium">
                        {workshop.registeredCount}/{workshop.capacity}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          isFull
                            ? "bg-red-500"
                            : percentage > 80
                              ? "bg-yellow-500"
                              : "bg-[#00A3FF]"
                        )}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {isFull
                        ? "Workshop is full"
                        : `${workshop.capacity - workshop.registeredCount} spots remaining`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    {workshop.isRegistrationOpen && !isFull ? (
                      <span className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle size={14} />
                        Registration Open
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-400 text-sm">
                        <XCircle size={14} />
                        {isFull ? "Workshop Full" : "Registration Closed"}
                      </span>
                    )}
                  </div>

                  {workshop.isRegistrationOpen && !isFull && (
                    workshop.googleFormUrl ? (
                      <a
                        href={workshop.googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
                      >
                        Register via Google Form
                      </a>
                    ) : (
                      <Link
                        href={`/workshops/${workshop.id}/register`}
                        className="block w-full text-center px-6 py-3 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
                      >
                        Register Now
                      </Link>
                    )
                  )}
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
