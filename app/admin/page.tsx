import { redirect } from "next/navigation";

export default function AdminIndexPage() {
  // TODO: Replace with real authentication check
  // For example, reading a session cookie or token
  const isAuthenticated = false; 

  if (isAuthenticated) {
    redirect("/admin/posts");
  } else {
    redirect("/admin/login");
  }
}
