import { z } from "zod";

// Deliberately generic until the backend specifies identity fields and upload rules.
export const verificationDraftSchema = z.object({
  information: z.string().trim().min(1, "Enter the identity information requested by the service."),
  acknowledgesPrivacy: z.literal(true, { errorMap: () => ({ message: "Please review the privacy notice." }) }),
});

export type VerificationDraft = z.infer<typeof verificationDraftSchema>;
