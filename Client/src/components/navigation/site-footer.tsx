import Link from "next/link";
import { Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-white px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div><Link href="/" className="flex items-center font-display text-lg font-extrabold text-brand-navy"><Leaf className="mr-2 text-brand-green" size={19} />Commonplace<span className="text-brand-green">.</span></Link><p className="mt-3 text-xs leading-5 text-brand-muted">Good finds, close by.<br />A marketplace with a little more meaning.</p></div>
        <div className="flex flex-col gap-3 text-xs text-brand-muted"><strong className="text-[10px] tracking-widest">EXPLORE</strong><Link href="/marketplace">Marketplace</Link><Link href="/about">About</Link></div>
        <div className="flex flex-col gap-3 text-xs text-brand-muted"><strong className="text-[10px] tracking-widest">YOUR ACCOUNT</strong><Link href="/login">Log in</Link><Link href="/register">Register</Link></div>
        <p className="font-serif text-sm italic text-emerald-800">Meet in public. Inspect first. Pay the seller directly in person.</p>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between border-t border-brand-border py-4 text-[10px] text-brand-muted"><span>© 2026 Commonplace Marketplace</span><span>Peer-to-peer, person to person.</span></div>
    </footer>
  );
}
