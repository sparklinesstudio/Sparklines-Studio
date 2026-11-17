"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Upload, Download, FileJson } from "lucide-react";
import { AdminHeader } from "./AdminHeader";
import type { BlogInput } from "@/lib/blog/types";
type Entry = {
  post: BlogInput;
  state: "ready" | "invalid" | "uploaded" | "error";
  reason?: string;
};
const template = {
  title: "Your article title",
  slug: "your-article-title",
  contentHtml: "<h2>Introduction</h2><p>Write your article here.</p>",
  metaTitle: "",
  metaDescription: "",
  featuredImage: "",
  imageAlt: "",
  authorName: "Sparklines Studio",
  authorBio: "",
  categories: ["Blog"],
  status: "draft",
  scheduledAt: null,
};
export function BulkBlogImport() {
  const [entries, setEntries] = useState<Entry[]>([]),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const download = () => {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify([template], null, 2)], {
        type: "application/json",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "sparklines-blog-template.json";
    link.click();
    URL.revokeObjectURL(url);
  };
  const read = async (file: File) => {
    setError("");
    try {
      if (file.size > 5 * 1024 * 1024)
        throw new Error("Choose a JSON file under 5 MB.");
      const data: unknown = JSON.parse(await file.text());
      const rows = Array.isArray(data)
        ? data
        : data && typeof data === "object" && "blogs" in data
          ? data.blogs
          : null;
      if (!Array.isArray(rows) || !rows.length || rows.length > 100)
        throw new Error("Use a JSON array containing 1–100 posts.");
      setEntries(
        rows.map((value: unknown) => {
          const raw =
            value && typeof value === "object"
              ? (value as Record<string, unknown>)
              : {};
          const post = {
            ...template,
            ...raw,
            contentHtml: raw.contentHtml || raw.content || "",
            status: "draft",
            scheduledAt: null,
          } as BlogInput;
          const valid =
            typeof post.title === "string" &&
            !!post.title.trim() &&
            typeof post.slug === "string" &&
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) &&
            typeof post.contentHtml === "string" &&
            !!post.contentHtml.trim();
          return {
            post,
            state: valid ? "ready" : "invalid",
            reason: valid
              ? undefined
              : "A title, valid slug, and article content are required.",
          };
        }),
      );
    } catch (e) {
      setEntries([]);
      setError(e instanceof Error ? e.message : "Could not read file.");
    }
  };
  const upload = async () => {
    setBusy(true);
    setError("");
    for (let i = 0; i < entries.length; i++) {
      if (!["ready", "error"].includes(entries[i].state)) continue;
      try {
        const r = await fetch("/api/admin/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entries[i].post),
        });
        const data = await r.json();
        if (!r.ok) throw new Error(data.error);
        setEntries((current) =>
          current.map((entry, index) =>
            index === i
              ? { ...entry, state: "uploaded", reason: undefined }
              : entry,
          ),
        );
      } catch (e) {
        setEntries((current) =>
          current.map((entry, index) =>
            index === i
              ? {
                  ...entry,
                  state: "error",
                  reason: e instanceof Error ? e.message : "Import failed.",
                }
              : entry,
          ),
        );
      }
    }
    setBusy(false);
  };
  const ready = entries.filter((e) =>
    ["ready", "error"].includes(e.state),
  ).length;
  return (
    <>
      <AdminHeader />
      <main className="admin-container">
        <div className="admin-page-heading">
          <div>
            <h1>Bulk Upload</h1>
            <p>
              Import posts from JSON, then review and publish them in the
              editor.
            </p>
          </div>
          <button className="admin-secondary" onClick={download}>
            <Download size={16} />
            Download template
          </button>
        </div>
        <section className="bulk-upload-panel">
          <FileJson size={40} />
          <h2>Upload your blog posts</h2>
          <p>
            JSON array or a file containing a blogs array · up to 100 posts / 5
            MB
          </p>
          <p>
            All imported posts are saved as drafts for review. Duplicate slugs
            are reported individually.
          </p>
          <input
            hidden
            ref={input}
            type="file"
            accept="application/json,.json"
            disabled={busy}
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (file) void read(file);
            }}
          />
          <button
            disabled={busy}
            className="admin-secondary"
            onClick={() => input.current?.click()}
          >
            <Upload size={16} />
            Choose JSON file
          </button>
        </section>
        {error && (
          <p className="admin-error" role="alert">
            {error}
          </p>
        )}
        {entries.length > 0 && (
          <>
            <div className="bulk-import-summary">
              <p>
                {entries.filter((e) => e.state === "uploaded").length} imported
                · {ready} ready ·{" "}
                {entries.filter((e) => e.state === "invalid").length} invalid
              </p>
              <button
                className="admin-primary"
                disabled={busy || !ready}
                onClick={() => void upload()}
              >
                {busy ? "Importing…" : "Import drafts"}
              </button>
            </div>
            <div className="post-table-card post-table-scroll">
              <table className="post-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, i) => (
                    <tr key={i}>
                      <td>{String(entry.post.title || "Untitled")}</td>
                      <td>{String(entry.post.slug || "")}</td>
                      <td>{entry.state}</td>
                      <td>
                        {entry.state === "uploaded" ? (
                          <Link href={"/admin/blogs/" + entry.post.slug}>
                            Review post →
                          </Link>
                        ) : (
                          entry.reason || "Ready to import"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </>
  );
}
