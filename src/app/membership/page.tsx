import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import {
  applyPanels,
  coachingCta,
  faqs,
  pricingPlans,
  studentQuotes,
} from "@/lib/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Affordable pricing for teachers, schools and multi-campus organisations running virtual classrooms on TOTC.",
};

export default function MembershipPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="py-14 lg:py-20">
          <Container className="flex flex-col items-center">
            <h1 className="display-lg text-center font-bold text-ink">
              Affordable pricing
            </h1>

            <ul className="mt-12 grid w-full max-w-[1210px] gap-8 lg:mt-[100px] lg:grid-cols-3 lg:gap-[30px]">
              {pricingPlans.map((plan) => (
                <li key={plan.name}>
                  <article
                    className={cn(
                      "flex h-full min-h-[536px] flex-col gap-6 rounded-card p-8 lg:p-10",
                      plan.featured
                        ? "bg-teal-400 text-white shadow-[0_20px_60px_rgba(73,187,189,0.35)]"
                        : "bg-white text-ink shadow-card",
                    )}
                  >
                    <h2
                      className={cn(
                        "text-2xl font-semibold",
                        plan.featured ? "text-white" : "text-ink",
                      )}
                    >
                      {plan.name}
                    </h2>
                    <p className="flex items-baseline gap-1">
                      <span className="text-[44px] leading-none font-bold">
                        {plan.price}
                      </span>
                      <span
                        className={cn(
                          "text-lg",
                          plan.featured ? "text-white/80" : "text-body",
                        )}
                      >
                        {plan.period}
                      </span>
                    </p>
                    <p
                      className={cn(
                        "text-base leading-[1.7]",
                        plan.featured ? "text-white/85" : "text-body",
                      )}
                    >
                      {plan.blurb}
                    </p>
                    <ul className="flex flex-1 flex-col gap-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckIcon
                            className={
                              plan.featured ? "text-white" : "text-teal-400"
                            }
                          />
                          <span
                            className={cn(
                              "text-base",
                              plan.featured ? "text-white/90" : "text-body",
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ButtonLink
                      href="/register"
                      size="sm"
                      variant={plan.featured ? "white" : "primary"}
                      className="w-full"
                    >
                      Choose {plan.name}
                    </ButtonLink>
                  </article>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-10 lg:py-14">
          <Container>
            <div className="flex flex-col items-center gap-6 rounded-[28px] bg-teal-50 px-6 py-14 text-center lg:px-20 lg:py-[70px]">
              <h2 className="display-md max-w-[827px] font-semibold text-ink">
                {coachingCta.title}
              </h2>
              <p className="max-w-[1259px] text-base leading-[1.8] text-body lg:text-xl">
                {coachingCta.body}
              </p>
              <ButtonLink href="/register" className="mt-4">
                {coachingCta.cta}
              </ButtonLink>
            </div>
          </Container>
        </section>

        <section className="py-14 lg:py-20">
          <Container>
            <h2 className="display-md max-w-[827px] font-semibold text-ink">
              Online coaching lessons for remote learning
            </h2>
            <div className="mt-10 lg:mt-14">
              <Accordion items={faqs} />
            </div>
          </Container>
        </section>

        <section className="bg-teal-50 py-14 lg:py-20">
          <Container>
            <h2 className="display-md max-w-[572px] font-semibold text-ink">
              What our students have to say
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[30px]">
              {studentQuotes.map((quote, index) => (
                <li key={index}>
                  <figure className="flex h-full flex-col items-center gap-5 rounded-card bg-white px-8 py-10 text-center shadow-card">
                    <Image
                      src={quote.avatar}
                      alt=""
                      width={118}
                      height={118}
                      className="size-[118px] rounded-full object-cover object-[30%_18%]"
                    />
                    <figcaption className="text-xl font-semibold text-ink lg:text-2xl">
                      {quote.name}
                    </figcaption>
                    <blockquote className="text-base leading-[1.7] text-body">
                      {quote.quote}
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-14 lg:py-20">
          <Container className="flex flex-col items-center gap-8 text-center">
            <h2 className="display-md max-w-[448px] font-semibold text-ink">
              APP is available for free
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {["Android APP", "IOS APP"].map((store) => (
                <Link
                  key={store}
                  href="/register"
                  className="inline-flex h-[60px] items-center gap-3 rounded-pill bg-ink-soft px-8 text-base font-medium text-white transition-colors hover:bg-ink lg:text-lg"
                >
                  {store}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="apply" className="scroll-mt-24 py-14 lg:py-20">
          <Container>
            <ul className="grid gap-8 lg:grid-cols-2 lg:gap-[108px]">
              {applyPanels.map((panel) => (
                <li key={panel.title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card">
                    <span className="relative aspect-[786/430] w-full">
                      <Image
                        src={panel.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 786px, 90vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex flex-1 flex-col gap-5 p-8 lg:p-10">
                      <h3 className="text-2xl font-semibold text-ink lg:text-[32px]">
                        {panel.title}
                      </h3>
                      <span className="flex-1 text-base leading-[1.8] text-body lg:text-lg">
                        {panel.body}
                      </span>
                      <ButtonLink href="/register" size="sm" className="w-fit">
                        {panel.cta}
                      </ButtonLink>
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("mt-0.5 size-5 shrink-0", className)}
      fill="none"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
