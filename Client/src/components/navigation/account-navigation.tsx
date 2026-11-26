import Link from "next/link";
import { accountNavigation } from "@/constants/brand";

export function AccountNavigation({ active }: { active?: string }) {
  return (
    <nav aria-label="Account navigation" className="flex gap-2 overflow-x-auto border-b border-brand-border pb-2 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:pb-0 md:pr-4">
      {accountNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={active === item.href ? "page" : undefined} className={`whitespace-nowrap rounded px-3 py-2 text-xs font-medium ${active === item.href ? "bg-emerald-50 text-emerald-900" : "text-slate-600 hover:bg-slate-50"}`}>{item.label}</Link>)}
    </nav>
  );
}
