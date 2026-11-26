"use client";

import { useState } from "react";
import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { MarketplaceFilters, type MarketplaceFilterDraft } from "@/components/marketplace/marketplace-filters";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";

export default function MarketplacePage() {
  const [filters, setFilters] = useState<MarketplaceFilterDraft | null>(null);
  return (
    <PageContainer>
      <PageHeading eyebrow="THE NEIGHBOURHOOD MARKETPLACE" title="Find a good something." description="Search, narrow, and sort finds from people nearby." />
      <div className="space-y-5">
        <MarketplaceFilters onApply={setFilters} />
        {filters ? <p role="status" className="text-xs text-brand-muted">Your filters are ready.</p> : null}
        <IntegrationNotice domain="listings">New listings from your neighbourhood will appear here.</IntegrationNotice>
        <EmptyState title="No listings just yet" description="Check back soon or be the first to list something in your area." />
        <nav aria-label="Marketplace pagination" className="flex items-center justify-center gap-3 text-xs text-brand-muted">
          <button type="button" disabled className="rounded border border-brand-border bg-white px-3 py-2 opacity-50">Previous</button>
          <span>More finds are on the way</span>
          <button type="button" disabled className="rounded border border-brand-border bg-white px-3 py-2 opacity-50">Next</button>
        </nav>
      </div>
    </PageContainer>
  );
}
