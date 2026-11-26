import Link from "next/link";
import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";

export default function FavoritesPage() {
  return <PageContainer><PageHeading eyebrow="SAVED FOR LATER" title="Favorites" description="Saved items and availability are synchronized with the backend when its contract is available." /><div className="space-y-5"><IntegrationNotice domain="users">Favorite listing records, remove actions, and unavailable states await the favorites API contract.</IntegrationNotice><EmptyState title="No saved listings loaded" description="Your favorites will appear here after the backend returns them. No sample products are shown." /><Link href="/marketplace" className="inline-flex rounded bg-brand-green px-4 py-3 text-sm font-semibold text-white">Browse marketplace</Link></div></PageContainer>;
}
