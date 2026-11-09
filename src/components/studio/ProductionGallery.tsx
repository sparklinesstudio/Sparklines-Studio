"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { productionVideoGroups, type MasonryVideoItem } from "@/data/videoProductionGallery";

export function ProductionGallery() {
  const [visible, setVisible] = useState<Record<string,number>>({});
  const [selected, setSelected] = useState<MasonryVideoItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected || !dialogRef.current) return;
    if (!dialogRef.current.open) dialogRef.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  const card = (item: MasonryVideoItem) => <button type="button" key={item.id} className="production-video-card group relative block rounded-2xl overflow-hidden border border-[#D5D2C9] bg-black hover:shadow-2xl hover:border-blue-600 transition-all" aria-label={"Watch " + item.title} onClick={()=>setSelected(item)}><span className={"relative block w-full "+item.aspect}><Image src={item.poster} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500"/><span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 pt-10 bg-gradient-to-t from-black/80 to-transparent text-white"><span className="text-xs text-left">{item.title}</span><ArrowUpRight className="w-4 h-4 shrink-0"/></span></span></button>;
  return <>
    {productionVideoGroups.map(group=>{const count=visible[group.id]??3;return <section id={group.id} key={group.id} className="bg-[#F7F6F2] py-20 sm:py-28 px-5 sm:px-8 lg:px-12 border-b border-[#D5D2C9]"><div className="max-w-7xl mx-auto"><h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.05] mb-6 font-sans">{group.title}<span className="text-blue-600">.</span></h2><p className="text-sm sm:text-base text-zinc-600 max-w-3xl mb-10">{group.description}</p><div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">{[0,1,2,3].map(column=><div key={column} className="flex flex-col gap-4 sm:gap-6">{group.items.filter((_,index)=>index%4===column).map(card)}</div>)}</div><div className="sm:hidden space-y-4">{group.items.slice(0,count).map(card)}{count<group.items.length&&<button type="button" className="w-full py-3.5 px-6 bg-white hover:bg-zinc-50 border border-[#D5D2C9] rounded-2xl text-xs font-semibold uppercase tracking-wider hover:text-blue-600" onClick={()=>setVisible(current=>({...current,[group.id]:count+5}))}>View more</button>}</div></div></section>;})}
    <dialog ref={dialogRef} className="production-video-dialog" aria-label={selected?.title || "Video preview"} onClose={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)dialogRef.current?.close();}}>{selected&&<div className="production-video-dialog-content" data-lenis-prevent><div className="flex justify-between items-center gap-6 mb-4"><h2 className="text-lg sm:text-2xl text-white font-semibold">{selected.title}</h2><button autoFocus type="button" aria-label="Close video preview" onClick={()=>dialogRef.current?.close()} className="p-2 text-white"><X size={24}/></button></div><video key={selected.src} src={selected.src} poster={selected.poster} controls autoPlay playsInline className="w-full max-h-[78dvh] bg-black"/></div>}</dialog>
  </>;
}
