"use client";

import { useState } from "react";
import { useAdminBlogs, useCreateBlog, useUpdateBlog, useDeleteBlog } from "@/lib/api";

interface BlogPost {
  id: string; title: string; slug: string; excerpt: string | null; content: string;
  category: string | null; author: string; image: string | null; status: string;
  published_at: string | null; created_at: string;
}

export default function AdminBlogPage() {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useAdminBlogs(filter || undefined);
  const create = useCreateBlog();
  const update = useUpdateBlog();
  const remove = useDeleteBlog();
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "", excerpt: "", content: "", category: "", author: "", image: "", slug: "", status: "draft",
  });

  const posts = (data?.data || []) as BlogPost[];
  const resetForm = () => {
    setForm({ title: "", excerpt: "", content: "", category: "", author: "", image: "", slug: "", status: "draft" });
    setEditing(null); setShowForm(false);
  };

  const openEdit = (p: BlogPost) => {
    setForm({ title: p.title, excerpt: p.excerpt || "", content: p.content, category: p.category || "", author: p.author, image: p.image || "", slug: p.slug, status: p.status });
    setEditing(p); setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: any = { ...form };
    Object.keys(payload).forEach((k) => { if (!payload[k]) payload[k] = null; });
    if (editing) await update.mutateAsync({ id: editing.id, data: payload });
    else await create.mutateAsync(payload);
    resetForm();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-400 text-sm mt-1">Create and manage blog content</p>
        </div>
        <div className="flex gap-2">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm">
            <option value="">All</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </select>
          <button onClick={() => { resetForm(); setShowForm(true); }} className="px-4 py-2 rounded-lg bg-[#00A3FF] text-white text-sm font-medium">New Post</button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input placeholder="Slug (auto)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" required />
            <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <input placeholder="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm" />
          <textarea
            placeholder="Content (HTML supported)"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm font-mono"
            rows={10}
            required
          />
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
                  <th className="text-left p-3 hidden sm:table-cell">Author</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-left p-3 hidden md:table-cell">Date</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.id} className="border-b border-white/5 text-white hover:bg-white/5">
                    <td className="p-3 font-medium">{p.title}</td>
                    <td className="p-3 text-gray-400 hidden sm:table-cell">{p.author}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        p.status === "published" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}>{p.status}</span>
                    </td>
                    <td className="p-3 text-gray-400 hidden md:table-cell">{new Date(p.created_at).toLocaleDateString()}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => openEdit(p)} className="text-[#00A3FF] hover:underline text-xs mr-2">Edit</button>
                      <button onClick={() => { if (confirm("Delete?")) remove.mutate(p.id); }} className="text-red-400 hover:underline text-xs">Delete</button>
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
