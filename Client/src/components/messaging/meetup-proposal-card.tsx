"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { meetupProposalSchema, type MeetupProposalDraft } from "@/schemas/meetup.schema";
import { FormField, TextArea, TextInput } from "@/components/ui/form-field";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { Button } from "@/components/ui/button";
import { safetyGuidelines } from "@/constants/brand";

export function MeetupProposalCard() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<MeetupProposalDraft>({ resolver: zodResolver(meetupProposalSchema) });

  return (
    <section className="space-y-4 rounded-md border border-brand-border bg-white p-4">
      <div><p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Physical meetup</p><h2 className="mt-1 font-display text-lg font-bold text-brand-navy">Plan a safe exchange</h2></div>
      <IntegrationNotice domain="meetups">No proposal, acceptance, or status change is sent until the meetup API contract is confirmed.</IntegrationNotice>
      <section aria-label="Meetup status" className="rounded-md border border-brand-border bg-brand-paper p-3">
        <h3 className="text-xs font-semibold text-brand-navy">Meetup details</h3>
        <dl className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
          <dt className="text-brand-muted">Listing</dt><dd>Awaiting conversation data</dd>
          <dt className="text-brand-muted">Location</dt><dd>Not agreed</dd>
          <dt className="text-brand-muted">Date and time</dt><dd>Not agreed</dd>
          <dt className="text-brand-muted">Status</dt><dd>Awaiting backend status</dd>
        </dl>
      </section>
      <ul className="list-disc space-y-1 pl-5 text-xs leading-5 text-brand-muted">{safetyGuidelines.map((tip) => <li key={tip}>{tip}</li>)}</ul>
      <form className="space-y-3" onSubmit={handleSubmit(() => setValidated(true))}>
        <FormField label="Public meeting location" id="meetup-location" error={errors.location?.message}><TextInput id="meetup-location" {...register("location")} /></FormField>
        <div className="grid grid-cols-2 gap-3"><FormField label="Proposed date" id="meetup-date" error={errors.date?.message}><TextInput id="meetup-date" type="date" {...register("date")} /></FormField><FormField label="Proposed time" id="meetup-time" error={errors.time?.message}><TextInput id="meetup-time" type="time" {...register("time")} /></FormField></div>
        <FormField label="Note (optional)" id="meetup-note" error={errors.note?.message}><TextArea id="meetup-note" {...register("note")} /></FormField>
        {validated ? <p role="status" className="text-xs text-emerald-800">Draft validated locally; no meetup was proposed.</p> : null}
        <Button type="submit" variant="secondary">Validate proposal draft</Button>
      </form>
    </section>
  );
}
