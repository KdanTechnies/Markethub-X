import Link from "next/link";
import { ShieldAlert } from "lucide-react";

const links = [
  ["Overview", "/operational-console"],
  ["Users", "/operational-console/users"],
  ["Listings", "/operational-console/listings"],
  ["Verifications", "/operational-console/verifications"],
  ["Reports", "/operational-console/reports"],
  ["Categories", "/operational-console/categories"],
  ["Reviews", "/operational-console/reviews"],
  ["Activity log", "/operational-console/activity"],
] as const;

export function AdminNavigation() {
  return (
    <nav aria-label="Operational console" className="rounded-md border border-brand-border bg-white p-3">
      <div className="mb-3 flex items-center gap-2 px-2 text-[10px] font-bold uppercase tracking-widest text-rose-800"><ShieldAlert size={15} />Admin console</div>
      <div className="flex gap-1 overflow-x-auto md:flex-col">{links.map(([label, href]) => <Link key={href} href={href} className="whitespace-nowrap rounded px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-brand-navy">{label}</Link>)}</div>
    </nav>
  );
}
