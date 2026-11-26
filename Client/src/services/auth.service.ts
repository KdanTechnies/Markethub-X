import type { LoginDraft, RegisterDraft } from "@/schemas/auth.schema";
import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining auth paths or payload mapping.
export const authService = {
  login: (_draft: LoginDraft): never => endpointPending("auth", "login"),
  register: (_draft: RegisterDraft): never => endpointPending("auth", "register"),
  getSession: (): never => endpointPending("auth", "session lookup"),
  logout: (): never => endpointPending("auth", "logout"),
};
