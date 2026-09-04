"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { login } from "@/app/(auth)/actions";
import { loginSchema, type LoginValues } from "@/lib/validation";

export function LoginForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "", remember: false },
  });

  const onSubmit = handleSubmit((values) => {
    startTransition(async () => {
      const result = await login(values);
      if (result.ok) {
        router.push("/courses");
        router.refresh();
        return;
      }
      setError("root", { message: result.message });
    });
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-base leading-[1.6] text-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <TextField
        label="User name"
        placeholder="Enter your User name"
        autoComplete="username"
        error={errors.username?.message}
        {...register("username")}
      />
      <TextField
        label="Password"
        placeholder="Enter your Password"
        autoComplete="current-password"
        revealable
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2.5 text-sm text-body">
          <input
            type="checkbox"
            className="size-[15px] rounded-[3px] border border-[#a1a1a1] accent-teal-400"
            {...register("remember")}
          />
          Rememebr me
        </label>
        <Link
          href="/login"
          className="text-sm text-body underline-offset-4 hover:underline"
        >
          Forgot Password ?
        </Link>
      </div>

      {errors.root ? (
        <p
          role="alert"
          className="rounded-2xl bg-[#d8587e]/10 px-5 py-3 text-sm text-[#d8587e]"
        >
          {errors.root.message}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        size="sm"
        className="mt-2 h-[49px] w-[232px] self-end text-base"
      >
        {pending ? <Spinner /> : null}
        {pending ? "Signing in" : "Login"}
      </Button>
    </form>
  );
}

export function Spinner() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5 animate-spin" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path
        d="M21 12a9 9 0 00-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
