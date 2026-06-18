"use client";

import { useState } from "react";
import { useContactMessages, useDeleteContactMessage } from "@/lib/api";

interface Message {
  id: string; name: string; email: string; message: string; created_at: string;
}

export default function AdminContactsPage() {
  const { data, isLoading } = useContactMessages();
  const del = useDeleteContactMessage();
  const [selected, setSelected] = useState<Message | null>(null);
  const messages = (data?.data || []) as Message[];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
        <p className="text-gray-400 text-sm mt-1">View messages from visitors</p>
      </div>

      {selected && (
        <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white font-semibold">{selected.name}</h3>
              <p className="text-gray-400 text-xs">{selected.email}</p>
            </div>
            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <p className="text-white text-sm whitespace-pre-wrap">{selected.message}</p>
          <button
            onClick={() => { if (confirm("Delete this message?")) { del.mutate(selected.id); setSelected(null); } }}
            className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition"
          >
            Delete Message
          </button>
        </div>
      )}

      <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl overflow-hidden">
        {isLoading ? <p className="p-4 text-gray-500 text-sm">Loading...</p> : messages.length === 0 ? (
          <p className="p-4 text-gray-500 text-sm">No messages yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#00A3FF]/10 text-gray-400">
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3 hidden sm:table-cell">Email</th>
                  <th className="text-left p-3">Message</th>
                  <th className="text-left p-3 hidden md:table-cell">Date</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((m) => (
                  <tr key={m.id} className="border-b border-white/5 text-white hover:bg-white/5">
                    <td className="p-3 font-medium">{m.name}</td>
                    <td className="p-3 text-gray-400 hidden sm:table-cell">{m.email}</td>
                    <td className="p-3 text-gray-400 max-w-[200px] truncate">{m.message}</td>
                    <td className="p-3 text-gray-400 hidden md:table-cell">{new Date(m.created_at).toLocaleDateString()}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => setSelected(m)} className="text-[#00A3FF] hover:underline text-xs mr-2">View</button>
                      <button onClick={() => { if (confirm("Delete?")) del.mutate(m.id); }} className="text-red-400 hover:underline text-xs">Delete</button>
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
