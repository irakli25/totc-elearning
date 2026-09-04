import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <AuthShell image="/images/auth/login-panel.png">
      <div className="flex flex-col gap-10">
        <AuthTabs active="login" />
        <LoginForm />
      </div>
    </AuthShell>
  );
}
