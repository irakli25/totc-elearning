import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { DiamondOutline } from "@/components/icons";

const legalLinks = [
  { label: "Careers", href: "/membership#apply" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-soft">
      <Container className="flex flex-col items-center gap-10 py-16 text-center lg:gap-[52px] lg:py-[74px]">
        <div className="flex items-center gap-6">
          <span className="relative grid size-[83px] shrink-0 place-items-center">
            <DiamondOutline className="absolute inset-0 size-full" />
            <span className="-ml-[61px] text-[32px] font-bold tracking-[0.04em] text-white">
              TOTC
            </span>
          </span>
          <span aria-hidden className="h-[83px] w-px bg-white/40" />
          <span className="max-w-[156px] text-left text-[22px] font-semibold tracking-[0.04em] text-white">
            Virtual Class for Zoom
          </span>
        </div>

        <p className="text-xl font-medium tracking-[0.04em] text-[#b2b3cf] lg:text-[26px]">
          Subscribe to get our Newsletter
        </p>

        <NewsletterForm />

        <nav
          aria-label="Legal"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg tracking-[0.04em] text-[#b2b3cf] lg:gap-x-10 lg:text-[22px]"
        >
          {legalLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-6 lg:gap-10">
              {index > 0 ? (
                <span aria-hidden className="hidden h-[17px] w-px bg-[#b2b3cf]/60 sm:block" />
              ) : null}
              <Link href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <p className="text-lg tracking-[0.04em] text-[#b2b3cf] lg:text-[22px]">
          © 2021 Class Technologies Inc.
        </p>
      </Container>
    </footer>
  );
}
