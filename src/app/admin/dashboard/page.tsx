"use client";

import Link from "next/link";
import {
  LayoutDashboard, Users, BookOpen, ClipboardList,
  Rocket, UserPlus, FileText, MessageSquare, Settings,
} from "lucide-react";
import { useDashboard } from "@/lib/api";

const statCards = [
  { key: "workshops", label: "Workshops", icon: BookOpen, href: "/admin/workshops", color: "from-blue-500/20 to-blue-600/10 border-blue-500/30" },
  { key: "registrations", label: "Registrations", icon: ClipboardList, href: "/admin/workshops", color: "from-green-500/20 to-green-600/10 border-green-500/30" },
  { key: "incubation_applications", label: "Incubation Apps", icon: Rocket, href: "/admin/incubation", color: "from-purple-500/20 to-purple-600/10 border-purple-500/30" },
  { key: "member_applications", label: "Member Apps", icon: UserPlus, href: "/admin/members", color: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30" },
  { key: "blogs", label: "Blogs", icon: FileText, href: "/admin/blog", color: "from-pink-500/20 to-pink-600/10 border-pink-500/30" },
  { key: "contact_messages", label: "Messages", icon: MessageSquare, href: "/admin/contacts", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30" },
];

export default function AdminDashboardPage() {
  const { data, isLoading } = useDashboard();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Overview of your platform</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const value = data?.data?.stats?.[card.key] ?? 0;
          return (
            <Link
              key={card.key}
              href={card.href}
              className={`bg-gradient-to-br ${card.color} border rounded-xl p-4 hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={20} className="text-white/80" />
                <span className="text-2xl font-bold text-white">
                  {isLoading ? "—" : value}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{card.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4">
        <h2 className="text-white font-semibold mb-3">Recent Activity</h2>
        {isLoading ? (
          <p className="text-gray-500 text-sm">Loading...</p>
        ) : data?.data?.recentActivity?.length ? (
          <div className="space-y-2">
            {(data.data.recentActivity as { type: string; description: string; date: string }[]).slice(0, 8).map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-sm"
              >
                <span className="text-gray-400">{activity.description}</span>
                <span className="ml-auto text-gray-600 text-xs">
                  {new Date(activity.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No recent activity</p>
        )}
      </div>
    </div>
  );
}
