import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export type SessionDisplayState = "loading" | "unauthenticated" | "authenticated" | "forbidden";

export function SessionBoundary({ state }: { state: SessionDisplayState }) {
  if (state === "authenticated") return null;
  const title = state === "loading" ? "Checking your session" : state === "forbidden" ? "Access is restricted" : "Sign in to continue";
  const description = state === "loading"
    ? "Please wait while we check your account."
    : state === "forbidden"
      ? "Your account does not have access to this area."
      : "Sign in to view your account and continue.";

  return (
    <section role="status" className="rounded-md border border-brand-border bg-white p-6">
      <ShieldCheck className="text-brand-green" size={22} />
      <h2 className="mt-3 font-display text-lg font-bold text-brand-navy">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-brand-muted">{description}</p>
      {state === "unauthenticated" ? <Link href="/login" className="mt-4 inline-block text-sm font-semibold text-emerald-800 underline">Go to login</Link> : null}
    </section>
  );
}
