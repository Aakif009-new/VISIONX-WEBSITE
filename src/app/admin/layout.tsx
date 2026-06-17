"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Users, BookOpen, ClipboardList,
  Rocket, UserPlus, FileText, MessageSquare, Settings,
  LogOut, Menu, X, Trash2,
} from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getToken, clearToken, useProfile } from "@/lib/api";

const queryClient = new QueryClient();

const sidebarLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/team", label: "Team Members", icon: Users },
  { href: "/admin/workshops", label: "Workshops", icon: BookOpen },
  { href: "/admin/incubation", label: "Startup Applications", icon: Rocket },
  { href: "/admin/members", label: "VisionX Applications", icon: UserPlus },
  { href: "/admin/blog", label: "Blogs", icon: FileText },
  { href: "/admin/contacts", label: "Contact Messages", icon: MessageSquare },
  { href: "/admin/settings", label: "Website Settings", icon: Settings },
];

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: profile } = useProfile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/admin") router.push("/admin/dashboard");
  }, [pathname, router]);

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#050816] flex">
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0A0E27] border-r border-[#00A3FF]/10 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-[#00A3FF]/10">
          <Link href="/admin/dashboard" className="font-orbitron text-lg font-black tracking-[0.15em]">
            <span className="text-[#00A3FF]">CMS</span>
            <span className="text-white font-light"> VISIONX</span>
          </Link>
        </div>
        <nav className="p-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  active
                    ? "bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-[#00A3FF]/10">
          {profile?.data && (
            <div className="px-3 py-2 mb-2 text-xs text-gray-500">
              {profile.data.name} <span className="text-[#00A3FF]">({profile.data.role})</span>
            </div>
          )}
          <button
            onClick={() => { clearToken(); router.push("/admin/login"); }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 w-full transition-all"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 bg-[#050816]/80 backdrop-blur-xl border-b border-[#00A3FF]/10 px-4 h-14 flex items-center justify-between lg:justify-end">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm text-gray-400">Admin Panel</span>
        </header>
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </QueryClientProvider>
  );
}
