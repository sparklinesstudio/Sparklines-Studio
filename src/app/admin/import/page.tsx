import { redirect } from "next/navigation";
import { isBlogAdmin } from "@/lib/blog/auth";
import { BulkBlogImport } from "@/components/blog/BulkBlogImport";
export default async function Page() {
  if (!(await isBlogAdmin())) redirect("/admin/login");
  return <BulkBlogImport />;
}
