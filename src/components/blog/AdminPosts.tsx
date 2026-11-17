"use client";
import { Fragment, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  FileText,
  ImageIcon,
  Pencil,
  Trash2,
  Zap,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ExternalLink,
} from "lucide-react";
import { AdminHeader } from "./AdminHeader";
import type { BlogInput, BlogPost } from "@/lib/blog/types";
const PAGE_SIZE = 15;
function status(post: BlogPost) {
  return post.deletedAt
    ? "trash"
    : post.status === "scheduled" &&
        post.scheduledAt &&
        Date.parse(post.scheduledAt) <= Date.now()
      ? "published"
      : post.status;
}
export function AdminPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  const [query, setQuery] = useState(""),
    [filter, setFilter] = useState("all"),
    [category, setCategory] = useState("all"),
    [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false),
    [deleting, setDeleting] = useState<BlogPost | null>(null),
    [editing, setEditing] = useState<BlogPost | null>(null);
  const [taxonomy, setTaxonomy] = useState<{
    authors: string[];
    categories: string[];
  }>({ authors: [], categories: [] });
  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/admin/blogs", { cache: "no-store" });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      setPosts(data.blogs);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load posts.");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const initial = window.setTimeout(() => void load(), 0);
    fetch("/api/admin/blog-taxonomy")
      .then(async (r) => {
        if (r.ok) setTaxonomy(await r.json());
      })
      .catch(() => {});
    return () => window.clearTimeout(initial);
  }, [load]);
  useEffect(() => {
    if (!deleting) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !busy) setDeleting(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [deleting, busy]);
  const categories = [
    ...new Set([...taxonomy.categories, ...posts.flatMap((p) => p.categories)]),
  ].sort();
  const authors = [
    ...new Set([...taxonomy.authors, ...posts.map((p) => p.authorName)]),
  ];
  const visible = posts.filter(
    (p) =>
      (filter === "all" ? !p.deletedAt : status(p) === filter) &&
      (category === "all" || p.categories.includes(category)) &&
      [p.title, p.slug, p.authorName, ...p.categories]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const pages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE)),
    currentPage = Math.min(page, pages);
  const mutate = async (
    post: BlogPost,
    method: "DELETE" | "PATCH" | "PUT",
    body?: BlogInput,
  ) => {
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/admin/blogs/" + post.slug, {
        method,
        ...(body
          ? {
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          : {}),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      setDeleting(null);
      setEditing(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not update post.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <>
      <AdminHeader />
      <main className="admin-container publishing-posts">
        <div className="admin-page-heading">
          <div>
            <h1>All Posts</h1>
            <p>Manage and organize your blog posts.</p>
          </div>
          <Link href="/admin/blogs/new" className="admin-primary">
            <Plus size={17} />
            Add New Post
          </Link>
        </div>
        <div className="post-table-card">
          <div className="post-table-controls">
            <label className="post-search">
              <Search size={17} />
              <input
                aria-label="Search posts"
                placeholder="Search posts…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </label>
            <select
              aria-label="Filter by category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All categories</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              aria-label="Filter by status"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
            >
              {["all", "published", "draft", "scheduled", "trash"].map((s) => (
                <option value={s} key={s}>
                  {s === "all"
                    ? "All statuses"
                    : s[0].toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="post-status-tabs">
            {["all", "published", "draft", "scheduled", "trash"].map((s) => (
              <button
                key={s}
                aria-pressed={filter === s}
                onClick={() => {
                  setFilter(s);
                  setPage(1);
                }}
              >
                {s === "all" ? "All posts" : s[0].toUpperCase() + s.slice(1)}{" "}
                <span>
                  {
                    posts.filter((p) =>
                      s === "all" ? !p.deletedAt : status(p) === s,
                    ).length
                  }
                </span>
              </button>
            ))}
          </div>
          {error && (
            <div role="alert" className="admin-error">
              {error} <button onClick={() => void load()}>Retry</button>
            </div>
          )}
          <div className="post-table-scroll">
            <table className="post-table">
              <thead>
                <tr>
                  <th>Post</th>
                  <th>Author</th>
                  <th>Categories</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="admin-empty" role="status">
                      Loading posts…
                    </td>
                  </tr>
                ) : visible.length ? (
                  visible
                    .slice(
                      (currentPage - 1) * PAGE_SIZE,
                      currentPage * PAGE_SIZE,
                    )
                    .map((post) => (
                      <Fragment key={post.id}>
                        <tr>
                          <td>
                            <div className="post-title-cell">
                              {post.featuredImage ? (
                                <img src={post.featuredImage} alt="" />
                              ) : (
                                <span className="post-image-placeholder">
                                  <ImageIcon size={22} />
                                </span>
                              )}
                              <div>
                                <Link
                                  href={
                                    post.deletedAt
                                      ? "#"
                                      : "/admin/blogs/" + post.slug
                                  }
                                >
                                  {post.title}
                                </Link>
                                <small>/{post.slug}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="post-author-avatar">
                              {post.authorName.slice(0, 1)}
                            </span>
                            {post.authorName}
                          </td>
                          <td>
                            <div className="post-categories">
                              {post.categories.length ? (
                                post.categories.map((c) => (
                                  <span key={c}>{c}</span>
                                ))
                              ) : (
                                <small>Uncategorized</small>
                              )}
                            </div>
                          </td>
                          <td>
                            <span
                              className={
                                "admin-status admin-status-" + status(post)
                              }
                            >
                              {status(post)}
                            </span>
                          </td>
                          <td>
                            <small>
                              {new Date(
                                post.scheduledAt && status(post) === "scheduled"
                                  ? post.scheduledAt
                                  : post.updatedAt,
                              ).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </small>
                          </td>
                          <td>
                            <div className="post-actions">
                              {post.deletedAt ? (
                                <button
                                  disabled={busy}
                                  aria-label={"Restore " + post.title}
                                  title="Restore draft"
                                  onClick={() => void mutate(post, "PATCH")}
                                >
                                  <RotateCcw size={17} />
                                </button>
                              ) : (
                                <>
                                  <button
                                    disabled={busy}
                                    title="Quick edit"
                                    aria-label={"Quick edit " + post.title}
                                    onClick={() =>
                                      setEditing(
                                        editing?.id === post.id
                                          ? null
                                          : {
                                              ...post,
                                              status: status(
                                                post,
                                              ) as BlogInput["status"],
                                            },
                                      )
                                    }
                                  >
                                    <Zap size={17} />
                                  </button>
                                  <Link
                                    title="Edit post"
                                    aria-label={"Edit " + post.title}
                                    href={"/admin/blogs/" + post.slug}
                                  >
                                    <Pencil size={17} />
                                  </Link>
                                  <Link
                                    title="Preview post"
                                    aria-label={"Preview " + post.title}
                                    target="_blank"
                                    href={"/admin/blogs/preview/" + post.slug}
                                  >
                                    <ExternalLink size={17} />
                                  </Link>
                                  <button
                                    disabled={busy}
                                    title="Move to trash"
                                    aria-label={"Trash " + post.title}
                                    onClick={() => setDeleting(post)}
                                  >
                                    <Trash2 size={17} />
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                        {editing?.id === post.id && (
                          <tr className="quick-edit-row">
                            <td colSpan={6}>
                              <div className="quick-edit-grid">
                                <label>
                                  Title
                                  <input
                                    value={editing.title}
                                    maxLength={180}
                                    onChange={(e) =>
                                      setEditing({
                                        ...editing,
                                        title: e.target.value,
                                      })
                                    }
                                  />
                                </label>
                                <label>
                                  Slug
                                  <input
                                    value={editing.slug}
                                    maxLength={180}
                                    onChange={(e) =>
                                      setEditing({
                                        ...editing,
                                        slug: e.target.value,
                                      })
                                    }
                                  />
                                </label>
                                <label>
                                  Status
                                  <select
                                    value={editing.status}
                                    onChange={(e) =>
                                      setEditing({
                                        ...editing,
                                        status: e.target
                                          .value as BlogInput["status"],
                                      })
                                    }
                                  >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                    <option value="scheduled">Scheduled</option>
                                  </select>
                                </label>
                                <label>
                                  Author
                                  <select
                                    value={editing.authorName}
                                    onChange={(e) =>
                                      setEditing({
                                        ...editing,
                                        authorName: e.target.value,
                                      })
                                    }
                                  >
                                    {authors.map((a) => (
                                      <option key={a}>{a}</option>
                                    ))}
                                  </select>
                                </label>
                                <fieldset>
                                  <legend>Categories</legend>
                                  {categories.map((c) => (
                                    <label className="quick-category" key={c}>
                                      <input
                                        type="checkbox"
                                        checked={editing.categories.includes(c)}
                                        onChange={(e) =>
                                          setEditing({
                                            ...editing,
                                            categories: e.target.checked
                                              ? [...editing.categories, c]
                                              : editing.categories.filter(
                                                  (v) => v !== c,
                                                ),
                                          })
                                        }
                                      />
                                      {c}
                                    </label>
                                  ))}
                                </fieldset>
                                {editing.status === "scheduled" && (
                                  <label>
                                    Publish date & time (local)
                                    <input
                                      type="datetime-local"
                                      value={
                                        editing.scheduledAt
                                          ? new Date(
                                              Date.parse(editing.scheduledAt) -
                                                new Date(
                                                  editing.scheduledAt,
                                                ).getTimezoneOffset() *
                                                  60000,
                                            )
                                              .toISOString()
                                              .slice(0, 16)
                                          : ""
                                      }
                                      onChange={(e) =>
                                        setEditing({
                                          ...editing,
                                          scheduledAt: e.target.value
                                            ? new Date(
                                                e.target.value,
                                              ).toISOString()
                                            : null,
                                        })
                                      }
                                    />
                                  </label>
                                )}
                              </div>
                              <div className="quick-edit-actions">
                                <button
                                  disabled={busy}
                                  className="admin-secondary"
                                  onClick={() => setEditing(null)}
                                >
                                  Cancel
                                </button>
                                <button
                                  disabled={busy}
                                  className="admin-primary"
                                  onClick={() =>
                                    void mutate(post, "PUT", editing)
                                  }
                                >
                                  {busy ? "Updating…" : "Update Post"}
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))
                ) : (
                  <tr>
                    <td colSpan={6}>
                      <div className="admin-empty">
                        <FileText size={42} />
                        <h2>No posts found</h2>
                        <p>
                          {filter === "trash"
                            ? "The trash is empty."
                            : "Create a new post or adjust your search and filters."}
                        </p>
                        <Link href="/admin/blogs/new">Add New Post →</Link>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {!!visible.length && (
            <footer className="post-pagination">
              <span>
                Showing {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
                {Math.min(currentPage * PAGE_SIZE, visible.length)} of{" "}
                {visible.length} posts
              </span>
              <div>
                <button
                  aria-label="Previous page"
                  disabled={currentPage === 1}
                  onClick={() => setPage(currentPage - 1)}
                >
                  <ChevronLeft size={16} />
                </button>
                <span>
                  Page {currentPage} of {pages}
                </span>
                <button
                  aria-label="Next page"
                  disabled={currentPage === pages}
                  onClick={() => setPage(currentPage + 1)}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </footer>
          )}
        </div>
      </main>
      {deleting && (
        <div
          className="publishing-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget && !busy) setDeleting(null);
          }}
        >
          <section
            className="publishing-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-title"
          >
            <Trash2 size={28} />
            <h2 id="delete-title">Move post to trash?</h2>
            <p>
              “{deleting.title}” will be removed from the public blog. You can
              restore it as a draft from Trash.
            </p>
            <div>
              <button
                autoFocus
                disabled={busy}
                className="admin-secondary"
                onClick={() => setDeleting(null)}
              >
                Cancel
              </button>
              <button
                disabled={busy}
                className="admin-primary danger"
                onClick={() => void mutate(deleting, "DELETE")}
              >
                {busy ? "Moving…" : "Move to trash"}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
