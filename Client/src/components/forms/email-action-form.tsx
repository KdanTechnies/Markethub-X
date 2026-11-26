"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailSchema, resetPasswordSchema } from "@/schemas/auth.schema";
import { FormField, TextInput } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export function EmailActionForm({ mode }: { mode: "email" | "reset" }) {
  const [validated, setValidated] = useState(false);
  const form = useForm({
    resolver: zodResolver(mode === "email" ? emailSchema : resetPasswordSchema),
    defaultValues: mode === "email" ? { email: "" } : { password: "", confirmPassword: "" },
  });

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(() => setValidated(true))}>
      <IntegrationNotice domain="auth">This form validates locally only. The reset token/code and submission fields must match the backend contract.</IntegrationNotice>
      {mode === "email" ? <FormField label="Email address" id="recovery-email" error={form.formState.errors.email?.message}><TextInput id="recovery-email" type="email" {...form.register("email")} /></FormField> : <><FormField label="New password" id="reset-password" error={form.formState.errors.password?.message}><TextInput id="reset-password" type="password" {...form.register("password")} /></FormField><FormField label="Confirm password" id="reset-confirm-password" error={form.formState.errors.confirmPassword?.message}><TextInput id="reset-confirm-password" type="password" {...form.register("confirmPassword")} /></FormField></>}
      {validated ? <p role="status" className="text-xs text-emerald-800">Draft validated; no request was sent.</p> : null}
      <Button variant="secondary">Validate draft locally</Button>
    </form>
  );
}
