"use client";

import { useState, useEffect } from "react";
import { useSettings, useUpdateSettings } from "@/lib/api";

const settingFields = [
  { key: "site_name", label: "Site Name", type: "text" },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "mission", label: "Mission", type: "textarea" },
  { key: "vision", label: "Vision", type: "textarea" },
  { key: "hero_title", label: "Hero Title", type: "text" },
  { key: "hero_subtitle", label: "Hero Subtitle", type: "textarea" },
  { key: "social_links", label: "Social Links (JSON)", type: "textarea" },
  { key: "contact_info", label: "Contact Info (JSON)", type: "textarea" },
  { key: "stats", label: "Stats (JSON array)", type: "textarea" },
];

export default function AdminSettingsPage() {
  const { data, isLoading } = useSettings();
  const update = useUpdateSettings();
  const [values, setValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    if (data?.data) setValues(data.data as Record<string, string>);
  }, [data]);

  const handleSave = async (key: string) => {
    setSaving(key);
    await update.mutateAsync({ key, value: values[key] || "" });
    setSaving(null);
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Website Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Manage site-wide content and configuration</p>
      </div>

      {isLoading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : (
        <div className="space-y-3">
          {settingFields.map((field) => (
            <div key={field.key} className="bg-[#0A0E27]/80 border border-[#00A3FF]/10 rounded-xl p-4">
              <label className="block text-sm text-gray-400 mb-1.5">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  value={values[field.key] || ""}
                  onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm font-mono"
                  rows={3}
                />
              ) : (
                <input
                  type="text"
                  value={values[field.key] || ""}
                  onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#050816] border border-[#00A3FF]/20 text-white text-sm"
                />
              )}
              <button
                onClick={() => handleSave(field.key)}
                disabled={saving === field.key}
                className="mt-2 px-3 py-1.5 rounded-lg bg-[#00A3FF]/20 text-[#00A3FF] text-xs font-medium hover:bg-[#00A3FF]/30 transition disabled:opacity-50"
              >
                {saving === field.key ? "Saving..." : "Save"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
