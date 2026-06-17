"use client";

import { useState } from "react";
import { useMembers, useUpdateMemberStatus } from "@/lib/api";

interface App {
  id: string; full_name: string; college_name: string; department: string;
  year_of_study: string; role_interested: string; why_join: string;
  relevant_experience: string | null; status: string; created_at: string;
}

const statuses = ["Pending", "Interview Scheduled", "Selected", "Rejected"];

export default function AdminMembersPage() {
  const { data, isLoading } = useMembers();
  const updateStatus = useUpdateMemberStatus();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<App | null>(null);

  const apps = ((data?.data || []) as App[]).filter((a) =>
    a.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">VisionX Member Applications</h1>
        <p className="text-gray-400 text-sm mt-1">Review and manage membership applications</p>
      </div>

      <input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm"
      />

      {selected && (
        <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-white font-semibold">{selected.full_name}</h3>
            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-gray-400">College:</span> <span className="text-white">{selected.college_name}</span></div>
            <div><span className="text-gray-400">Department:</span> <span className="text-white">{selected.department}</span></div>
            <div><span className="text-gray-400">Year:</span> <span className="text-white">{selected.year_of_study}</span></div>
            <div><span className="text-gray-400">Role:</span> <span className="text-white">{selected.role_interested}</span></div>
          </div>
          <div className="text-sm"><span className="text-gray-400">Why Join:</span> <p className="text-white mt-1">{selected.why_join}</p></div>
          {selected.relevant_experience && (
            <div className="text-sm"><span className="text-gray-400">Experience:</span> <p className="text-white mt-1">{selected.relevant_experience}</p></div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Status:</span>
            <select
              value={selected.status}
              onChange={(e) => updateStatus.mutate({ id: selected.id, status: e.target.value })}
              className="px-2 py-1 rounded bg-[#050816] border border-[#00A3FF]/20 text-white text-sm"
            >
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      )}

      <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl overflow-hidden">
        {isLoading ? <p className="p-4 text-gray-500 text-sm">Loading...</p> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#00A3FF]/10 text-gray-400">
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3 hidden sm:table-cell">College</th>
                  <th className="text-left p-3 hidden md:table-cell">Role</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((a) => (
                  <tr key={a.id} className="border-b border-white/5 text-white hover:bg-white/5">
                    <td className="p-3 font-medium">{a.full_name}</td>
                    <td className="p-3 text-gray-400 hidden sm:table-cell">{a.college_name}</td>
                    <td className="p-3 text-gray-400 hidden md:table-cell">{a.role_interested}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        a.status === "Pending" ? "bg-blue-500/20 text-blue-400" :
                        a.status === "Interview Scheduled" ? "bg-yellow-500/20 text-yellow-400" :
                        a.status === "Selected" ? "bg-green-500/20 text-green-400" :
                        "bg-red-500/20 text-red-400"
                      }`}>{a.status}</span>
                    </td>
                    <td className="p-3 text-right">
                      <button onClick={() => setSelected(a)} className="text-[#00A3FF] hover:underline text-xs">View</button>
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
