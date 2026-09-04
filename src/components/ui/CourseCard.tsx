import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/content";

/* Course card from the Course page rows — Figma node 54:434. 374 wide at
 * 1920, image on top, then tag row, title, blurb and an author/price footer. */
export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card">
      <Link href={`/courses/${course.slug}`} className="group flex h-full flex-col">
        <span className="relative aspect-[374/260] w-full overflow-hidden">
          <Image
            src={course.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 374px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </span>

        <span className="flex flex-1 flex-col gap-3 p-6">
          <span className="flex items-center justify-between text-sm text-body">
            <span className="rounded-md bg-teal-50 px-3 py-1 font-medium text-teal-600">
              {course.category}
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon />
              {course.duration}
            </span>
          </span>

          <h3 className="text-lg leading-[1.4] font-semibold text-ink lg:text-[22px]">
            {course.title}
          </h3>
          <p className="flex-1 text-sm leading-[1.7] text-body lg:text-base">
            {course.blurb}
          </p>

          <span className="mt-2 flex items-center justify-between border-t border-black/5 pt-4">
            <span className="flex items-center gap-2 text-sm text-body">
              <span className="grid size-7 place-items-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                {course.author.charAt(0)}
              </span>
              {course.author}
            </span>
            <span className="flex items-baseline gap-2">
              <span className="text-sm text-body line-through">
                {course.priceWas}
              </span>
              <span className="text-lg font-semibold text-ink">
                {course.price}
              </span>
            </span>
          </span>
        </span>
      </Link>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
