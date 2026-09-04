import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PlayButton } from "@/components/icons";
import {
  AdmissionCard,
  ChartTile,
  ClassCard,
  StatCard,
} from "@/components/sections/HeroCards";

/* Landing header — Figma node 10:986.
 * The teal band is 1920x1118 and its lower edge bows to y=1118 at the centre.
 * Everything in the frame is masked by that shape, so the student photo is
 * clipped by the arc; here the arc is painted white *over* the photo, which
 * reads identically against the white page below. */
export function Hero() {
  return (
    <section className="relative isolate">
      <div aria-hidden className="absolute inset-0 z-0 bg-teal-400" />

      <div className="relative z-10">
        <SiteHeader variant="hero" />

        <Container>
          <div className="grid items-end gap-12 pb-20 lg:grid-cols-[minmax(0,700px)_minmax(0,911px)] lg:justify-between lg:gap-6 lg:pt-[83px] lg:pb-0">
            <div className="flex flex-col gap-8 pt-6 lg:max-w-[681px] lg:-translate-y-[30%] lg:self-center lg:gap-0 lg:pt-0">
              <h1 className="display-xl font-bold text-white lg:leading-[1.2]">
                <span className="text-orange">Studying</span> Online is now much
                easier
              </h1>
              <p className="body-lg max-w-[523px] text-white lg:mt-[42px]">
                TOTC is an interesting platform that will teach you in more an
                interactive way
              </p>
              <div className="flex flex-wrap items-center gap-6 lg:mt-[46px] lg:gap-10">
                <ButtonLink href="/register" variant="glass" size="lg">
                  Join for free
                </ButtonLink>
                <a
                  href="#what-is-totc"
                  className="group inline-flex items-center gap-4 lg:gap-8"
                >
                  <PlayButton className="size-16 shrink-0 drop-shadow-[0_20px_30px_rgba(61,155,185,0.25)] transition-transform group-hover:scale-105 lg:size-20" />
                  <span className="text-lg text-ink-soft lg:text-2xl">
                    Watch how it works
                  </span>
                </a>
              </div>
            </div>

            {/* Desktop: the 911x892 region from the Figma frame, scaled as a
                unit. Card sizes are in `em` against a container-relative
                font-size, so the whole composition scales together. */}
            <div className="relative hidden aspect-[911/892] w-full self-end @container lg:block">
              <div className="absolute inset-0 text-[2.195cqw]">
              <div className="absolute top-0 left-[22.5%] h-full w-[59.7%]">
                <Image
                  src="/images/common/student.png"
                  alt="A student holding her folders"
                  fill
                  priority
                  sizes="(min-width: 1536px) 544px, 40vw"
                  className="object-cover object-[87%_100%] drop-shadow-[0_4px_100px_rgba(29,28,24,0.25)]"
                />
              </div>
              <div className="absolute top-[20.7%] left-[1.3%]">
                <StatCard />
              </div>
              <div className="absolute top-[14.6%] left-[81.4%]">
                <ChartTile />
              </div>
              <div className="absolute top-[42.6%] left-[59.4%]">
                <AdmissionCard />
              </div>
              <div className="absolute top-[58.3%] left-0">
                <ClassCard />
              </div>
              </div>
            </div>

            {/* Below lg the cards stop being decoration and become a readable
                stack beside a centred portrait. */}
            <div className="flex flex-col items-center gap-8 lg:hidden">
              <div className="relative h-[420px] w-full max-w-[320px] overflow-hidden rounded-card">
                <Image
                  src="/images/common/student.png"
                  alt="A student holding her folders"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-[87%_20%]"
                />
              </div>
              <div className="flex w-full flex-wrap justify-center gap-4 text-[13px] sm:text-[15px]">
                <StatCard />
                <AdmissionCard />
                <ClassCard />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <CurveDivider className="absolute inset-x-0 bottom-0 z-20" />
    </section>
  );
}
