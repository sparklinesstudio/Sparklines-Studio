"use client";
import Link from "next/link";
export default function BlogError({reset}:{reset:()=>void}){return <main className="min-h-screen flex flex-col justify-center items-center gap-6 px-6 text-center bg-[#f5f5f1]"><h1 className="text-4xl font-semibold">Our stories are taking a moment.</h1><p>We couldn’t load the articles. Please try again shortly.</p><button type="button" onClick={reset} className="px-6 py-3 bg-blue-600 text-white">Try again</button><Link href="/">Back to the studio</Link></main>;}
