"use client";
import {useRef,type ReactNode} from "react";
import {useStudioMotion} from "./StudioMotion";
export function ServicePointerCard({children,className=""}:{children:ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);const {enabled}=useStudioMotion();
 return <div ref={ref} className={"svc-pointer "+className} onPointerMove={event=>{
  if(!enabled||event.pointerType!=="mouse"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const rect=event.currentTarget.getBoundingClientRect();
  ref.current?.style.setProperty("--repel-x",`${-(event.clientX-rect.left-rect.width/2)*.075}px`);
  ref.current?.style.setProperty("--repel-y",`${-(event.clientY-rect.top-rect.height/2)*.075}px`);
 }} onPointerLeave={()=>{ref.current?.style.setProperty("--repel-x","0px");ref.current?.style.setProperty("--repel-y","0px");}}>{children}</div>;
}
