import type { BackendDomain } from "@/constants/integrations";

export class BackendContractPendingError extends Error {
  constructor(readonly domain: BackendDomain, readonly action: string) {
    super(`${domain} ${action} is awaiting the backend endpoint contract.`);
    this.name = "BackendContractPendingError";
  }
}

export function endpointPending(domain: BackendDomain, action: string): never {
  // TODO: Confirm from OpenAPI spec before adding a path, method, or payload.
  throw new BackendContractPendingError(domain, action);
}
