"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema, type LoginDraft, type RegisterDraft } from "@/schemas/auth.schema";
import { FormField, TextInput } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const schema = mode === "login" ? loginSchema : registerSchema;
  const form = useForm<LoginDraft | RegisterDraft>({
    resolver: zodResolver(schema),
    defaultValues: mode === "login" ? { email: "", password: "" } : { email: "", password: "", confirmPassword: "" },
  });

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(() => toast.info("This service is being connected. Please try again shortly."))}>
      <FormField label="Email" id="auth-email" error={form.formState.errors.email?.message}><TextInput id="auth-email" type="email" autoComplete="email" {...form.register("email")} /></FormField>
      <FormField label="Password" id="auth-password" error={form.formState.errors.password?.message}><TextInput id="auth-password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} {...form.register("password")} /></FormField>
      {mode === "register" ? <FormField label="Confirm password" id="auth-confirm-password" error={"confirmPassword" in form.formState.errors ? form.formState.errors.confirmPassword?.message : undefined}><TextInput id="auth-confirm-password" type="password" autoComplete="new-password" {...form.register("confirmPassword")} /></FormField> : null}
      <Button type="submit" variant="secondary">{mode === "login" ? "Sign in" : "Create account"}</Button>
    </form>
  );
}
