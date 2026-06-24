import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUrl } from "./fetch-api";

const TOKEN_KEY = "visionx_admin_token";

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function apiRequest<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<{ success: boolean; message?: string; data?: T; error?: unknown }> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(apiUrl(path), { ...options, headers });
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || json.error || "Request failed");
  }

  return json;
}

// Auth
export function useLogin() {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      apiRequest<{ token: string; user: unknown }>("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
}

export function useProfile() {
  return useQuery({
    queryKey: ["admin-profile"],
    queryFn: () =>
      apiRequest<{ id: string; email: string; name: string; role: string }>(
        "/api/admin/profile"
      ),
    enabled: !!getToken(),
  });
}

// Dashboard
export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () =>
      apiRequest<{ stats: Record<string, number>; recentActivity: unknown[] }>(
        "/api/admin/dashboard"
      ),
    enabled: !!getToken(),
  });
}

// Team
export function useTeam() {
  return useQuery({
    queryKey: ["team"],
    queryFn: () => apiRequest<unknown[]>("/api/admin/team"),
    enabled: !!getToken(),
  });
}

export function useCreateTeamMember() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      apiRequest("/api/admin/team", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["team"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useUpdateTeamMember() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) =>
      apiRequest(`/api/admin/team/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["team"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useDeleteTeamMember() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      apiRequest(`/api/admin/team/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["team"] }),
    onError: (err: Error) => alert(err.message),
  });
}

// Workshops
export function useAdminWorkshops() {
  return useQuery({
    queryKey: ["admin-workshops"],
    queryFn: () => apiRequest<unknown[]>("/api/admin/workshops"),
    enabled: !!getToken(),
  });
}

export function useCreateWorkshop() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      apiRequest("/api/admin/workshops", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-workshops"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useUpdateWorkshop() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) =>
      apiRequest(`/api/admin/workshops/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-workshops"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useDeleteWorkshop() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      apiRequest(`/api/admin/workshops/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-workshops"] }),
    onError: (err: Error) => alert(err.message),
  });
}

// Blog
export function useAdminBlogs(status?: string) {
  return useQuery({
    queryKey: ["admin-blogs", status],
    queryFn: () =>
      apiRequest<unknown[]>(
        `/api/admin/blogs${status ? `?status=${status}` : ""}`
      ),
    enabled: !!getToken(),
  });
}

export function useCreateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      apiRequest("/api/admin/blogs", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-blogs"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useUpdateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Record<string, unknown> }) =>
      apiRequest(`/api/admin/blogs/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-blogs"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useDeleteBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      apiRequest(`/api/admin/blogs/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-blogs"] }),
    onError: (err: Error) => alert(err.message),
  });
}

// Applications
export function useIncubations() {
  return useQuery({
    queryKey: ["incubations"],
    queryFn: () => apiRequest<unknown[]>("/api/admin/incubation-applications"),
    enabled: !!getToken(),
  });
}

export function useUpdateIncubationStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      apiRequest(`/api/admin/incubation-applications/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["incubations"] }),
    onError: (err: Error) => alert(err.message),
  });
}

export function useMembers() {
  return useQuery({
    queryKey: ["member-applications"],
    queryFn: () => apiRequest<unknown[]>("/api/admin/member-applications"),
    enabled: !!getToken(),
  });
}

export function useUpdateMemberStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      apiRequest(`/api/admin/member-applications/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["member-applications"] }),
    onError: (err: Error) => alert(err.message),
  });
}

// Contact Messages
export function useContactMessages() {
  return useQuery({
    queryKey: ["contact-messages"],
    queryFn: () => apiRequest<unknown[]>("/api/admin/contact-messages"),
    enabled: !!getToken(),
  });
}

export function useDeleteContactMessage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      apiRequest(`/api/admin/contact-messages/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contact-messages"] }),
    onError: (err: Error) => alert(err.message),
  });
}

// Settings
export function useSettings() {
  return useQuery({
    queryKey: ["settings"],
    queryFn: () => apiRequest<Record<string, string>>("/api/admin/settings"),
  });
}

export function useUpdateSettings() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ key, value }: { key: string; value: string }) =>
      apiRequest("/api/admin/settings", {
        method: "PUT",
        body: JSON.stringify({ key, value }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["settings"] }),
    onError: (err: Error) => alert(err.message),
  });
}

// Upload
export function useUpload() {
  return useMutation({
    mutationFn: async (file: File) => {
      const token = getToken();
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(apiUrl("/api/admin/upload"), {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      return res.json();
    },
  });
}
