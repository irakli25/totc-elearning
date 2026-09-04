import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { testimonial } from "@/lib/content";

/* "Testimonials" — Figma node 10:421. A left copy column and a portrait with
 * a quote card overlapping its lower half. */
export function Testimonials() {
  return (
    <section className="py-16 lg:py-[100px]">
      <Container>
        <div className="mx-auto grid max-w-[1519px] gap-14 lg:grid-cols-[minmax(0,620px)_minmax(0,760px)] lg:gap-12">
          <div className="flex flex-col">
            <p className="flex items-center gap-6 text-lg tracking-[0.08em] text-orange">
              <span aria-hidden className="h-px w-20 bg-orange" />
              {testimonial.eyebrow}
            </p>
            <h2 className="mt-6 display-lg font-semibold text-ink">
              {testimonial.heading}
            </h2>
            {testimonial.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 max-w-[607px] text-lg leading-[1.6] text-body lg:text-2xl"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/blog"
              className="group mt-10 inline-flex w-full max-w-[487px] items-center gap-4 self-start rounded-pill lg:mt-[52px] lg:gap-6"
            >
              <span className="grid h-[64px] min-w-0 flex-1 place-items-center rounded-pill bg-teal-400 px-4 text-center text-base font-medium text-white transition-colors group-hover:bg-teal-600 lg:h-20 lg:text-2xl">
                Write your assessment
              </span>
              <span className="grid size-[64px] shrink-0 place-items-center rounded-full bg-teal-400 text-white transition-transform group-hover:translate-x-1 lg:size-20">
                <ArrowRight />
              </span>
            </Link>
          </div>

          <div className="relative">
            <div className="relative ml-auto aspect-[560/700] w-full max-w-[560px] overflow-hidden rounded-card">
              <Image
                src={testimonial.photo}
                alt="Gloria Rose, a TOTC learner"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>

            <figure className="relative z-10 -mt-16 flex gap-6 rounded-card bg-white p-6 shadow-card sm:p-8 lg:absolute lg:right-0 lg:-bottom-16 lg:mt-0 lg:w-[680px] lg:p-10">
              <span aria-hidden className="w-3.5 shrink-0 rounded-full bg-orange" />
              <div className="flex flex-col gap-6">
                <blockquote className="text-base leading-[1.6] text-body lg:text-xl">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="flex flex-wrap items-end justify-between gap-2">
                  <span className="text-2xl font-semibold text-ink lg:text-[30px]">
                    {testimonial.author}
                  </span>
                  <span className="flex flex-col items-end gap-1">
                    <Stars />
                    <span className="text-sm text-body lg:text-base">
                      {testimonial.meta}
                    </span>
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-7" fill="none">
      <path
        d="M4 12h15m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex gap-1" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" aria-hidden className="size-5 fill-orange">
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.7 1.2 6.7L12 17.2 6.1 20.4l1.2-6.7L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </span>
  );
}
