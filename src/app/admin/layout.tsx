import type {Metadata} from "next";
import "@/components/blog/admin.css";
export const metadata:Metadata={title:"Studio Publishing | Sparklines Studio",robots:{index:false,follow:false}};
export default function AdminLayout({children}:{children:React.ReactNode}){return <div className="blog-admin">{children}</div>;}
