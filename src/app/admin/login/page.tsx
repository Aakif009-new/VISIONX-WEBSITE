"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin, setToken } from "@/lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const login = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await login.mutateAsync({ email, password });
      if (res.data) {
        const { token } = res.data as { token: string };
        setToken(token);
        router.push("/admin/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="font-orbitron text-2xl font-black tracking-[0.15em] mb-2">
            <span className="text-[#00A3FF]">CMS</span>
            <span className="text-white font-light"> VISIONX</span>
          </div>
          <p className="text-gray-400 text-sm">Sign in to manage your website</p>
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 text-red-400 text-sm text-center">
            {error}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm focus:outline-none focus:border-[#00A3FF]"
              placeholder="admin@visionx.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm focus:outline-none focus:border-[#00A3FF]"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={login.isPending}
            className="w-full py-2.5 rounded-lg bg-[#00A3FF] text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(0,163,255,0.3)] transition-all disabled:opacity-50"
          >
            {login.isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
