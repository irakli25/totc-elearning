import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionRow } from "@/components/ui/SectionRow";
import { PlayButton } from "@/components/icons";
import { courses } from "@/lib/content";
import { cn } from "@/lib/cn";

const ratingBars = [
  { label: "5 Stars", percent: 62 },
  { label: "4 Stars", percent: 24 },
  { label: "3 Stars", percent: 9 },
  { label: "2 Stars", percent: 3 },
  { label: "1 Stars", percent: 2 },
];

const included = [
  "Money Back Guarantee",
  "Access on all devices",
  "Certification of completion",
  "32 Moduls",
];

const reviews = [
  {
    author: "Lina",
    when: "3 Month",
    body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call itself.",
  },
  {
    author: "Lina",
    when: "3 Month",
    body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call itself.",
  },
];

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((entry) => entry.slug === slug);
  return course
    ? { title: course.title, description: course.blurb }
    : { title: "Course" };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((entry) => entry.slug === slug);
  if (!course) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate">
          <div className="relative aspect-[1920/700] w-full">
            <Image
              src="/images/courses/detail-hero.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <span aria-hidden className="absolute inset-0 bg-ink-soft/45" />
            <button
              type="button"
              aria-label={`Play the preview for ${course.title}`}
              className="absolute top-1/2 left-1/2 size-[56px] -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105 lg:size-[70px]"
            >
              <PlayButton className="size-full" />
            </button>
          </div>
        </section>

        <Container className="py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,950px)_minmax(0,435px)] lg:justify-between lg:gap-16">
            <div>
              <h1 className="display-md font-semibold text-ink">
                {course.title}
              </h1>

              <nav aria-label="Course sections" className="mt-8 border-b border-black/10">
                <ul className="flex flex-wrap gap-8">
                  {["Overview", "Curriculum", "Instructor", "Reviews"].map(
                    (tab, index) => (
                      <li key={tab}>
                        <span
                          className={cn(
                            "inline-block pb-4 text-lg font-medium lg:text-xl",
                            index === 0
                              ? "border-b-2 border-teal-400 text-teal-400"
                              : "text-body",
                          )}
                        >
                          {tab}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </nav>

              <p className="mt-8 max-w-[847px] text-base leading-[1.8] text-body lg:text-xl">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively with Zoom to bring
                assignments, quizzes, attendance and grading into the video call
                itself.
              </p>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-ink lg:text-[32px]">
                  4 out of 5
                </h2>
                <p className="mt-1 text-lg text-teal-400">Top Raiting</p>
                <ul className="mt-6 flex max-w-[560px] flex-col gap-3">
                  {ratingBars.map((bar) => (
                    <li key={bar.label} className="flex items-center gap-4">
                      <span className="w-[70px] shrink-0 text-base text-body">
                        {bar.label}
                      </span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-teal-50">
                        <span
                          className="block h-full rounded-full bg-orange"
                          style={{ width: `${bar.percent}%` }}
                        />
                      </span>
                      <span className="w-10 shrink-0 text-right text-sm text-body">
                        {bar.percent}%
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-ink lg:text-[32px]">
                  Reviews
                </h2>
                <ul className="mt-6 flex flex-col gap-8">
                  {reviews.map((review, index) => (
                    <li key={index} className="flex gap-4">
                      <Image
                        src="/images/common/student.png"
                        alt=""
                        width={62}
                        height={62}
                        className="size-[62px] shrink-0 rounded-full object-cover object-[30%_18%]"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-4">
                          <span className="text-lg font-semibold text-ink">
                            {review.author}
                          </span>
                          <span className="text-sm text-body">
                            {review.when}
                          </span>
                        </p>
                        <p className="max-w-[847px] text-base leading-[1.8] text-body">
                          {review.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="flex flex-col gap-6 rounded-card bg-white p-8 shadow-card">
                <p className="flex flex-wrap items-baseline gap-3">
                  <span className="text-[44px] leading-none font-bold text-ink">
                    $49.65
                  </span>
                  <span className="text-2xl text-body line-through">$99.99</span>
                  <span className="rounded-md bg-orange px-3 py-1 text-base font-medium text-white">
                    50% Off
                  </span>
                </p>
                <p className="flex items-center gap-2 text-base text-[#d8587e]">
                  <ClockIcon />
                  11 hour left at this price
                </p>
                <Link
                  href="/register"
                  className="grid h-[60px] place-items-center rounded-pill bg-teal-400 text-lg font-medium text-white transition-colors hover:bg-teal-600"
                >
                  Buy Now
                </Link>

                <div className="border-t border-black/10 pt-6">
                  <h2 className="text-xl font-semibold text-ink">
                    This Course included
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-base text-body">
                        <span aria-hidden className="size-2 rounded-full bg-teal-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 border-t border-black/10 pt-6">
                  <Link
                    href="/membership"
                    className="text-base font-medium text-teal-400 underline-offset-4 hover:underline"
                  >
                    Training 5 or more people
                  </Link>
                  <Link
                    href="/blog"
                    className="text-base font-medium text-teal-400 underline-offset-4 hover:underline"
                  >
                    Share this course
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>

        <SectionRow title="Marketing Articles" href="/courses">
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[50px]">
            {courses.map((entry) => (
              <li key={entry.slug}>
                <CourseCard course={entry} />
              </li>
            ))}
          </ul>
        </SectionRow>
      </main>
      <SiteFooter />
    </>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
