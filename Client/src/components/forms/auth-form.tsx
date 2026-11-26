"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema, type LoginDraft, type RegisterDraft } from "@/schemas/auth.schema";
import { FormField, TextInput } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { IntegrationNotice } from "@/components/ui/integration-notice";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [validated, setValidated] = useState(false);
  const schema = mode === "login" ? loginSchema : registerSchema;
  const form = useForm<LoginDraft | RegisterDraft>({
    resolver: zodResolver(schema),
    defaultValues: mode === "login" ? { email: "", password: "" } : { email: "", password: "", confirmPassword: "" },
  });

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(() => setValidated(true))}>
      <IntegrationNotice domain="auth">These are local form drafts only. No credentials are sent until the backend authentication fields and secure cookie flow are confirmed.</IntegrationNotice>
      {validated ? <p role="status" className="text-xs text-emerald-800">Draft passed local validation. No request was sent.</p> : null}
      <FormField label="Email" id="auth-email" error={form.formState.errors.email?.message}><TextInput id="auth-email" type="email" autoComplete="email" {...form.register("email")} /></FormField>
      <FormField label="Password" id="auth-password" error={form.formState.errors.password?.message}><TextInput id="auth-password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} {...form.register("password")} /></FormField>
      {mode === "register" ? <FormField label="Confirm password" id="auth-confirm-password" error={"confirmPassword" in form.formState.errors ? form.formState.errors.confirmPassword?.message : undefined}><TextInput id="auth-confirm-password" type="password" autoComplete="new-password" {...form.register("confirmPassword")} /></FormField> : null}
      <Button type="submit" variant="secondary">Validate form locally</Button>
    </form>
  );
}
