import {redirect} from "next/navigation";
import {isBlogAdmin} from "@/lib/blog/auth";
import {AdminLogin} from "@/components/blog/AdminLogin";
export default async function LoginPage(){if(await isBlogAdmin())redirect("/admin/blogs");return <main><AdminLogin/></main>;}
