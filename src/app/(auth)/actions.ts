"use server";

import { cookies } from "next/headers";
import { loginSchema, registerSchema } from "@/lib/validation";

/** This is a portfolio demo, so there is no user store. Credentials are
 *  validated for shape, one seeded value is rejected so the error state is
 *  reachable, and a signed-out-able session cookie stands in for auth. */
const BLOCKED_USERNAME = "blocked";
const TAKEN_EMAIL = "taken@totc.dev";

export type AuthResult = { ok: true } | { ok: false; message: string };

async function startSession(name: string, remember = false) {
  const store = await cookies();
  store.set("totc_demo_session", name, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: remember ? 60 * 60 * 24 * 30 : undefined,
  });
}

export async function login(input: unknown): Promise<AuthResult> {
  const parsed = loginSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Check the details you entered." };
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  if (parsed.data.username.toLowerCase() === BLOCKED_USERNAME) {
    return { ok: false, message: "That username or password is not correct." };
  }

  await startSession(parsed.data.username, parsed.data.remember);
  return { ok: true };
}

export async function register(input: unknown): Promise<AuthResult> {
  const parsed = registerSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Check the details you entered." };
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  if (parsed.data.email.toLowerCase() === TAKEN_EMAIL) {
    return { ok: false, message: "An account already uses that email address." };
  }

  await startSession(parsed.data.username);
  return { ok: true };
}

export async function signOut() {
  const store = await cookies();
  store.delete("totc_demo_session");
}
