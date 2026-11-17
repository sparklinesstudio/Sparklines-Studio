import { redirect } from "next/navigation";
import { isBlogAdmin } from "@/lib/blog/auth";
import { listBlogs } from "@/lib/blog/store";
import { PublishingCalendar } from "@/components/blog/PublishingCalendar";
export default async function Page() {
  if (!(await isBlogAdmin())) redirect("/admin/login");
  return <PublishingCalendar posts={await listBlogs(true)} />;
}
