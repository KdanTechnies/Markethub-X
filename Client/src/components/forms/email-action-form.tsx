"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { emailSchema, resetPasswordSchema } from "@/schemas/auth.schema";
import { FormField, TextInput } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";

export function EmailActionForm({ mode, emailActionLabel = "Send reset link" }: { mode: "email" | "reset"; emailActionLabel?: string }) {
  const form = useForm({
    resolver: zodResolver(mode === "email" ? emailSchema : resetPasswordSchema),
    defaultValues: mode === "email" ? { email: "" } : { password: "", confirmPassword: "" },
  });

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(() => toast.info("This service is being connected. Please try again shortly."))}>
      {mode === "email" ? <FormField label="Email address" id="recovery-email" error={form.formState.errors.email?.message}><TextInput id="recovery-email" type="email" {...form.register("email")} /></FormField> : <><FormField label="New password" id="reset-password" error={form.formState.errors.password?.message}><TextInput id="reset-password" type="password" {...form.register("password")} /></FormField><FormField label="Confirm password" id="reset-confirm-password" error={form.formState.errors.confirmPassword?.message}><TextInput id="reset-confirm-password" type="password" {...form.register("confirmPassword")} /></FormField></>}
      <Button variant="secondary">{mode === "email" ? emailActionLabel : "Update password"}</Button>
    </form>
  );
}
