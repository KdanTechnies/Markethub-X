import { z } from "zod";

// Editable UI draft; the backend's supported profile fields are still unconfirmed.
export const profileDraftSchema = z.object({
  displayName: z.string().trim().min(1, "Enter a display name.").max(80),
  location: z.string().trim().max(120),
  biography: z.string().trim().max(500),
});

export type ProfileDraft = z.infer<typeof profileDraftSchema>;
