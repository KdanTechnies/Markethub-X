import Link from "next/link";
import { AuthCard } from "@/components/layout/auth-card";
import { AuthForm } from "@/components/forms/auth-form";

export default function LoginPage() {
  return <AuthCard title="Welcome back" description="Sign in to connect with people nearby."><AuthForm mode="login" /><div className="mt-5 flex justify-between text-xs text-emerald-800"><Link href="/forgot-password">Forgot password?</Link><Link href="/register">Create an account</Link></div></AuthCard>;
}
