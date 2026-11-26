"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { listingDraftSchema, type ListingDraft } from "@/schemas/listing.schema";
import { FormField, TextArea, TextInput } from "@/components/ui/form-field";
import { IntegrationNotice } from "@/components/ui/integration-notice";
import { Button } from "@/components/ui/button";

export function ListingForm({ initialValues }: { initialValues?: Partial<ListingDraft> }) {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ListingDraft>({
    resolver: zodResolver(listingDraftSchema),
    defaultValues: { negotiable: false, ...initialValues },
  });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(() => setValidated(true))}>
      <IntegrationNotice domain="listings">You can review the form locally. Saving and uploading are disabled until the listing and upload contracts are confirmed.</IntegrationNotice>
      {validated ? <p role="status" className="text-xs text-emerald-800">Draft passed local form validation. No listing was sent or saved.</p> : null}
      <FormField label="Item title" id="listing-title" error={errors.title?.message}><TextInput id="listing-title" {...register("title")} /></FormField>
      <FormField label="Description" id="listing-description" error={errors.description?.message}><TextArea id="listing-description" {...register("description")} /></FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Category" id="listing-category" error={errors.category?.message}><TextInput id="listing-category" {...register("category")} placeholder="Choose an API-supported category" /></FormField>
        <FormField label="Condition" id="listing-condition" error={errors.condition?.message}><TextInput id="listing-condition" {...register("condition")} placeholder="Choose an API-supported condition" /></FormField>
        <FormField label="Price" id="listing-price" error={errors.price?.message}><TextInput id="listing-price" type="number" step="any" {...register("price")} /></FormField>
        <FormField label="Location" id="listing-location" error={errors.location?.message}><TextInput id="listing-location" {...register("location")} /></FormField>
      </div>
      <label className="flex items-center gap-2 text-xs"><input type="checkbox" {...register("negotiable")} />Price is negotiable</label>
      <FormField label="Photos" id="listing-photos"><TextInput id="listing-photos" type="file" accept="image/*" multiple disabled aria-describedby="upload-help" /><span id="upload-help" className="text-xs text-brand-muted">Upload is unavailable until the backend upload workflow is documented.</span></FormField>
      <Button type="submit" variant="secondary">Validate draft locally</Button>
    </form>
  );
}
