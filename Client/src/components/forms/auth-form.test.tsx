import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toaster } from "sonner";
import { AuthForm } from "./auth-form";

describe("AuthForm", () => {
  it("keeps validation active and shows a friendly message after valid input", async () => {
    const user = userEvent.setup();

    render(<><AuthForm mode="login" /><Toaster /></>);

    await user.click(screen.getByRole("button", { name: "Sign in" }));
    expect(await screen.findByText("Enter a valid email address.")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Email"), "seller@example.com");
    await user.type(screen.getByLabelText("Password"), "correct-horse-battery");
    await user.click(screen.getByRole("button", { name: "Sign in" }));

    expect(await screen.findByText("This service is being connected. Please try again shortly.")).toBeInTheDocument();
    expect(screen.queryByText(/BackendContractPendingError|endpoint|contract/i)).not.toBeInTheDocument();
  });
});
