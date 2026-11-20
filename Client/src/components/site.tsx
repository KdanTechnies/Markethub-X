"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Leaf, Menu, X } from "lucide-react";

export function Brand() {
  return (
    <Link
      href="/"
      className="flex items-center font-display text-xl font-extrabold tracking-tight text-brand-navy"
    >
      <Leaf className="mr-2 text-brand-green" size={21} />
      commonplace<span className="text-brand-green">.</span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-8 items-center justify-center gap-4 bg-brand-navy px-4 text-[10px] tracking-wide text-slate-200">
        <span>Good things have a second life.</span>
        <a href="#how" className="flex items-center gap-1 text-green-200 hover:text-white">
          See how it works <ArrowUpRight size={13} />
        </a>
      </div>
      <header className="relative z-20 border-b border-brand-border bg-white">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-brand-border bg-white px-6 py-6 text-sm text-slate-600 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <Link
              onClick={() => setMenuOpen(false)}
              href="/marketplace"
              className="hover:text-brand-green"
            >
              Browse all
            </Link>
            <a
              onClick={() => setMenuOpen(false)}
              href="/#categories"
              className="hover:text-brand-green"
            >
              Categories
            </a>
            <a onClick={() => setMenuOpen(false)} href="/#how" className="hover:text-brand-green">
              How it works
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="/#safety"
              className="hover:text-brand-green"
            >
              Our promise
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              className="hidden text-sm text-slate-600 hover:text-brand-green sm:block"
              href="/login"
            >
              Log in
            </Link>
            <Link
              className="hidden items-center gap-2 rounded bg-brand-navy px-4 py-3 text-xs font-semibold text-white transition hover:bg-slate-700 sm:flex"
              href="/register"
            >
              Start selling <ArrowUpRight size={15} />
            </Link>
            <button
              className="rounded p-2 text-brand-navy hover:bg-slate-100 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white px-5 pt-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 border-b border-brand-border pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-xs leading-6 text-brand-muted">
            Good finds, close by.
            <br />A marketplace with a little more meaning.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xs text-slate-600">
          <strong className="mb-1 text-[10px] tracking-widest text-slate-400">EXPLORE</strong>
          <Link href="/marketplace" className="hover:text-brand-green">
            Marketplace
          </Link>
          <a href="/#categories" className="hover:text-brand-green">
            Categories
          </a>
          <a href="/#how" className="hover:text-brand-green">
            How it works
          </a>
        </div>
        <div className="flex flex-col gap-3 text-xs text-slate-600">
          <strong className="mb-1 text-[10px] tracking-widest text-slate-400">GOOD TO KNOW</strong>
          <a href="/#safety" className="hover:text-brand-green">
            Safety tips
          </a>
          <Link href="/about" className="hover:text-brand-green">
            About us
          </Link>
          <Link href="/contact" className="hover:text-brand-green">
            Get in touch
          </Link>
        </div>
        <p className="font-serif text-sm italic text-emerald-800">Pass it on, keep it close. ✳</p>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between py-4 text-[10px] text-slate-400">
        <span>© 2026 Commonplace Marketplace</span>
        <span className="flex items-center gap-2">
          Made for the nearby <Leaf size={13} />
        </span>
      </div>
    </footer>
  );
}

export function PageHeader({ children }: { children?: ReactNode }) {
  return (
    <header className="border-b border-brand-border bg-white">
      <div className="mx-auto flex h-[72px] max-w-5xl items-center justify-between px-5 sm:px-8">
        <Brand />
        {children}
      </div>
    </header>
  );
}

export function Notice({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="flex min-h-28 items-start gap-4 rounded border border-dashed border-emerald-200 bg-emerald-50 p-5 text-emerald-950 sm:items-center">
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-emerald-100 bg-white text-brand-green">
        ✳
      </span>
      <div>
        <strong className="text-sm font-semibold">{title}</strong>
        {children ? (
          <div className="mt-1 text-xs leading-6 text-emerald-900/70">{children}</div>
        ) : null}
      </div>
    </div>
  );
}

export function BackLink({
  href = "/",
  children = "Home",
}: {
  href?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-brand-green"
    >
      {children} <ArrowRight size={14} />
    </Link>
  );
}
