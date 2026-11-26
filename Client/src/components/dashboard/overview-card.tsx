import { EmptyState } from "@/components/ui/async-state";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import Link from "next/link";

export function DashboardOverview() {
  return (
    <div className="space-y-5">
      <IntegrationNotice domain="users">Your marketplace activity will appear here.</IntegrationNotice>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{["My listings", "Favorites", "Messages", "Notifications"].map((label) => <div key={label} className="rounded-md border border-brand-border bg-white p-4"><p className="text-xs text-brand-muted">{label}</p><p className="mt-3 text-sm font-semibold text-brand-navy">Nothing here yet</p></div>)}</div>
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="space-y-3 rounded-md border border-brand-border bg-white p-4">
          <div className="flex items-center justify-between"><h2 className="font-display font-bold text-brand-navy">My listings</h2><Link href="/listings/new" className="text-xs font-semibold text-emerald-800">Create listing</Link></div>
          <EmptyState title="No listings yet" description="Your listings will appear here when you post an item." />
        </section>
        <section className="space-y-3 rounded-md border border-brand-border bg-white p-4">
          <div className="flex items-center justify-between"><h2 className="font-display font-bold text-brand-navy">Favorites preview</h2><Link href="/favorites" className="text-xs font-semibold text-emerald-800">View favorites</Link></div>
          <EmptyState title="No favorites yet" description="Save items you love and they will be easy to find here." />
        </section>
        <section className="space-y-3 rounded-md border border-brand-border bg-white p-4">
          <div className="flex items-center justify-between"><h2 className="font-display font-bold text-brand-navy">Recent messages</h2><Link href="/messages" className="text-xs font-semibold text-emerald-800">Open messages</Link></div>
          <EmptyState title="No messages yet" description="Your conversations with buyers and sellers will appear here." />
        </section>
        <section className="space-y-3 rounded-md border border-brand-border bg-white p-4">
          <div className="flex items-center justify-between"><h2 className="font-display font-bold text-brand-navy">Notifications</h2><Link href="/notifications" className="text-xs font-semibold text-emerald-800">View notifications</Link></div>
          <EmptyState title="You’re all caught up" description="New account updates will appear here." />
        </section>
      </div>
      <Link href="/profile" className="inline-block text-xs font-semibold text-emerald-800 underline">Account settings</Link>
    </div>
  );
}
