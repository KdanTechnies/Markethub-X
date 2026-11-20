import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PageHeader, SiteFooter } from "@/components/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link href="/" className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
          Home <ArrowRight size={14} />
        </Link>
      </PageHeader>
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-5 text-brand-green">
          <Mail size={27} />
        </div>
        <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">WE’RE NEARBY</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl">
          Get in <em className="font-serif text-emerald-800">touch.</em>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
          Support contact details will be added when the marketplace operator provides them. For
          now, browse the marketplace or return to the home page.
        </p>
        <Link
          href="/marketplace"
          className="mt-8 inline-flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
        >
          Browse marketplace <ArrowRight size={15} />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
