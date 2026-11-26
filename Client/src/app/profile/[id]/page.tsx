import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";

export default async function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <PageContainer>
      <PageHeading eyebrow="SELLER PROFILE" title="Public profile" description={`Profile reference ${id}.`} />
      <div className="space-y-5">
        <IntegrationNotice domain="users">Public profile fields, verification indicators, reviews, and active listings await documented responses. Private verification documents are never displayed here.</IntegrationNotice>
        <section className="flex flex-col gap-4 rounded-md border border-brand-border bg-white p-5 sm:flex-row sm:items-center">
          <div aria-hidden="true" className="grid size-20 shrink-0 place-items-center rounded-full bg-slate-100 text-2xl text-brand-muted">?</div>
          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            {["Display name", "Location", "Member since", "Verification status"].map((label) => <div key={label}><p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p><p className="mt-1 text-sm text-brand-ink">Awaiting backend data</p></div>)}
          </div>
        </section>
        <section><h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Rating and reviews</h2><EmptyState title="No reviews loaded" description="Rating summaries and reviewer details must be returned by the backend." /></section>
        <section><h2 className="mb-3 font-display text-xl font-bold text-brand-navy">Active listings</h2><EmptyState title="No listings loaded" description="Seller listings need the profile/listing endpoints." /></section>
      </div>
    </PageContainer>
  );
}
