import Link from "next/link";
import Image from "next/image";
import { ImageOff } from "lucide-react";

export type ListingCardView = {
  id: string;
  title: string;
  formattedPrice: string;
  location?: string;
  condition?: string;
  imageUrl?: string;
  unavailable?: boolean;
};

export function ListingCard({ listing }: { listing: ListingCardView }) {
  return (
    <article className="overflow-hidden rounded-md border border-brand-border bg-white">
      <Link href={`/listings/${encodeURIComponent(listing.id)}`} className="relative grid h-44 place-items-center bg-slate-100 text-brand-muted">
        {listing.imageUrl ? <Image src={listing.imageUrl} alt="" width={640} height={480} unoptimized className="h-full w-full object-cover" /> : <ImageOff aria-hidden="true" size={24} />}
        {listing.unavailable ? <span className="absolute left-3 top-3 rounded bg-slate-900/80 px-2 py-1 text-[10px] font-semibold text-white">Unavailable</span> : null}
      </Link>
      <div className="p-4"><p className="font-display font-bold text-brand-navy">{listing.formattedPrice}</p><Link href={`/listings/${encodeURIComponent(listing.id)}`} className="mt-1 block text-sm font-medium text-brand-ink hover:text-brand-green">{listing.title}</Link><p className="mt-2 text-xs text-brand-muted">{[listing.location, listing.condition].filter(Boolean).join(" · ") || "Details provided by seller"}</p></div>
    </article>
  );
}
