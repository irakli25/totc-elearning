"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/auth/LoginForm";
import { register as registerAccount } from "@/app/(auth)/actions";
import { registerSchema, type RegisterValues } from "@/lib/validation";
import { authCopy } from "@/lib/content";

export function RegisterForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", username: "", password: "" },
  });

  const onSubmit = handleSubmit((values) => {
    startTransition(async () => {
      const result = await registerAccount(values);
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
        {authCopy.register.intro}
      </p>

      <TextField
        label="Email Address"
        placeholder="Enter your Email Address"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
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
        autoComplete="new-password"
        revealable
        error={errors.password?.message}
        {...register("password")}
      />

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
        {pending ? "Creating" : "Register"}
      </Button>
    </form>
  );
}
