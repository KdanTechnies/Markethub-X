import { describe, expect, it } from "vitest";
import { BackendContractPendingError } from "./api-contract";
import { listingsService } from "./listings.service";

describe("backend contract placeholders", () => {
  it("fails explicitly without calling an invented endpoint", () => {
    expect(() => listingsService.list()).toThrow(BackendContractPendingError);
  });
});
