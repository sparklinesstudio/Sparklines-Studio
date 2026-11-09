import {redirect} from "next/navigation";
import {isBlogAdmin} from "@/lib/blog/auth";
export default async function ProtectedBlogLayout({children}:{children:React.ReactNode}){if(!await isBlogAdmin())redirect("/admin/login");return children;}
