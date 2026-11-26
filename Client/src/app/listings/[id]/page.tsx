import Link from "next/link";
import { ArrowLeft, Heart, ImageOff, MessageCircle, ShieldAlert } from "lucide-react";
import { PageContainer, PageHeading } from "@/components/layout/page-container";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { EmptyState } from "@/components/ui/async-state";
import { Button } from "@/components/ui/button";

export default async function ListingDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <PageContainer>
      <Link href="/marketplace" className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-emerald-800"><ArrowLeft size={14} />Back to marketplace</Link>
      <IntegrationNotice domain="listings">Listing information and photos will appear here.</IntegrationNotice>
      <div className="mt-6 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid min-h-72 place-items-center rounded-md border border-brand-border bg-white text-brand-muted"><div className="text-center"><ImageOff className="mx-auto" size={35} /><p className="mt-2 text-xs">Photos will appear here</p></div></div>
        <div>
          <p className="text-xs text-brand-muted">Listing reference: {id}</p>
          <PageHeading title="Listing details" description="This listing isn’t available right now. Please check back soon." />
          <div className="flex flex-wrap gap-2"><Button disabled><MessageCircle size={16} />Contact seller</Button><Button disabled variant="secondary"><Heart size={16} />Save to favorites</Button><Button disabled variant="quiet"><ShieldAlert size={16} />Report</Button></div>
          <div className="mt-6"><EmptyState title="Seller details unavailable" description="No profile or verification status is fabricated." /></div>
        </div>
      </div>
      <section className="mt-10"><h2 className="mb-4 font-display text-xl font-bold text-brand-navy">Related listings</h2><EmptyState title="No related listings yet" description="Check back later for more finds like this." /></section>
    </PageContainer>
  );
}
