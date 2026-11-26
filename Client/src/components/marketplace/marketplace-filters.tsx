"use client";

import { useState, type FormEvent } from "react";
import { SlidersHorizontal } from "lucide-react";
import { useUiStore } from "@/stores/ui.store";
import { Button } from "@/components/ui/button";
import { FormField, TextInput } from "@/components/ui/form-field";

export type MarketplaceFilterDraft = {
  search: string;
  location: string;
  minimumPrice: string;
  maximumPrice: string;
  condition: string;
  verifiedSeller: boolean;
  negotiable: boolean;
  sort: string;
};

const initialFilters: MarketplaceFilterDraft = {
  search: "",
  location: "",
  minimumPrice: "",
  maximumPrice: "",
  condition: "",
  verifiedSeller: false,
  negotiable: false,
  sort: "",
};

export function MarketplaceFilters({ onApply }: { onApply?: (filters: MarketplaceFilterDraft) => void }) {
  const [filters, setFilters] = useState(initialFilters);
  const drawerOpen = useUiStore((state) => state.filterDrawerOpen);
  const setDrawerOpen = useUiStore((state) => state.setFilterDrawerOpen);
  const update = <K extends keyof MarketplaceFilterDraft>(key: K, value: MarketplaceFilterDraft[K]) =>
    setFilters((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApply?.(filters);
    setDrawerOpen(false);
  };

  return (
    <form onSubmit={submit} className="rounded-md border border-brand-border bg-white p-4">
      <button type="button" className="mb-4 flex items-center gap-2 text-sm font-semibold text-brand-navy md:hidden" onClick={() => setDrawerOpen(!drawerOpen)} aria-expanded={drawerOpen}><SlidersHorizontal size={17} />Filters</button>
      <div className={`${drawerOpen ? "grid" : "hidden md:grid"} gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        <FormField label="Search" id="filter-search"><TextInput id="filter-search" value={filters.search} onChange={(event) => update("search", event.target.value)} placeholder="Search items" /></FormField>
        <FormField label="Location" id="filter-location"><TextInput id="filter-location" value={filters.location} onChange={(event) => update("location", event.target.value)} placeholder="Town or area" /></FormField>
        <FormField label="Minimum price" id="filter-min-price"><TextInput id="filter-min-price" inputMode="decimal" value={filters.minimumPrice} onChange={(event) => update("minimumPrice", event.target.value)} placeholder="Any" /></FormField>
        <FormField label="Maximum price" id="filter-max-price"><TextInput id="filter-max-price" inputMode="decimal" value={filters.maximumPrice} onChange={(event) => update("maximumPrice", event.target.value)} placeholder="Any" /></FormField>
        <FormField label="Condition" id="filter-condition"><TextInput id="filter-condition" value={filters.condition} onChange={(event) => update("condition", event.target.value)} placeholder="Any condition" /></FormField>
        <FormField label="Sort by" id="filter-sort"><select id="filter-sort" className="mt-1 block w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm" value={filters.sort} onChange={(event) => update("sort", event.target.value)}><option value="">Default</option><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="price-asc">Lowest price</option><option value="price-desc">Highest price</option></select></FormField>
        <label className="flex items-center gap-2 self-end py-3 text-xs text-brand-ink"><input type="checkbox" checked={filters.verifiedSeller} onChange={(event) => update("verifiedSeller", event.target.checked)} />Verified seller</label>
        <label className="flex items-center gap-2 self-end py-3 text-xs text-brand-ink"><input type="checkbox" checked={filters.negotiable} onChange={(event) => update("negotiable", event.target.checked)} />Negotiable</label>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-brand-border pt-4"><p className="text-[11px] text-brand-muted">Choose what matters to you.</p><Button type="submit">Apply filters</Button></div>
    </form>
  );
}
