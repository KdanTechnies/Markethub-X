import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Notice, PageHeader } from "@/components/site";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-brand-paper">
      <PageHeader>
        <Link href="/login" className="text-xs font-semibold text-emerald-800">
          Log in
        </Link>
      </PageHeader>
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-5 grid size-11 place-items-center rounded-full bg-emerald-100 text-emerald-800">
          <ShieldCheck size={22} />
        </div>
        <p className="text-[10px] font-bold tracking-[0.17em] text-slate-500">
          MAKE YOURSELF AT HOME
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-brand-navy">
          Join the <em className="font-serif text-emerald-800">nearby.</em>
        </h1>
        <div className="mt-8">
          <Notice title="Registration needs the backend’s supported fields and endpoint.">
            Once the API contract is available, this page can use validated forms and the backend’s
            secure session flow.
          </Notice>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-emerald-800 hover:text-brand-green">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
}
