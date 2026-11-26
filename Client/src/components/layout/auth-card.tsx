import type { ReactNode } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";

export function AuthCard({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-paper px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mx-auto mb-7 flex w-fit items-center font-display text-xl font-extrabold text-brand-navy"><Leaf className="mr-2 text-brand-green" size={21} />Commonplace<span className="text-brand-green">.</span></Link>
        <section className="rounded-lg border border-brand-border bg-white p-6 shadow-sm sm:p-8">
          <h1 className="font-display text-2xl font-bold text-brand-navy">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-brand-muted">{description}</p>
          <div className="mt-6">{children}</div>
        </section>
        <p className="mt-5 text-center text-[11px] text-brand-muted">Meet locally, inspect first, and pay sellers directly in person.</p>
      </div>
    </main>
  );
}
