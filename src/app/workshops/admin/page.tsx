"use client";

import { useState } from "react";
import { Plus, Edit3, Trash2, Users, Search, X, CheckCircle, XCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { workshops as initialWorkshops, type Workshop } from "@/data/workshops";
import { mockRegistrations } from "@/data/workshops";
import { cn } from "@/lib/utils";

export default function AdminDashboardPage() {
  const [workshopList, setWorkshopList] = useState<Workshop[]>(initialWorkshops);
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showParticipants, setShowParticipants] = useState<string | null>(null);
  const [participantSearch, setParticipantSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    fullDescription: "",
    capacity: 30,
    category: "Workshop",
  });

  const filteredWorkshops = workshopList.filter(
    (w) =>
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.category.toLowerCase().includes(search.toLowerCase())
  );

  const filteredParticipants = mockRegistrations.filter(
    (p) =>
      showParticipants === null || p.workshopId === showParticipants
  ).filter(
    (p) =>
      p.fullName.toLowerCase().includes(participantSearch.toLowerCase()) ||
      p.college.toLowerCase().includes(participantSearch.toLowerCase())
  );

  const resetForm = () => {
    setForm({ title: "", date: "", time: "", location: "", description: "", fullDescription: "", capacity: 30, category: "Workshop" });
    setEditingId(null);
  };

  const handleCreate = () => {
    const newWorkshop: Workshop = {
      id: `w${Date.now()}`,
      ...form,
      registeredCount: 0,
      isRegistrationOpen: true,
      banner: undefined,
    };
    setWorkshopList((prev) => [newWorkshop, ...prev]);
    setShowCreate(false);
    resetForm();
  };

  const handleEdit = (workshop: Workshop) => {
    setForm({
      title: workshop.title,
      date: workshop.date,
      time: workshop.time,
      location: workshop.location,
      description: workshop.description,
      fullDescription: workshop.fullDescription,
      capacity: workshop.capacity,
      category: workshop.category,
    });
    setEditingId(workshop.id);
  };

  const handleSaveEdit = () => {
    setWorkshopList((prev) =>
      prev.map((w) =>
        w.id === editingId
          ? { ...w, ...form }
          : w
      )
    );
    setEditingId(null);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this workshop?")) {
      setWorkshopList((prev) => prev.filter((w) => w.id !== id));
    }
  };

  const toggleRegistration = (id: string) => {
    setWorkshopList((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isRegistrationOpen: !w.isRegistrationOpen } : w
      )
    );
  };

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="text-[#00A3FF] text-sm font-medium uppercase tracking-widest mb-2 block">
              Admin Panel
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Workshop <span className="gradient-text">Management</span>
              </h1>
              <button
                onClick={() => {
                  resetForm();
                  setShowCreate(true);
                  setEditingId(null);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300"
              >
                <Plus size={16} />
                Create Workshop
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="relative mb-8 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search workshops..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300"
              />
            </div>
          </ScrollReveal>

          {showCreate && (
            <ScrollReveal>
              <GlassCard className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Create New Workshop</h3>
                  <button onClick={() => { setShowCreate(false); resetForm(); }} className="text-gray-400 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <input type="text" placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <input type="text" placeholder="Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300">
                    <option value="Workshop" className="bg-[#050816]">Workshop</option>
                    <option value="Bootcamp" className="bg-[#050816]">Bootcamp</option>
                  </select>
                  <input type="number" placeholder="Capacity" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <textarea placeholder="Short description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300 resize-none" rows={2} />
                  <textarea placeholder="Full description" value={form.fullDescription} onChange={(e) => setForm({ ...form, fullDescription: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300 resize-none" rows={3} />
                </div>
                <button onClick={handleCreate} disabled={!form.title || !form.date}
                  className="px-6 py-2.5 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  Create Workshop
                </button>
              </GlassCard>
            </ScrollReveal>
          )}

          {editingId && (
            <ScrollReveal>
              <GlassCard className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Edit Workshop</h3>
                  <button onClick={() => { setEditingId(null); resetForm(); }} className="text-gray-400 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <input type="text" placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <input type="text" placeholder="Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300">
                    <option value="Workshop" className="bg-[#050816]">Workshop</option>
                    <option value="Bootcamp" className="bg-[#050816]">Bootcamp</option>
                  </select>
                  <input type="number" placeholder="Capacity" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300" />
                  <textarea placeholder="Short description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300 resize-none" rows={2} />
                  <textarea placeholder="Full description" value={form.fullDescription} onChange={(e) => setForm({ ...form, fullDescription: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-[#00A3FF]/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300 resize-none" rows={3} />
                </div>
                <div className="flex gap-3">
                  <button onClick={handleSaveEdit}
                    className="px-6 py-2.5 rounded-full font-medium bg-[#00A3FF] text-white hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-all duration-300">
                    Save Changes
                  </button>
                  <button onClick={() => { setEditingId(null); resetForm(); }}
                    className="px-6 py-2.5 rounded-full font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    Cancel
                  </button>
                </div>
              </GlassCard>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.1}>
            <GlassCard>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#00A3FF]/10">
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Workshop</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium hidden md:table-cell">Date</th>
                      <th className="text-center py-3 px-3 text-gray-400 font-medium hidden sm:table-cell">Capacity</th>
                      <th className="text-center py-3 px-3 text-gray-400 font-medium">Status</th>
                      <th className="text-right py-3 px-3 text-gray-400 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWorkshops.map((workshop) => (
                      <tr key={workshop.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-3">
                          <p className="text-white font-medium">{workshop.title}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{workshop.category}</p>
                        </td>
                        <td className="py-4 px-3 text-gray-400 hidden md:table-cell">{workshop.date}</td>
                        <td className="py-4 px-3 text-center hidden sm:table-cell">
                          <span className="text-gray-400">{workshop.registeredCount}/{workshop.capacity}</span>
                        </td>
                        <td className="py-4 px-3 text-center">
                          <button
                            onClick={() => toggleRegistration(workshop.id)}
                            className={cn(
                              "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider transition-all duration-200",
                              workshop.isRegistrationOpen
                                ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                : "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                            )}
                          >
                            {workshop.isRegistrationOpen ? (
                              <><CheckCircle size={10} /> Open</>
                            ) : (
                              <><XCircle size={10} /> Closed</>
                            )}
                          </button>
                        </td>
                        <td className="py-4 px-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => setShowParticipants(workshop.id)}
                              className="p-2 rounded-lg text-gray-400 hover:text-[#00A3FF] hover:bg-[#00A3FF]/10 transition-all duration-200"
                              title="View Participants"
                            >
                              <Users size={16} />
                            </button>
                            <button
                              onClick={() => handleEdit(workshop)}
                              className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200"
                              title="Edit"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(workshop.id)}
                              className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredWorkshops.length === 0 && (
                  <p className="text-center text-gray-500 py-8">No workshops found.</p>
                )}
              </div>
            </GlassCard>
          </ScrollReveal>

          {showParticipants && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowParticipants(null)} />
              <ScrollReveal>
                <GlassCard className="relative w-full max-w-4xl max-h-[80vh] overflow-y-auto p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold text-lg">
                      Participants —{" "}
                      <span className="text-[#00A3FF]">
                        {workshopList.find((w) => w.id === showParticipants)?.title}
                      </span>
                    </h3>
                    <button onClick={() => setShowParticipants(null)} className="text-gray-400 hover:text-white transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="relative mb-4 max-w-sm">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      value={participantSearch}
                      onChange={(e) => setParticipantSearch(e.target.value)}
                      placeholder="Search by name or college..."
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-[#00A3FF]/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#00A3FF]/40 transition-all duration-300"
                    />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#00A3FF]/10">
                          <th className="text-left py-2 px-2 text-gray-400 font-medium">Name</th>
                          <th className="text-left py-2 px-2 text-gray-400 font-medium hidden sm:table-cell">Email</th>
                          <th className="text-left py-2 px-2 text-gray-400 font-medium hidden md:table-cell">College</th>
                          <th className="text-left py-2 px-2 text-gray-400 font-medium hidden lg:table-cell">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredParticipants.filter((p) => showParticipants === null || p.workshopId === showParticipants).map((p) => (
                          <tr key={p.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 px-2">
                              <p className="text-white font-medium">{p.fullName}</p>
                              <p className="text-gray-500 text-xs mt-0.5">{p.mobile}</p>
                            </td>
                            <td className="py-3 px-2 text-gray-400 hidden sm:table-cell">{p.email}</td>
                            <td className="py-3 px-2 text-gray-400 hidden md:table-cell">{p.college}</td>
                            <td className="py-3 px-2 text-gray-400 hidden lg:table-cell">{p.year}</td>
                          </tr>
                        ))}
                        {filteredParticipants.filter((p) => showParticipants === null || p.workshopId === showParticipants).length === 0 && (
                          <tr>
                            <td colSpan={4} className="text-center text-gray-500 py-8">No participants found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
