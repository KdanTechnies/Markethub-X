import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { AccountNavigation } from "@/components/navigation/account-navigation";
import { DashboardOverview } from "@/components/dashboard/overview-card";
import { SessionBoundary } from "@/components/ui/session-boundary";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeading eyebrow="YOUR COMMONPLACE" title="Dashboard" description="A quick view of your marketplace activity." />
      <div className="grid gap-5 md:grid-cols-[190px_1fr]">
        <AccountNavigation active="/dashboard" />
        <div className="space-y-5">
          <SessionBoundary state="loading" />
          <DashboardOverview />
          <section className="grid gap-4 xl:grid-cols-2">
            <DashboardPanel title="My listings" action="Manage listings" href="/listings/new">
              <div className="grid gap-2 sm:grid-cols-3">
                {["Active", "Pending", "Unavailable"].map((status) => <div key={status} className="rounded border border-brand-border p-3"><p className="text-xs text-brand-muted">{status}</p><p className="mt-2 text-sm font-semibold text-brand-ink">No listings yet</p></div>)}
              </div>
            </DashboardPanel>
            <DashboardPanel title="Saved favorites" action="View favorites" href="/favorites">
              <p className="text-sm text-brand-muted">Save an item you love to find it here later.</p>
            </DashboardPanel>
            <DashboardPanel title="Recent messages" action="Open messages" href="/messages">
              <p className="text-sm text-brand-muted">Your conversations will appear here.</p>
            </DashboardPanel>
            <DashboardPanel title="Notifications" action="View notifications" href="/notifications">
              <p className="text-sm text-brand-muted">You’re all caught up.</p>
            </DashboardPanel>
          </section>
          <Link className="inline-flex min-h-10 items-center rounded border border-brand-border px-4 text-sm font-semibold text-brand-navy hover:bg-slate-50" href="/profile">Account settings</Link>
        </div>
      </div>
    </PageContainer>
  );
}

function DashboardPanel({ title, action, href, children }: { title: string; action: string; href: string; children: React.ReactNode }) {
  return <section className="rounded-md border border-brand-border bg-white p-4"><div className="mb-4 flex items-center justify-between gap-3"><h2 className="font-display text-lg font-bold text-brand-navy">{title}</h2><Link className="text-xs font-semibold text-brand-green hover:underline" href={href}>{action}</Link></div>{children}</section>;
}
