import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthTabs } from "@/components/auth/AuthTabs";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <AuthShell image="/images/auth/register-panel.png">
      <div className="flex flex-col gap-10">
        <AuthTabs active="register" />
        <RegisterForm />
      </div>
    </AuthShell>
  );
}
