"use client";

import Link from "next/link";
import { ArrowUpRight, Leaf, Menu, X } from "lucide-react";
import { publicNavigation } from "@/constants/brand";
import { useUiStore } from "@/stores/ui.store";

export function PublicHeader() {
  const open = useUiStore((state) => state.mobileNavigationOpen);
  const setOpen = useUiStore((state) => state.setMobileNavigationOpen);

  return (
    <>
      <div className="bg-brand-navy px-4 py-2 text-center text-[10px] tracking-wide text-slate-100">Good things have a second life. <Link href="/#how" className="ml-2 text-emerald-200 underline">See how it works</Link></div>
      <header className="relative z-20 border-b border-brand-border bg-white">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center font-display text-xl font-extrabold tracking-tight text-brand-navy"><Leaf className="mr-2 text-brand-green" size={21} />Commonplace<span className="text-brand-green">.</span></Link>
          <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-brand-border bg-white px-6 py-6 text-sm text-slate-600 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {publicNavigation.map((item) => <Link key={item.href} onClick={() => setOpen(false)} href={item.href} className="hover:text-brand-green">{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden text-sm text-brand-ink sm:block">Log in</Link>
            <Link href="/register" className="hidden items-center gap-2 rounded bg-brand-navy px-3 py-2.5 text-xs font-semibold text-white sm:flex">Start selling <ArrowUpRight size={14} /></Link>
            <button className="rounded p-2 text-brand-navy md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </header>
    </>
  );
}
