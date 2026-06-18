"use client";

import { useState } from "react";
import { useAdminWorkshops, useCreateWorkshop, useUpdateWorkshop, useDeleteWorkshop } from "@/lib/api";
import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

interface Workshop {
  id: string;
  title: string; description: string; venue: string; event_date: string; event_time: string;
  banner_image: string | null; registration_open: boolean; max_seats: number | null;
}

export default function AdminWorkshopsPage() {
  const { data, isLoading } = useAdminWorkshops();
  const create = useCreateWorkshop();
  const update = useUpdateWorkshop();
  const remove = useDeleteWorkshop();
  const [editing, setEditing] = useState<Workshop | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "", description: "", venue: "", event_date: "", event_time: "",
    banner_image: "", registration_open: true, max_seats: "",
    google_form_url: "", price: "",
  });

  const workshops = (data?.data || []) as Workshop[];
  const resetForm = () => {
    setForm({ title: "", description: "", venue: "", event_date: "", event_time: "", banner_image: "", registration_open: true, max_seats: "", google_form_url: "", price: "" });
    setEditing(null); setShowForm(false);
  };

  const openEdit = (w: Workshop) => {
    setForm({ title: w.title, description: w.description, venue: w.venue, event_date: w.event_date, event_time: w.event_time, banner_image: w.banner_image || "", registration_open: w.registration_open, max_seats: w.max_seats?.toString() || "", google_form_url: (w as any).google_form_url || "", price: (w as any).price || "" });
    setEditing(w); setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: any = { ...form };
    if (payload.max_seats) payload.max_seats = parseInt(payload.max_seats);
    else payload.max_seats = null;
    if (!payload.banner_image) payload.banner_image = null;
    if (!payload.google_form_url) payload.google_form_url = null;
    if (!payload.price) payload.price = null;
    if (editing) await update.mutateAsync({ id: editing.id, data: payload });
    else await create.mutateAsync(payload);
    resetForm();
  };

  const toggleRegistration = async (w: Workshop) => {
    await update.mutateAsync({ id: w.id, data: { registration_open: !w.registration_open } });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Workshops</h1>
          <p className="text-gray-400 text-sm mt-1">Manage workshops and events</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="px-4 py-2 rounded-lg bg-[#00A3FF] text-white text-sm font-medium">Add Workshop</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input placeholder="Venue" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input type="date" placeholder="Date" value={form.event_date} onChange={(e) => setForm({ ...form, event_date: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input type="time" placeholder="Time" value={form.event_time} onChange={(e) => setForm({ ...form, event_time: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input placeholder="Banner Image URL" value={form.banner_image} onChange={(e) => setForm({ ...form, banner_image: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="Max Seats (optional)" type="number" value={form.max_seats} onChange={(e) => setForm({ ...form, max_seats: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="Google Form URL (optional)" type="url" value={form.google_form_url} onChange={(e) => setForm({ ...form, google_form_url: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="Price (optional, e.g. Free, ₹99)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
          </div>
          <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" rows={3} required />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 rounded-lg bg-[#00A3FF] text-white text-sm">{editing ? "Update" : "Create"}</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 text-sm">Cancel</button>
          </div>
        </form>
      )}

      <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl overflow-hidden">
        {isLoading ? <p className="p-4 text-gray-500 text-sm">Loading...</p> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#00A3FF]/10 text-gray-400">
                  <th className="text-left p-3">Title</th>
                  <th className="text-left p-3 hidden sm:table-cell">Date</th>
                  <th className="text-left p-3 hidden md:table-cell">Venue</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((w) => (
                  <tr key={w.id} className="border-b border-white/5 text-white hover:bg-white/5">
                    <td className="p-3 font-medium">{w.title}</td>
                    <td className="p-3 text-gray-400 hidden sm:table-cell">{w.event_date}</td>
                    <td className="p-3 text-gray-400 hidden md:table-cell">{w.venue}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => toggleRegistration(w)}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                          w.registration_open ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {w.registration_open ? <Eye size={12} /> : <EyeOff size={12} />}
                        {w.registration_open ? "Open" : "Closed"}
                      </button>
                    </td>
                    <td className="p-3 text-right">
                      <button onClick={() => openEdit(w)} className="text-[#00A3FF] hover:underline text-xs mr-2"><Pencil size={14} className="inline" /></button>
                      <button onClick={() => { if (confirm("Delete?")) remove.mutate(w.id); }} className="text-red-400 hover:underline text-xs"><Trash2 size={14} className="inline" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
