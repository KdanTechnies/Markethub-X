"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Armchair,
  BookOpen,
  Camera,
  CarFront,
  Check,
  ChevronRight,
  Heart,
  Laptop,
  Leaf,
  Search,
  ShieldCheck,
  Shirt,
  Sparkles,
} from "lucide-react";
import { Notice, SiteFooter, SiteHeader } from "@/components/site";
import { useListings } from "@/hooks/use-listings";
import type { Listing } from "@/types/marketplace";

const categories = [
  { name: "Home & living", icon: Armchair, color: "bg-orange-50 text-orange-800" },
  { name: "Tech", icon: Laptop, color: "bg-sky-50 text-sky-800" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-50 text-pink-800" },
  { name: "Books", icon: BookOpen, color: "bg-green-50 text-green-800" },
  { name: "Vehicles", icon: CarFront, color: "bg-amber-50 text-amber-800" },
  { name: "Collectibles", icon: Camera, color: "bg-violet-50 text-violet-800" },
];

function ProductCard({ listing }: { listing: Listing }) {
  return (
    <article className="overflow-hidden rounded border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/listings/${encodeURIComponent(listing.id)}`}
        className="relative grid h-48 place-items-center bg-slate-100 text-slate-400"
        aria-label={`View ${listing.title}`}
      >
        {listing.imageUrl ? (
          <img
            src={listing.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex flex-col items-center gap-2 text-xs">
            <Sparkles size={24} />
            Photo coming soon
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-500">
          <Heart size={17} />
        </span>
      </Link>
      <div className="p-4">
        <p className="font-display text-base font-bold text-brand-navy">
          {listing.currency ?? "₦"}
          {Number(listing.price).toLocaleString()}
        </p>
        <Link
          href={`/listings/${encodeURIComponent(listing.id)}`}
          className="mt-1 block text-sm text-slate-700 hover:text-brand-green"
        >
          {listing.title}
        </Link>
        <p className="mt-2 text-xs text-slate-400">
          {listing.location ?? "Location not provided"}
          {listing.condition ? ` · ${listing.condition}` : ""}
        </p>
      </div>
    </article>
  );
}

function ListingsSection({ search }: { search: string }) {
  const { data, isPending, isError } = useListings(search);
  const items = Array.isArray(data) ? (data as unknown as Listing[]) : (data?.items ?? []);

  if (!process.env.NEXT_PUBLIC_LISTINGS_PATH) {
    return (
      <Notice title="Listings appear here when your marketplace API is connected.">
        Add the listings path from your backend’s OpenAPI docs to <code>.env.local</code>. No sample
        products are shown as live listings.
      </Notice>
    );
  }

  if (isPending)
    return (
      <Notice title="Finding good things nearby…">
        Loading current listings from the marketplace.
      </Notice>
    );
  if (isError)
    return (
      <Notice title="We couldn’t load listings just now.">
        Check the API connection and try again.
      </Notice>
    );
  if (!items.length)
    return <Notice title="No listings found yet.">Try another search, or check back soon.</Notice>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.slice(0, 8).map((item) => (
        <ProductCard key={item.id} listing={item} />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  return (
    <main>
      <SiteHeader />
      <section className="overflow-hidden bg-[#eff4f1]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:min-h-[520px] md:grid-cols-2 md:gap-10 md:py-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] text-emerald-800">
              <span className="mr-2 text-brand-green">●</span>YOUR NEIGHBOURHOOD, REIMAGINED
            </p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Good finds.
              <br />
              <em className="font-serif font-medium text-emerald-800">Good people.</em>
              <br />
              Closer than you think.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              A little less new. A little more meaningful. Find things with a past and people nearby
              to pass them on.
            </p>
            <form
              className="mt-6 flex max-w-lg items-center gap-3 rounded border border-slate-200 bg-white p-1.5 pl-4 shadow-sm"
              onSubmit={(event) => {
                event.preventDefault();
                setTerm(search);
                document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search className="shrink-0 text-slate-400" size={19} />
              <input
                className="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="What are you looking for?"
                aria-label="Search listings"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                Find it <ArrowRight size={15} />
              </button>
            </form>
            <p className="mt-5 text-xs text-slate-500">
              A better kind of local, <strong className="text-slate-700">already happening.</strong>
            </p>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[42%] bg-[#dcece3] sm:aspect-[1.05]">
            <div className="absolute right-8 top-9 size-24 rounded-full bg-amber-200/80 sm:size-32" />
            <div className="absolute bottom-0 h-2/5 w-[130%] rounded-[50%] bg-[#aecdb7]" />
            <div className="absolute bottom-1/4 left-[27%] z-10 h-1/2 w-[46%] rounded-t bg-[#f3d7b5] shadow-[inset_0_0_0_5px_#f9e4c9]">
              <div className="absolute -top-1/5 left-[-6%] h-1/5 w-[112%] bg-[#d18463] [clip-path:polygon(7%_100%,50%_0,93%_100%)]" />
              <div className="absolute left-[-6%] top-[22%] h-6 w-[112%] border-2 border-white bg-[repeating-linear-gradient(90deg,#4e8874_0_15px,#f1e9d7_15px_30px)]" />
              <div className="absolute bottom-0 right-[12%] h-1/2 w-1/4 rounded-t-full border-4 border-[#fff4df] bg-[#668d79]" />
              <div className="absolute bottom-1/4 left-[12%] h-[28%] w-1/4 border-4 border-white bg-[#b8d4d2]" />
            </div>
            <div className="absolute bottom-0 z-20 h-1/4 w-[140%] rounded-[50%] bg-[#709b7b]" />
            <div className="absolute bottom-[14%] left-[17%] z-20 text-5xl">♧</div>
            <div className="absolute bottom-[14%] right-[17%] z-20 text-5xl">♧</div>
            <div className="absolute left-3 top-12 z-30 rounded bg-white p-3 text-xs shadow-lg sm:left-0">
              <p className="text-[9px] tracking-widest text-slate-400">01 / KEEP IT CLOSE</p>
              <strong className="mt-1 block text-brand-navy">Pass on a good thing.</strong>
            </div>
            <div className="absolute bottom-7 right-3 z-30 rounded bg-white p-3 text-xs shadow-lg sm:right-0">
              <p className="text-[9px] tracking-widest text-slate-400">LESS WASTE, MORE WONDER</p>
              <strong className="mt-1 block leading-5 text-brand-navy">
                Someone’s next
                <br />
                favourite thing.
              </strong>
            </div>
            <div className="absolute bottom-1/4 right-[7%] z-30 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[9px] tracking-wide text-emerald-800 shadow">
              <Heart size={14} fill="currentColor" />
              GOOD THINGS, SHARED
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 pb-5 text-[9px] tracking-[0.18em] text-slate-400 sm:px-8">
          <span>MADE FOR THE NEARBY</span>
          <span className="h-px w-12 bg-slate-300" />
          <span>BUY · SELL · PASS IT ON</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" id="categories">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">
              A PLACE FOR THE THINGS YOU LOVE
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl">
              Find your kind
              <br />
              of <em className="font-serif text-emerald-800">something.</em>
            </h2>
          </div>
          <Link
            className="mb-1 flex shrink-0 items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-brand-green"
            href="/marketplace"
          >
            All categories <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon: Icon, color }, index) => (
            <Link
              key={name}
              href={`/marketplace?category=${encodeURIComponent(name)}`}
              className={`relative flex h-32 flex-col justify-between rounded border border-brand-border p-4 transition hover:-translate-y-1 hover:shadow-md ${color}`}
            >
              <span className="absolute right-3 top-3 text-[9px] opacity-60">0{index + 1}</span>
              <Icon size={28} strokeWidth={1.5} />
              <span className="flex items-center justify-between text-xs font-semibold text-brand-ink">
                {name}
                <ChevronRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20" id="discover">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">
              FRESH FROM THE NEIGHBOURHOOD
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl">
              Just <em className="font-serif text-emerald-800">arrived.</em>
            </h2>
          </div>
          <Link
            className="mb-1 flex shrink-0 items-center gap-2 text-xs font-semibold text-emerald-800"
            href="/marketplace"
          >
            Explore marketplace <ArrowUpRight size={15} />
          </Link>
        </div>
        <ListingsSection search={term} />
      </section>

      <section className="bg-[#f0f4ed] px-5 py-16 sm:px-8 sm:py-20" id="how">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3 text-emerald-800">
            <Leaf size={25} />
            <span className="text-[10px] font-bold tracking-[0.17em]">
              A SMALLER WAY TO MAKE A DIFFERENCE
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-brand-navy sm:text-4xl">
                Great things don’t
                <br />
                have to be <em className="font-serif text-emerald-800">brand new.</em>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Every good find has a story. Every sale keeps something useful in the world a little
                longer. And every neighbour you meet makes your corner of it feel a little closer.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  {
                    n: "01",
                    title: "Find your thing",
                    copy: "Browse thoughtful finds from people close by.",
                  },
                  {
                    n: "02",
                    title: "Meet your neighbour",
                    copy: "Chat directly and agree on a public meetup.",
                  },
                  {
                    n: "03",
                    title: "Pass it on",
                    copy: "Inspect together and exchange in person.",
                  },
                ].map((step) => (
                  <div key={step.n} className="border-t border-emerald-900/15 pt-3">
                    <span className="text-[10px] tracking-widest text-brand-green">{step.n}</span>
                    <h3 className="mt-2 text-xs font-semibold text-brand-navy">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{step.copy}</p>
                  </div>
                ))}
              </div>
              <Link
                className="mt-7 inline-flex items-center gap-2 rounded bg-brand-green px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-700"
                href="/marketplace"
              >
                Start exploring <ArrowRight size={15} />
              </Link>
            </div>
            <div className="hidden items-center justify-center text-[150px] leading-none text-emerald-800/30 lg:flex">
              <span className="relative">
                ✳
                <span className="absolute inset-0 grid place-items-center text-xs font-bold leading-5 tracking-widest text-emerald-900">
                  GOOD THINGS
                  <br />
                  GO AROUND.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-7 px-5 py-16 sm:px-8 md:grid-cols-[55px_1fr_1fr] md:items-center md:py-20"
        id="safety"
      >
        <div className="grid size-11 place-items-center rounded-full bg-emerald-100 text-emerald-800">
          <ShieldCheck size={23} />
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500">
            A LITTLE CARE GOES A LONG WAY
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-navy">
            Local feels better
            <br />
            when it feels <em className="font-serif text-emerald-800">safe.</em>
          </h2>
        </div>
        <div className="border-t border-brand-border pt-4 text-xs text-slate-600 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          {[
            "Meet somewhere public and convenient",
            "Inspect the item before you agree",
            "Pay the seller directly at your meetup",
          ].map((point) => (
            <p key={point} className="my-3 flex items-center gap-2">
              <Check size={15} className="text-brand-green" />
              {point}
            </p>
          ))}
          <p className="mt-5 max-w-sm text-[11px] leading-5 text-slate-500">
            Commonplace connects people. Buyers and sellers arrange meetups and handle payment
            directly between themselves.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy px-5 py-16 text-center text-white sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute right-[12%] top-0 text-[120px] text-sky-200/10">
          ✳
        </div>
        <p className="text-[10px] font-bold tracking-[0.16em] text-emerald-200">
          YOUR NEXT GOOD THING IS OUT THERE
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Make room for
          <br />
          <em className="font-serif text-emerald-200">something good.</em>
        </h2>
        <div className="mt-7 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-xs font-semibold text-emerald-900 hover:bg-emerald-50"
          >
            Explore nearby <ArrowUpRight size={15} />
          </Link>
          <Link href="/register" className="text-left text-[10px] text-slate-300">
            Have something to pass on?
            <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-200">
              List it free <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
