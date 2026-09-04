import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlayButton } from "@/components/icons";

/* "You Can Do With TOTC" — Figma node 10:873. A split row with a video still
 * and three #33EFA0 / #23BDEE decorations tucked behind it. */
export function WhatYouCanDo() {
  return (
    <section className="py-16 lg:py-[100px]">
      <Container>
        <div className="mx-auto grid max-w-[1547px] items-center gap-12 lg:grid-cols-[minmax(0,730px)_minmax(0,705px)] lg:justify-between lg:gap-16">
          <div className="relative">
            <span
              aria-hidden
              className="absolute -top-3 -left-4 hidden size-[73px] rounded-full bg-[#33efa0] lg:block"
            />
            <h2 className="relative max-w-[655px] text-[28px] leading-[1.6] font-medium text-ink lg:text-4xl">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#00cbb8]">you can do with TOTC</span>
            </h2>
            <p className="relative mt-6 max-w-[730px] text-lg leading-[1.8] tracking-[0.02em] text-body lg:mt-[42px] lg:text-2xl">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <span
              aria-hidden
              className="absolute right-0 bottom-[22%] hidden size-[30px] rounded-full bg-[#33efa0] lg:block"
            />
            <Link
              href="/courses"
              className="relative mt-6 inline-block text-lg text-body underline underline-offset-4 transition-colors hover:text-teal-400 lg:mt-[50px] lg:text-[22px]"
            >
              Learn more
            </Link>
          </div>

          <div className="relative">
            <span
              aria-hidden
              className="absolute -top-5 -left-5 hidden size-[138px] rounded-card bg-[#23bdee] lg:block"
            />
            <span
              aria-hidden
              className="absolute -right-5 -bottom-5 hidden size-[231px] rounded-card bg-[#33efa0] lg:block"
            />
            <div className="relative aspect-[705/471] w-full overflow-hidden rounded-card">
              <Image
                src="/images/home/classroom.jpg"
                alt="A teacher leading a lesson in a computer classroom"
                fill
                sizes="(min-width: 1024px) 705px, 100vw"
                className="object-cover"
              />
            </div>
            <button
              type="button"
              aria-label="Play the product tour"
              className="absolute top-1/2 left-1/2 size-[56px] -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105 lg:size-[70px]"
            >
              <PlayButton className="size-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
