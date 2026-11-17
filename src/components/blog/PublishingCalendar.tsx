"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { AdminHeader } from "./AdminHeader";
import type { BlogPost } from "@/lib/blog/types";
const dayKey = (date: Date) =>
  [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
function postDate(post: BlogPost) {
  return new Date(post.scheduledAt || post.publishedAt || post.createdAt);
}
export function PublishingCalendar({ posts }: { posts: BlogPost[] }) {
  const [month, setMonth] = useState(() => new Date()),
    [selected, setSelected] = useState(() => dayKey(new Date()));
  const first = new Date(month.getFullYear(), month.getMonth(), 1),
    start = new Date(first);
  start.setDate(1 - first.getDay());
  const days = Array.from({ length: 42 }, (_, i) => {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    return day;
  });
  const active = posts.filter((p) => !p.deletedAt),
    selectedPosts = active.filter((p) => dayKey(postDate(p)) === selected);
  const changeMonth = (offset: number) =>
    setMonth(new Date(month.getFullYear(), month.getMonth() + offset, 1));
  return (
    <>
      <AdminHeader />
      <main className="admin-container">
        <div className="admin-page-heading">
          <div>
            <h1>Content Calendar</h1>
            <p>Plan your drafts and upcoming publications.</p>
          </div>
          <Link className="admin-primary" href="/admin/blogs/new">
            <Plus size={16} />
            New Post
          </Link>
        </div>
        <div className="publishing-calendar-heading">
          <button aria-label="Previous month" onClick={() => changeMonth(-1)}>
            <ChevronLeft size={20} />
          </button>
          <h2>
            {month.toLocaleDateString(undefined, {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button aria-label="Next month" onClick={() => changeMonth(1)}>
            <ChevronRight size={20} />
          </button>
          <button
            onClick={() => {
              const today = new Date();
              setMonth(today);
              setSelected(dayKey(today));
            }}
          >
            Today
          </button>
        </div>
        <div className="publishing-calendar">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <strong key={d}>{d}</strong>
          ))}
          {days.map((day) => {
            const key = dayKey(day),
              entries = active.filter((p) => dayKey(postDate(p)) === key);
            return (
              <button
                key={key}
                aria-label={
                  day.toLocaleDateString() + ", " + entries.length + " posts"
                }
                aria-pressed={selected === key}
                className={
                  day.getMonth() !== month.getMonth() ? "calendar-muted" : ""
                }
                onClick={() => setSelected(key)}
              >
                <span
                  className={key === dayKey(new Date()) ? "calendar-today" : ""}
                >
                  {day.getDate()}
                </span>
                {entries.slice(0, 3).map((p) => (
                  <small
                    className={"admin-status admin-status-" + p.status}
                    key={p.id}
                  >
                    {p.title}
                  </small>
                ))}
                {entries.length > 3 && (
                  <small>+{entries.length - 3} more</small>
                )}
              </button>
            );
          })}
        </div>
        <section className="calendar-selected">
          <h2>Posts for the selected day</h2>
          {selectedPosts.length ? (
            selectedPosts.map((p) => (
              <Link key={p.id} href={"/admin/blogs/" + p.slug}>
                <span className={"admin-status admin-status-" + p.status}>
                  {p.status}
                </span>
                <strong>{p.title}</strong>
                <small>{postDate(p).toLocaleString()}</small>
              </Link>
            ))
          ) : (
            <p>No posts planned for this day.</p>
          )}
        </section>
      </main>
    </>
  );
}
