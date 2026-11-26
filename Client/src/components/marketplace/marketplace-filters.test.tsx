import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MarketplaceFilters } from "./marketplace-filters";

describe("marketplace filter UI", () => {
  it("collects local filter choices without sending an API request", () => {
    const onApply = vi.fn();
    render(<MarketplaceFilters onApply={onApply} />);
    fireEvent.change(screen.getByPlaceholderText("Search items"), { target: { value: "lamp" } });
    fireEvent.change(screen.getByPlaceholderText("Town or area"), { target: { value: "North" } });
    fireEvent.click(screen.getByLabelText("Negotiable"));
    fireEvent.click(screen.getByRole("button", { name: "Apply filters" }));
    expect(onApply).toHaveBeenCalledWith(expect.objectContaining({ search: "lamp", location: "North", negotiable: true }));
  });
});
