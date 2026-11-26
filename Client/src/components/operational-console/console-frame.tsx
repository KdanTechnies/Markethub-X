import type { ReactNode } from "react";
import { AdminNavigation } from "./admin-navigation";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { SessionBoundary } from "@/components/ui/session-boundary";

export function ConsoleFrame({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-paper">
      <header className="border-b border-brand-border bg-brand-navy px-4 py-4 text-white sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Commonplace · Operations</p><h1 className="mt-1 font-display text-xl font-bold">{title}</h1></div></header>
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-8 md:grid-cols-[220px_1fr]">
        <AdminNavigation />
        <main className="min-w-0 space-y-5"><SessionBoundary state="loading" /><IntegrationNotice domain="admin">Welcome to the Commonplace operations workspace.</IntegrationNotice>{children}</main>
      </div>
    </div>
  );
}
