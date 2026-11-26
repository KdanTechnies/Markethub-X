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
      <PageHeading eyebrow="THE NEIGHBOURHOOD MARKETPLACE" title="Find a good something." description="Search, narrow, and sort marketplace listings. Live results await the backend contract." />
      <div className="space-y-5">
        <MarketplaceFilters onApply={setFilters} />
        {filters ? <p role="status" className="text-xs text-brand-muted">Filter choices saved in this view; no request was sent.</p> : null}
        <IntegrationNotice domain="listings">Listing results, category options, sort keys, pagination, and seller filters will use documented API values after the OpenAPI contract is provided.</IntegrationNotice>
        <EmptyState title="No live listings loaded" description="This page does not insert sample products. Connect the documented listings endpoint to display current items." />
        <nav aria-label="Marketplace pagination" className="flex items-center justify-center gap-3 text-xs text-brand-muted">
          <button type="button" disabled className="rounded border border-brand-border bg-white px-3 py-2 opacity-50">Previous</button>
          <span>Page information awaits backend pagination support</span>
          <button type="button" disabled className="rounded border border-brand-border bg-white px-3 py-2 opacity-50">Next</button>
        </nav>
      </div>
    </PageContainer>
  );
}
