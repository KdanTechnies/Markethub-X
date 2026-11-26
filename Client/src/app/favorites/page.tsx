import Link from "next/link";
import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";

export default function FavoritesPage() {
  return <PageContainer><PageHeading eyebrow="SAVED FOR LATER" title="Favorites" description="Keep the finds you love close at hand." /><div className="space-y-5"><IntegrationNotice domain="users">Your saved finds will be easy to find here.</IntegrationNotice><EmptyState title="No favorites yet" description="Browse the marketplace and save something you love." /><Link href="/marketplace" className="inline-flex rounded bg-brand-green px-4 py-3 text-sm font-semibold text-white">Browse marketplace</Link></div></PageContainer>;
}
