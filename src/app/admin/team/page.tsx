"use client";

import { useState } from "react";
import { useTeam, useCreateTeamMember, useUpdateTeamMember, useDeleteTeamMember, useUpload } from "@/lib/api";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string | null;
  bio: string | null;
  image_url: string | null;
  linkedin_url: string | null;
  display_order: number;
  council: boolean;
}

export default function AdminTeamPage() {
  const { data, isLoading } = useTeam();
  const createMember = useCreateTeamMember();
  const updateMember = useUpdateTeamMember();
  const deleteMember = useDeleteTeamMember();
  const upload = useUpload();
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "", role: "", department: "", bio: "", image_url: "", linkedin_url: "",
    display_order: 0, council: false,
  });

  const members = (data?.data || []) as TeamMember[];

  const resetForm = () => {
    setForm({ name: "", role: "", department: "", bio: "", image_url: "", linkedin_url: "", display_order: 0, council: false });
    setEditing(null);
    setShowForm(false);
  };

  const openEdit = (m: TeamMember) => {
    setForm({
      name: m.name, role: m.role, department: m.department || "", bio: m.bio || "",
      image_url: m.image_url || "", linkedin_url: m.linkedin_url || "",
      display_order: m.display_order, council: m.council,
    });
    setEditing(m);
    setShowForm(true);
  };

  const isSaving = createMember.isPending || updateMember.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      updateMember.mutate(
        { id: editing.id, data: form as any },
        { onSuccess: () => resetForm() }
      );
    } else {
      createMember.mutate(form as any, { onSuccess: () => resetForm() });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    upload.mutate(file, {
      onSuccess: (res: any) => {
        if (res.data?.url) setForm((f) => ({ ...f, image_url: res.data.url }));
      },
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Team Members</h1>
          <p className="text-gray-400 text-sm mt-1">Manage your team</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="px-4 py-2 rounded-lg bg-[#00A3FF] text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(0,163,255,0.3)] transition-all"
        >
          Add Member
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input placeholder="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="LinkedIn URL" value={form.linkedin_url} onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="Display Order" type="number" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" checked={form.council} onChange={(e) => setForm({ ...form, council: e.target.checked })} className="accent-[#00A3FF]" />
              Council Member
            </label>
          </div>
          <textarea placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" rows={2} />
          <div className="flex items-center gap-3">
            <input type="file" accept="image/*" onChange={handleFileUpload} className="text-sm text-gray-400" />
            {form.image_url && <span className="text-xs text-gray-500 truncate">{form.image_url}</span>}
          </div>
            <div className="flex gap-2">
            <button type="submit" disabled={isSaving} className="px-4 py-2 rounded-lg bg-[#00A3FF] text-white text-sm font-medium disabled:opacity-50">
              {isSaving ? "Saving..." : editing ? "Update" : "Create"}
            </button>
            <button type="button" onClick={resetForm} className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 text-sm">Cancel</button>
          </div>
        </form>
      )}

      <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl overflow-hidden">
        {isLoading ? (
          <p className="p-4 text-gray-500 text-sm">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#00A3FF]/10 text-gray-400">
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Role</th>
                  <th className="text-left p-3 hidden sm:table-cell">Department</th>
                  <th className="text-left p-3 hidden md:table-cell">Order</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.id} className="border-b border-white/5 text-white hover:bg-white/5">
                    <td className="p-3 font-medium">{m.name}</td>
                    <td className="p-3 text-gray-400">{m.role}</td>
                    <td className="p-3 text-gray-400 hidden sm:table-cell">{m.department || "—"}</td>
                    <td className="p-3 text-gray-400 hidden md:table-cell">{m.display_order}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => openEdit(m)} className="text-[#00A3FF] hover:underline text-xs mr-2">Edit</button>
                      <button onClick={() => { if (confirm("Delete?")) deleteMember.mutate(m.id); }} className="text-red-400 hover:underline text-xs">Delete</button>
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
