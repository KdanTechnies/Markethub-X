"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { verificationDraftSchema, type VerificationDraft } from "@/schemas/verification.schema";
import { FormField, TextArea } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";

export function VerificationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<VerificationDraft>({ resolver: zodResolver(verificationDraftSchema) });
  return (
    <form className="space-y-4" onSubmit={handleSubmit(() => toast.info("Verification is being connected. Please try again shortly."))}>
      <FormField label="Information requested by the verification service" id="verification-information" error={errors.information?.message}><TextArea id="verification-information" {...register("information")} /></FormField>
      <FormField label="Supporting document files" id="verification-files"><input id="verification-files" disabled type="file" multiple className="block w-full rounded border border-brand-border p-3 text-xs" /><span className="text-xs text-brand-muted">Secure document upload will be available soon.</span></FormField>
      <label className="flex items-start gap-2 text-xs leading-5 text-brand-muted"><input type="checkbox" className="mt-1" {...register("acknowledgesPrivacy")} />I understand that my verification documents will be handled privately.</label>
      {errors.acknowledgesPrivacy ? <p role="alert" className="text-xs text-rose-700">{errors.acknowledgesPrivacy.message}</p> : null}
      <Button variant="secondary">Submit for verification</Button>
    </form>
  );
}
