"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Notice, PageHeader } from "@/components/site";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link href="/" className="flex items-center gap-2 text-xs font-semibold text-emerald-800"><ArrowLeft size={15} /> Home</Link>
      </PageHeader>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">THE NEIGHBOURHOOD MARKETPLACE</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl">Find a good <em className="font-serif text-emerald-800">something.</em></h1>
        <p className="mt-3 text-sm text-slate-500">Thoughtful finds, shared by people nearby.</p>
        <form className="mt-7 flex max-w-xl items-center gap-3 rounded border border-brand-border bg-white p-1.5 pl-4 shadow-sm" onSubmit={(event) => { event.preventDefault(); setQuery(search); }}>
          <Search className="shrink-0 text-slate-400" size={18} />
          <input className="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm outline-none placeholder:text-slate-400" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try a chair, a camera, a good book…" aria-label="Search listings" />
          <button type="submit" className="flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-700">Search <ArrowRight size={15} /></button>
        </form>
        <div className="mt-10">
          <Notice title={query ? `Search for “${query}” needs the backend API contract.` : "Marketplace listings aren’t connected yet."}>
            No results are fabricated. Listing data and search will be connected when the backend’s documented endpoints, filters, and response shape are available.
          </Notice>
        </div>
      </section>
    </main>
  );
}
