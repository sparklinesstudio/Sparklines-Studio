"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminHeader } from "./AdminHeader";
import { uploadBlogImage } from "./RichTextEditor";
import VaphersEditor from "./VaphersEditor";
import { siteConfig } from "@/config/site";
import type { BlogInput, BlogPost } from "@/lib/blog/types";
const empty: BlogInput = {
  title: "",
  slug: "",
  contentHtml: "<p></p>",
  metaTitle: "",
  metaDescription: "",
  featuredImage: "",
  imageAlt: "",
  authorName: "Sparklines Studio",
  authorBio: "",
  categories: [],
  status: "draft",
  scheduledAt: null,
};
export function BlogEditor({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const [form, setForm] = useState<BlogInput>(() =>
    post
      ? {
          ...post,
          status:
            post.status === "scheduled" &&
            post.scheduledAt &&
            Date.parse(post.scheduledAt) <= Date.now()
              ? "published"
              : post.status,
        }
      : empty,
  );
  const [dirty, setDirty] = useState(false),
    [busy, setBusy] = useState(false),
    [uploading, setUploading] = useState(false),
    [error, setError] = useState(""),
    [notice, setNotice] = useState("");
  const [slugEdited, setSlugEdited] = useState(!!post),
    [savedSlug, setSavedSlug] = useState(post?.slug || ""),
    [mobile, setMobile] = useState(false),
    [sourceMode, setSourceMode] = useState(false);
  const [taxonomy, setTaxonomy] = useState<{
    authors: string[];
    categories: string[];
  }>({ authors: ["Sparklines Studio"], categories: [] });
  const [newAuthor, setNewAuthor] = useState(""),
    [newCategory, setNewCategory] = useState("");
  const coverRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const guard = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault();
    };
    window.addEventListener("beforeunload", guard);
    return () => window.removeEventListener("beforeunload", guard);
  }, [dirty]);
  useEffect(() => {
    fetch("/api/admin/blog-taxonomy")
      .then(async (r) => {
        const data = await r.json();
        if (!r.ok) throw new Error(data.error);
        setTaxonomy(data);
      })
      .catch((e) => setError(e.message));
  }, []);
  const update = <K extends keyof BlogInput>(key: K, value: BlogInput[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setDirty(true);
    setNotice("");
  };
  const save = async () => {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch(
        "/api/admin/blogs" + (savedSlug ? "/" + savedSlug : ""),
        {
          method: savedSlug ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setDirty(false);
      setSavedSlug(data.slug);
      setNotice(
        form.status === "draft"
          ? "Draft saved."
          : form.status === "scheduled"
            ? "Post scheduled successfully."
            : "Post published successfully.",
      );
      if (!savedSlug || savedSlug !== data.slug)
        router.replace("/admin/blogs/" + data.slug);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save post.");
    } finally {
      setBusy(false);
    }
  };
  const addTerm = async (kind: "author" | "category") => {
    const name = (kind === "author" ? newAuthor : newCategory).trim();
    if (!name) return;
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/admin/blog-taxonomy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, name }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      setTaxonomy((t) => ({
        ...t,
        [kind === "author" ? "authors" : "categories"]: [
          ...new Set([
            ...t[kind === "author" ? "authors" : "categories"],
            name,
          ]),
        ],
      }));
      if (kind === "author") {
        update("authorName", name);
        setNewAuthor("");
      } else {
        update("categories", [...new Set([...form.categories, name])]);
        setNewCategory("");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not add entry.");
    } finally {
      setBusy(false);
    }
  };
  const dateValue = form.scheduledAt
    ? new Date(
        new Date(form.scheduledAt).getTime() -
          new Date(form.scheduledAt).getTimezoneOffset() * 60000,
      )
        .toISOString()
        .slice(0, 16)
    : "";
  const categories = [...new Set([...taxonomy.categories, ...form.categories])];
  const words = form.contentHtml
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return (
    <>
      <AdminHeader />
      <main className="publishing-editor">
        <div className="publishing-editor-top">
          <Link href="/admin/blogs">← All posts</Link>
          <span>
            {dirty
              ? "Unsaved changes"
              : savedSlug
                ? "All changes saved"
                : "New post"}
          </span>
          {savedSlug && (
            <Link target="_blank" href={"/admin/blogs/preview/" + savedSlug}>
              Preview saved post ↗
            </Link>
          )}
        </div>
        {error && (
          <p role="alert" className="admin-error">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="admin-success">
            {notice}
          </p>
        )}
        <div className="publishing-columns">
          <div className="publishing-canvas">
            <div className="publishing-editor-modes">
              <button
                aria-pressed={!sourceMode}
                onClick={() => setSourceMode(false)}
              >
                Visual
              </button>
              <button
                aria-pressed={sourceMode}
                onClick={() => setSourceMode(true)}
              >
                HTML
              </button>
            </div>
            {sourceMode ? (
              <>
                <label className="source-title-label">
                  Post title
                  <input
                    maxLength={180}
                    value={form.title}
                    onChange={(e) => update("title", e.target.value)}
                  />
                </label>
                <textarea
                  className="publishing-source"
                  aria-label="Article HTML"
                  value={form.contentHtml}
                  onChange={(e) => update("contentHtml", e.target.value)}
                />
              </>
            ) : (
              <VaphersEditor
                content={form.contentHtml}
                onChange={(html) => update("contentHtml", html)}
                title={form.title}
                onTitleChange={(title) => {
                  setForm((f) => ({
                    ...f,
                    title,
                    ...(!slugEdited
                      ? {
                          slug: title
                            .toLowerCase()
                            .normalize("NFKD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, ""),
                        }
                      : {}),
                  }));
                  setDirty(true);
                }}
              />
            )}
            <p className="publishing-word-count">
              {words} words · {Math.max(1, Math.ceil(words / 220))} min read
            </p>
            <section className="seo-panel">
              <h2>Search appearance</h2>
              <p>Determine how your post should look in the search results.</p>
              <div className="seo-device">
                <button
                  type="button"
                  aria-pressed={!mobile}
                  onClick={() => setMobile(false)}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  aria-pressed={mobile}
                  onClick={() => setMobile(true)}
                >
                  Mobile
                </button>
              </div>
              <div className={"seo-preview" + (mobile ? " seo-mobile" : "")}>
                <small>{siteConfig.name}</small>
                <p>
                  {siteConfig.url}/blogs/{form.slug}
                </p>
                <h3>
                  {form.metaTitle ||
                    form.title ||
                    "Enter a title — Sparklines Studio"}
                </h3>
                <p>
                  {form.metaDescription ||
                    "Add a meta description to show readers what your post is about."}
                </p>
              </div>
              <label>
                SEO title
                <input
                  maxLength={180}
                  value={form.metaTitle}
                  placeholder={form.title}
                  onChange={(e) => update("metaTitle", e.target.value)}
                />
              </label>
              <meter min={0} max={60} value={form.metaTitle.length} />
              <small>{form.metaTitle.length} / 60 recommended characters</small>
              <label>
                Slug
                <input
                  maxLength={180}
                  value={form.slug}
                  onChange={(e) => {
                    setSlugEdited(true);
                    update(
                      "slug",
                      e.target.value
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, ""),
                    );
                  }}
                />
              </label>
              <label>
                Meta description
                <textarea
                  rows={3}
                  maxLength={320}
                  value={form.metaDescription}
                  onChange={(e) => update("metaDescription", e.target.value)}
                />
              </label>
              <meter min={0} max={160} value={form.metaDescription.length} />
              <small>
                {form.metaDescription.length} / 160 recommended characters
              </small>
            </section>
          </div>
          <aside className="publishing-sidebar">
            <section>
              <small>POST TITLE</small>
              <h3>{form.title || "Untitled Post"}</h3>
            </section>
            <section>
              <h2>Featured image</h2>
              {form.featuredImage ? (
                <img
                  src={form.featuredImage}
                  alt={form.imageAlt || "Featured image"}
                />
              ) : (
                <div className="cover-placeholder">No featured image</div>
              )}
              <input
                hidden
                ref={coverRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (!file) return;
                  setUploading(true);
                  setError("");
                  try {
                    update("featuredImage", await uploadBlogImage(file));
                  } catch (e) {
                    setError(e instanceof Error ? e.message : "Upload failed.");
                  } finally {
                    setUploading(false);
                  }
                }}
              />
              <button
                className="admin-secondary"
                disabled={uploading}
                onClick={() => coverRef.current?.click()}
              >
                {uploading ? "Uploading…" : "Upload image"}
              </button>
              {form.featuredImage && (
                <button
                  className="admin-text-button"
                  onClick={() => update("featuredImage", "")}
                >
                  Remove image
                </button>
              )}
              <label>
                Image description
                <input
                  maxLength={200}
                  value={form.imageAlt}
                  onChange={(e) => update("imageAlt", e.target.value)}
                />
              </label>
            </section>
            <section>
              <h2>Author</h2>
              <select
                aria-label="Author"
                value={form.authorName}
                onChange={(e) => update("authorName", e.target.value)}
              >
                {[...new Set([...taxonomy.authors, form.authorName])].map(
                  (name) => (
                    <option key={name}>{name}</option>
                  ),
                )}
              </select>
              <div className="publishing-add">
                <input
                  aria-label="New author name"
                  placeholder="New author name"
                  maxLength={100}
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                />
                <button
                  disabled={busy || !newAuthor.trim()}
                  onClick={() => void addTerm("author")}
                >
                  Add
                </button>
              </div>
              <label>
                Author bio
                <textarea
                  maxLength={500}
                  rows={3}
                  value={form.authorBio}
                  onChange={(e) => update("authorBio", e.target.value)}
                />
              </label>
            </section>
            <section>
              <h2>Categories</h2>
              <div className="category-checklist">
                {categories.map((name) => (
                  <label key={name}>
                    <input
                      type="checkbox"
                      checked={form.categories.includes(name)}
                      onChange={(e) =>
                        update(
                          "categories",
                          e.target.checked
                            ? [...form.categories, name]
                            : form.categories.filter((c) => c !== name),
                        )
                      }
                    />
                    {name}
                  </label>
                ))}
                {!categories.length && (
                  <p>No categories yet. Add your first below.</p>
                )}
              </div>
              <div className="publishing-add">
                <input
                  aria-label="New category"
                  maxLength={40}
                  placeholder="New category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
                <button
                  disabled={busy || !newCategory.trim()}
                  onClick={() => void addTerm("category")}
                >
                  Add
                </button>
              </div>
            </section>
            <section>
              <h2>Publish</h2>
              <label>
                Status
                <select
                  value={form.status}
                  onChange={(e) =>
                    update("status", e.target.value as BlogInput["status"])
                  }
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </label>
              {form.status === "scheduled" && (
                <label>
                  Publish date & time (local)
                  <input
                    type="datetime-local"
                    value={dateValue}
                    onChange={(e) =>
                      update(
                        "scheduledAt",
                        e.target.value
                          ? new Date(e.target.value).toISOString()
                          : null,
                      )
                    }
                  />
                </label>
              )}
              <button
                className="admin-primary"
                disabled={busy || uploading}
                onClick={() => void save()}
              >
                {busy
                  ? "Saving…"
                  : form.status === "draft"
                    ? "Save draft"
                    : form.status === "scheduled"
                      ? "Schedule post"
                      : savedSlug
                        ? "Update post"
                        : "Publish post"}
              </button>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
