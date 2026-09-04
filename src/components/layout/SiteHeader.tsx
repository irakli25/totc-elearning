"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/cn";

type Variant = "hero" | "solid";

/** `hero` sits on the teal band of the landing page and carries the auth
 *  pills. `solid` is the white interior header with the signed-in avatar. */
export function SiteHeader({ variant = "solid" }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);
  const onHero = variant === "hero";
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "relative z-30 w-full",
        onHero ? "bg-transparent" : "bg-white",
      )}
    >
      <Container className="flex h-[92px] items-center justify-between gap-6 lg:h-[143px]">
        <Logo tone={onHero ? "light" : "dark"} />

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 xl:flex xl:gap-[42px]"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-[22px] tracking-[0.02em] transition-opacity hover:opacity-70",
                onHero ? "text-white" : "text-muted-3",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {onHero ? (
            <div className="hidden items-center gap-4 lg:flex">
              <ButtonLink href="/login" variant="white" className="w-[160px]">
                Login
              </ButtonLink>
              <ButtonLink href="/register" variant="glass" className="w-[160px]">
                Sign Up
              </ButtonLink>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden items-center gap-2.5 lg:flex"
              aria-label="Account menu for Lina"
            >
              <Image
                src="/images/common/student.png"
                alt=""
                width={63}
                height={63}
                className="size-[63px] rounded-full bg-[#d9d9d9] object-cover object-[30%_18%]"
              />
              <span className="text-lg font-medium tracking-[0.02em] text-black">
                Lina
              </span>
              <ChevronDown className="size-3.5 text-black" />
            </Link>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid size-11 place-items-center rounded-full transition-colors xl:hidden",
              onHero
                ? "bg-white/25 text-white hover:bg-white/40"
                : "bg-teal-50 text-muted-3 hover:bg-teal-100",
            )}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 border-t border-black/5 bg-white shadow-card xl:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className="rounded-2xl px-4 py-3.5 text-lg text-muted-3 transition-colors hover:bg-teal-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/login" onClick={close} variant="outline" size="sm" className="flex-1">
              Login
            </ButtonLink>
            <ButtonLink href="/register" onClick={close} size="sm" className="flex-1">
              Sign Up
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="none">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 8" aria-hidden className={className} fill="none">
      <path
        d="M1 1l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
