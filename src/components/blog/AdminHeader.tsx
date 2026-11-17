"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FileText,
  PencilLine,
  ExternalLink,
  LogOut,
  Menu,
  X,
  Calendar,
  Upload,
} from "lucide-react";
export function AdminHeader() {
  const router = useRouter(),
    pathname = usePathname();
  const [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [open, setOpen] = useState(false);
  const logout = async () => {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/session", { method: "DELETE" });
      if (!response.ok) throw new Error();
      router.replace("/admin/login");
      router.refresh();
    } catch {
      setError("Could not sign out. Try again.");
      setBusy(false);
    }
  };
  return (
    <>
      <aside className={"publishing-navigation" + (open ? " is-open" : "")}>
        <Link className="admin-logo" href="/admin/blogs">
          <span>S*</span>
          <span>Sparklines Studio</span>
        </Link>
        <button
          className="publishing-nav-close"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        >
          <X size={18} />
        </button>
        <p>CONTENT & PUBLISHING</p>
        <nav>
          <Link
            aria-current={pathname === "/admin/blogs" ? "page" : undefined}
            href="/admin/blogs"
          >
            <FileText size={17} />
            All Blog Posts
          </Link>
          <Link
            aria-current={pathname === "/admin/blogs/new" ? "page" : undefined}
            href="/admin/blogs/new"
          >
            <PencilLine size={17} />
            Add New Post
          </Link>
          <Link
            href="/admin/calendar"
            aria-current={pathname === "/admin/calendar" ? "page" : undefined}
          >
            <Calendar size={17} />
            Content Calendar
          </Link>
          <Link
            href="/admin/import"
            aria-current={pathname === "/admin/import" ? "page" : undefined}
          >
            <Upload size={17} />
            Bulk Upload
          </Link>
          <Link href="/blogs" target="_blank">
            <ExternalLink size={17} />
            View Live Blog
          </Link>
        </nav>
        <footer>
          <span>Studio publishing</span>
          <button disabled={busy} onClick={() => void logout()}>
            <LogOut size={16} />
            {busy ? "Signing out…" : "Sign out"}
          </button>
        </footer>
      </aside>
      <header className="admin-header">
        <div className="publishing-header-title">
          <button
            className="publishing-nav-toggle"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
          <span>Content & Publishing</span>
        </div>
        <nav>
          <Link href="/blogs" target="_blank">
            View blog ↗
          </Link>
          <button disabled={busy} onClick={() => void logout()}>
            {busy ? "Signing out…" : "Sign out"}
          </button>
        </nav>
      </header>
      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
