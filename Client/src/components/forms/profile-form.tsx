"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { profileDraftSchema, type ProfileDraft } from "@/schemas/profile.schema";
import { FormField, TextArea, TextInput } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";

export function ProfileForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileDraft>({ resolver: zodResolver(profileDraftSchema) });
  return (
    <form className="space-y-4" onSubmit={handleSubmit(() => toast.info("Profile updates are being connected. Please try again shortly."))}>
      <FormField label="Display name" id="profile-display-name" error={errors.displayName?.message}><TextInput id="profile-display-name" {...register("displayName")} /></FormField>
      <FormField label="Location" id="profile-location" error={errors.location?.message}><TextInput id="profile-location" {...register("location")} /></FormField>
      <FormField label="About you" id="profile-biography" error={errors.biography?.message}><TextArea id="profile-biography" {...register("biography")} /></FormField>
      <Button variant="secondary">Save changes</Button>
    </form>
  );
}
