import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Notice, PageHeader } from "@/components/site";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link href="/register" className="text-xs font-semibold text-emerald-800">
          Create an account
        </Link>
      </PageHeader>
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-5 grid size-11 place-items-center rounded-full bg-emerald-100 text-emerald-800">
          <ShieldCheck size={22} />
        </div>
        <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">WELCOME BACK</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-brand-navy">
          Log in to your <em className="font-serif text-emerald-800">neighbourhood.</em>
        </h1>
        <div className="mt-8">
          <Notice title="Sign-in is waiting for the backend authentication contract.">
            Secure cookie login, supported fields, and session behavior must match the existing API.
            No client-side or local-storage authentication is used.
          </Notice>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          New to Commonplace?{" "}
          <Link href="/register" className="font-semibold text-emerald-800 hover:text-brand-green">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}
