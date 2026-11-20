"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Notice, PageHeader } from "@/components/site";
import { useListings } from "@/hooks/use-listings";
import type { Listing } from "@/types/marketplace";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { data, isPending, isError } = useListings(query);
  const items = Array.isArray(data) ? (data as unknown as Listing[]) : (data?.items ?? []);

  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link href="/" className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
          <ArrowLeft size={15} /> Home
        </Link>
      </PageHeader>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">
          THE NEIGHBOURHOOD MARKETPLACE
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-brand-navy sm:text-5xl">
          Find a good <em className="font-serif text-emerald-800">something.</em>
        </h1>
        <p className="mt-3 text-sm text-slate-500">Thoughtful finds, shared by people nearby.</p>
        <form
          className="mt-7 flex max-w-xl items-center gap-3 rounded border border-brand-border bg-white p-1.5 pl-4 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            setQuery(search);
          }}
        >
          <Search className="shrink-0 text-slate-400" size={18} />
          <input
            className="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try a chair, a camera, a good book…"
            aria-label="Search listings"
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
          >
            Search <ArrowRight size={15} />
          </button>
        </form>
        <div className="mt-10">
          {!process.env.NEXT_PUBLIC_LISTINGS_PATH ? (
            <Notice title="Marketplace listings aren’t connected yet.">
              Connect the listings endpoint from your backend’s OpenAPI contract to show current
              items here.
            </Notice>
          ) : isPending ? (
            <Notice title="Loading current listings…" />
          ) : isError ? (
            <Notice title="We couldn’t load listings.">
              Please check the API connection and try again.
            </Notice>
          ) : items.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    href={`/listings/${encodeURIComponent(item.id)}`}
                    className="grid h-48 place-items-center bg-slate-100 text-xs text-slate-400"
                  >
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      "Photo coming soon"
                    )}
                  </Link>
                  <div className="p-4">
                    <p className="font-display font-bold text-brand-navy">
                      {item.currency ?? "₦"}
                      {Number(item.price).toLocaleString()}
                    </p>
                    <Link
                      className="mt-1 block text-sm text-slate-700 hover:text-brand-green"
                      href={`/listings/${encodeURIComponent(item.id)}`}
                    >
                      {item.title}
                    </Link>
                    <p className="mt-2 text-xs text-slate-400">
                      {item.location ?? "Location not provided"}
                      {item.condition ? ` · ${item.condition}` : ""}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <Notice title="No listings match that search.">Try a different search term.</Notice>
          )}
        </div>
      </section>
    </main>
  );
}
