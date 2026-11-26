"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profileDraftSchema, type ProfileDraft } from "@/schemas/profile.schema";
import { FormField, TextArea, TextInput } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export function ProfileForm() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileDraft>({ resolver: zodResolver(profileDraftSchema) });
  return (
    <form className="space-y-4" onSubmit={handleSubmit(() => setValidated(true))}>
      <IntegrationNotice domain="users">Fields are editable UI drafts only. Profile changes are not sent before the backend confirms supported fields.</IntegrationNotice>
      <FormField label="Display name" id="profile-display-name" error={errors.displayName?.message}><TextInput id="profile-display-name" {...register("displayName")} /></FormField>
      <FormField label="Location" id="profile-location" error={errors.location?.message}><TextInput id="profile-location" {...register("location")} /></FormField>
      <FormField label="About you" id="profile-biography" error={errors.biography?.message}><TextArea id="profile-biography" {...register("biography")} /></FormField>
      {validated ? <p role="status" className="text-xs text-emerald-800">Draft passed local validation; nothing was saved.</p> : null}
      <Button variant="secondary">Validate profile draft</Button>
    </form>
  );
}
