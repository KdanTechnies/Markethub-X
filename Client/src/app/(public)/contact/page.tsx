import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PageContainer, PageHeading } from "@/components/layout/page-container";

export default function ContactPage() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <Mail className="mb-5 text-brand-green" size={28} />
      <PageHeading eyebrow="WE’RE NEARBY" title="Get in touch." description="Support contact details will be added when the marketplace operator provides them." />
      <p className="max-w-xl text-sm leading-7 text-brand-muted">For now, browse the marketplace or return to the home page. No contact address has been invented.</p>
      <Link href="/marketplace" className="mt-8 inline-flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white">Browse marketplace <ArrowRight size={15} /></Link>
    </PageContainer>
  );
}
