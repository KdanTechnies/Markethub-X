"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { verificationDraftSchema, type VerificationDraft } from "@/schemas/verification.schema";
import { FormField, TextArea } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export function VerificationForm() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<VerificationDraft>({ resolver: zodResolver(verificationDraftSchema) });
  return (
    <form className="space-y-4" onSubmit={handleSubmit(() => setValidated(true))}>
      <IntegrationNotice domain="verification">Do not upload identity documents here yet. Required fields, file types, storage, and privacy rules must come from the backend contract.</IntegrationNotice>
      <FormField label="Information requested by the verification service" id="verification-information" error={errors.information?.message}><TextArea id="verification-information" {...register("information")} /></FormField>
      <FormField label="Supporting document files" id="verification-files"><input id="verification-files" disabled type="file" multiple className="block w-full rounded border border-brand-border p-3 text-xs" /><span className="text-xs text-brand-muted">Document upload is unavailable until the authorized upload workflow is confirmed.</span></FormField>
      <label className="flex items-start gap-2 text-xs leading-5 text-brand-muted"><input type="checkbox" className="mt-1" {...register("acknowledgesPrivacy")} />I understand verification documents are private and must only be submitted through an authorized backend flow.</label>
      {errors.acknowledgesPrivacy ? <p role="alert" className="text-xs text-rose-700">{errors.acknowledgesPrivacy.message}</p> : null}
      {validated ? <p role="status" className="text-xs text-emerald-800">Draft passed local checks; no information or document was sent.</p> : null}
      <Button variant="secondary">Validate draft locally</Button>
    </form>
  );
}
