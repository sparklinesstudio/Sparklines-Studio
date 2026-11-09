import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/structuredData";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav aria-label="Breadcrumb" className="border-b border-[#D5D2C9] bg-[#F7F6F2] text-[#0B0C10] px-6 sm:px-12 lg:px-16 py-5 text-xs">
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">{items.map((item, index) => <li key={item.path} className="flex items-center gap-3">
      {index > 0 && <span aria-hidden="true" className="text-zinc-400">/</span>}
      {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path} className="hover:text-blue-600 underline-offset-4 hover:underline">{item.name}</Link>}
    </li>)}</ol>
  </nav>;
}
