"use client";
import Link from "next/link";
export default function AdminError({reset}:{reset:()=>void}){return <main className="admin-container"><h1>We couldn’t load this page.</h1><p>Try again in a moment.</p><button type="button" onClick={reset}>Try again</button><Link href="/admin/blogs">Back to articles</Link></main>;}
