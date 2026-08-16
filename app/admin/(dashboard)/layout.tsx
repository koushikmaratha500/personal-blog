import Link from "next/link";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-surface">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border shrink-0">
        <div className="p-6 h-[72px] border-b border-border flex items-center">
          <Link href="/admin/posts" className="font-display text-xl font-semibold text-primary">
            Insightful Admin
          </Link>
        </div>
        <nav className="p-4 space-y-2 text-sm font-medium">
          <Link href="/admin/posts" className="block px-4 py-2 rounded-md hover:bg-muted text-foreground transition-colors">
            Manage Posts
          </Link>
          <Link href="/admin/profile" className="block px-4 py-2 rounded-md hover:bg-muted text-foreground transition-colors">
            Profile Settings
          </Link>
          <div className="pt-8 mt-8 border-t border-border space-y-2">
            <Link href="/" className="block px-4 py-2 rounded-md hover:bg-muted text-muted-foreground transition-colors">
              Back to Site
            </Link>
            <Link href="/admin/login" className="block px-4 py-2 rounded-md hover:bg-muted text-error transition-colors">
              Log out
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
