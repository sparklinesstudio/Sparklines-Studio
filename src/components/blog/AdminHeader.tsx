"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
export function AdminHeader(){const router=useRouter();const [busy,setBusy]=useState(false);const [error,setError]=useState("");return <><header className="admin-header"><Link className="admin-logo" href="/admin/blogs"><span>S*</span><span>Studio publishing</span></Link><nav><Link href="/blogs" target="_blank">View blog ↗</Link><button type="button" disabled={busy} onClick={async()=>{setBusy(true);setError("");try{const response=await fetch("/api/admin/session",{method:"DELETE"});if(!response.ok)throw new Error();router.replace("/admin/login");router.refresh();}catch{setError("Could not sign out. Try again.");setBusy(false);}}}>{busy?"Signing out…":"Sign out"}</button></nav></header>{error&&<p className="admin-error" role="alert">{error}</p>}</>;}
