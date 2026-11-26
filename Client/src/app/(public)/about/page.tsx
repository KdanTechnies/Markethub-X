import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { PageContainer, PageHeading } from "@/components/layout/page-container";

export default function AboutPage() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <Leaf className="mb-5 text-brand-green" size={30} />
      <PageHeading eyebrow="GOOD THINGS GO AROUND" title="A marketplace for the nearby." description="Commonplace helps neighbours find, pass on, and make more use of the things around them." />
      <div className="max-w-2xl space-y-4 text-sm leading-7 text-brand-muted">
        <p>Buyers and sellers connect directly, arrange an in-person meetup, inspect the item, and handle payment directly between themselves.</p>
        <p>Commonplace does not process or hold payments. Meet in a public place and take time to inspect an item before agreeing to exchange.</p>
      </div>
      <Link href="/marketplace" className="mt-8 inline-flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white">Explore nearby <ArrowRight size={15} /></Link>
    </PageContainer>
  );
}
