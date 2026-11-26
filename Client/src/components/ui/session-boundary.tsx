import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export type SessionDisplayState = "loading" | "unauthenticated" | "authenticated" | "forbidden";

export function SessionBoundary({ state }: { state: SessionDisplayState }) {
  if (state === "authenticated") return null;
  const title = state === "loading" ? "Checking your session" : state === "forbidden" ? "Access is restricted" : "Sign in to continue";
  const description = state === "loading"
    ? "The session state will be confirmed by the backend."
    : state === "forbidden"
      ? "The backend must confirm your role and permissions for this area."
      : "Your account session is required for this area. Authentication is pending backend integration.";

  return (
    <section role="status" className="rounded-md border border-brand-border bg-white p-6">
      <ShieldCheck className="text-brand-green" size={22} />
      <h2 className="mt-3 font-display text-lg font-bold text-brand-navy">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-brand-muted">{description}</p>
      {state === "unauthenticated" ? <Link href="/login" className="mt-4 inline-block text-sm font-semibold text-emerald-800 underline">Go to login</Link> : null}
      <p className="mt-3 text-xs text-brand-muted">This interface state does not authorize access; the backend must enforce every protected action.</p>
    </section>
  );
}
