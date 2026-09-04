import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionRow } from "@/components/ui/SectionRow";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import {
  categoryBlurb,
  coachingCta,
  continueLearning,
  courseCategories,
  courseRows,
  courses,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse TOTC courses by category, pick up where you left off, and see what other students are learning.",
};

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-teal-50 py-12 lg:py-16">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <h1 className="display-md max-w-[966px] font-semibold text-ink">
                Welcome back, ready for your next lesson?
              </h1>
              <Link
                href="/courses"
                className="text-base font-medium text-teal-400 underline-offset-4 hover:underline lg:text-lg"
              >
                View hisotry
              </Link>
            </div>

            <ul className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-[45px]">
              {continueLearning.map((lesson, index) => (
                <li key={index}>
                  <article className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card">
                    <span className="relative aspect-[534/300] w-full">
                      <Image
                        src={lesson.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 534px, 90vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex flex-col gap-2 p-6 lg:p-8">
                      <h2 className="text-xl font-semibold text-ink lg:text-[28px]">
                        {lesson.title}
                      </h2>
                      <span className="text-base text-body lg:text-lg">
                        {lesson.author}
                      </span>
                      <span className="mt-2 text-sm font-medium text-teal-400 lg:text-base">
                        {lesson.progress}
                      </span>
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-14 lg:py-20">
          <Container>
            <h2 className="display-md max-w-[792px] font-semibold text-ink">
              Choice favourite course from top category
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-[45px]">
              {courseCategories.map((category, index) => (
                <li key={`${category.title}-${index}`} className="flex flex-col gap-4">
                  <CategoryIcon kind={category.icon} />
                  <h3 className="text-xl font-semibold text-ink lg:text-2xl">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-body lg:text-base">
                    {categoryBlurb}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {courseRows.slice(0, 2).map((row) => (
          <SectionRow key={row.id} title={row.title}>
            <CourseGrid />
          </SectionRow>
        ))}

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

        {courseRows.slice(2).map((row) => (
          <SectionRow key={row.id} title={row.title}>
            <CourseGrid />
          </SectionRow>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}

function CourseGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[50px]">
      {courses.map((course) => (
        <li key={course.slug}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
