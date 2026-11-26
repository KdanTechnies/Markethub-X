import type { ReactNode } from "react";

export function PageContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 ${className}`}>{children}</main>;
}

export function PageHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <header className="mb-7">
      {eyebrow ? <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">{eyebrow}</p> : null}
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">{title}</h1>
      {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-muted">{description}</p> : null}
    </header>
  );
}
