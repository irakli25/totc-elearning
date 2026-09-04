"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  /** Adds the eye toggle from the Figma password field. */
  revealable?: boolean;
};

/** Pill field from the auth screens — Figma node 28:148. 435x54 at 1440. */
export function TextField({
  label,
  error,
  revealable = false,
  className,
  type = "text",
  ...props
}: Props) {
  const id = useId();
  const [revealed, setRevealed] = useState(false);
  const resolvedType = revealable ? (revealed ? "text" : "password") : type;

  return (
    <div className="flex w-full flex-col gap-2.5">
      <label htmlFor={id} className="text-base font-medium text-[#414141]">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          id={id}
          type={resolvedType}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "h-[54px] w-full rounded-pill border bg-white px-8 text-base text-ink-soft outline-none transition-colors placeholder:text-[#a1a1a1]",
            error
              ? "border-[#d8587e]"
              : "border-teal-300 focus:border-teal-400",
            revealable && "pr-14",
            className,
          )}
        />
        {revealable ? (
          <button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            aria-label={revealed ? "Hide password" : "Show password"}
            className="absolute top-1/2 right-6 -translate-y-1/2 text-[#6b6b6b] transition-colors hover:text-ink"
          >
            <EyeIcon crossed={!revealed} />
          </button>
        ) : null}
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="pl-4 text-sm text-[#d8587e]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function EyeIcon({ crossed }: { crossed: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[22px]" fill="none">
      <path
        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.7" />
      {crossed ? (
        <path d="M4 20L20 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      ) : null}
    </svg>
  );
}
