import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

const inputClass = "mt-1 block w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm text-brand-ink outline-none placeholder:text-slate-400 focus:border-brand-green focus:ring-2 focus:ring-emerald-100";

export function FormField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-semibold text-brand-ink">{label}</label>
      {children}
      {error ? <p role="alert" className="text-xs text-rose-700">{error}</p> : null}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} min-h-28 resize-y ${props.className ?? ""}`} />;
}
