import type { VerificationDraft } from "@/schemas/verification.schema";
import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining verification fields or upload paths.
export const verificationService = {
  getStatus: (): never => endpointPending("verification", "status"),
  submit: (_draft: VerificationDraft): never => endpointPending("verification", "submission and uploads"),
};
