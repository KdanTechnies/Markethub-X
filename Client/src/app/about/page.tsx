import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { PageHeader, SiteFooter } from "@/components/site";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link
          href="/marketplace"
          className="flex items-center gap-2 text-xs font-semibold text-emerald-800"
        >
          Browse marketplace <ArrowRight size={14} />
        </Link>
      </PageHeader>
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-5 text-brand-green">
          <Leaf size={28} />
        </div>
        <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">
          GOOD THINGS GO AROUND
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl">
          A marketplace for <em className="font-serif text-emerald-800">the nearby.</em>
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-slate-600">
          <p>
            Commonplace helps neighbours find, pass on, and make more use of the things around them.
            Buyers and sellers connect directly, arrange an in-person meetup, inspect the item, and
            handle payment directly between themselves.
          </p>
          <p>
            We don’t process or hold payments. Meet in a public place and take time to inspect an
            item before agreeing to exchange.
          </p>
        </div>
        <Link
          href="/marketplace"
          className="mt-8 inline-flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
        >
          Explore nearby <ArrowRight size={15} />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
