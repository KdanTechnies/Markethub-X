import { describe, expect, it } from "vitest";
import { formatCurrency, formatDate, getSafeErrorMessage } from "./format";

describe("format and safe error helpers", () => {
  it("formats explicit currencies and dates", () => {
    expect(formatCurrency(1250, "NGN")).toContain("1,250");
    expect(formatDate("not-a-date")).toBe("Date unavailable");
  });

  it("uses a generic message for network errors", () => {
    expect(getSafeErrorMessage(new Error("Network Error"))).toBe("Something went wrong. Please try again.");
    expect(getSafeErrorMessage(new Error("A friendly validation issue"))).toBe("A friendly validation issue");
  });
});
