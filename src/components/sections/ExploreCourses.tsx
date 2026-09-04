import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { courseShelves } from "@/lib/content";
import { cn } from "@/lib/cn";

/* "Explore Course" — Figma node 10:1461. Three shelves of overlapping book
 * spines, each with one title opened into a detail panel. The open panel sits
 * at a different position on every shelf, as in the frame. */
const openAt = [7, 4, 1];

const spineColours = [
  "bg-[#5b61eb]",
  "bg-teal-400",
  "bg-[#f48c06]",
  "bg-[#d8587e]",
  "bg-[#33d9ef]",
  "bg-[#2f327d]",
  "bg-[#33efa0]",
];

export function ExploreCourses() {
  return (
    <section className="py-16 lg:py-[100px]">
      <Container>
        <div className="rounded-[40px] bg-teal-50 px-5 py-12 sm:px-10 lg:px-[120px] lg:py-[100px]">
          <h2 className="display-md max-w-[764px] font-semibold text-ink">
            Explore Course
          </h2>
          <p className="mt-4 max-w-[764px] text-lg leading-[1.8] text-body lg:text-2xl">
            Browse the shelves by subject and open any title to see what the
            course covers.
          </p>

          <div className="mt-12 flex flex-col gap-14 lg:mt-[100px] lg:gap-20">
            {courseShelves.map((shelf, shelfIndex) => (
              <div key={shelf.id}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="flex items-center gap-4 text-xl font-semibold text-ink lg:text-2xl">
                    <ShelfIcon kind={shelf.icon} />
                    {shelf.title}
                  </h3>
                  <Link
                    href="/courses"
                    className="inline-flex h-10 items-center rounded-pill border border-teal-400 px-6 text-sm font-medium text-teal-400 transition-colors hover:bg-teal-400 hover:text-white lg:text-base"
                  >
                    See all
                  </Link>
                </div>

                <div className="relative mt-8 w-full min-w-0">
                  <ul className="flex w-full min-w-0 snap-x snap-mandatory items-end gap-3 overflow-x-auto pb-6 lg:gap-0">
                    {shelf.spines.map((spine, index) => (
                      <Spine
                        key={spine}
                        title={spine}
                        colour={spineColours[(index + shelfIndex) % spineColours.length]}
                        overlap={index > 0}
                      />
                    ))}
                    <li
                      className="shrink-0 snap-start lg:ml-2"
                      style={{ order: openAt[shelfIndex] }}
                    >
                      <article className="flex h-[430px] w-[320px] flex-col justify-end gap-4 rounded-card bg-white p-8 shadow-card sm:w-[480px] lg:w-[685px] lg:p-10">
                        <p className="text-sm font-medium tracking-[0.08em] text-teal-400 uppercase">
                          {shelf.title}
                        </p>
                        <h4 className="text-2xl font-semibold text-ink lg:text-[32px]">
                          {shelf.detail.title}
                        </h4>
                        <p className="text-base leading-[1.7] text-body lg:text-xl">
                          {shelf.detail.body}
                        </p>
                        <p className="text-sm text-body lg:text-base">
                          {shelf.detail.meta}
                        </p>
                        <Link
                          href="/courses"
                          className="mt-2 inline-flex h-12 w-fit items-center rounded-pill bg-teal-400 px-8 text-base font-medium text-white transition-colors hover:bg-teal-600"
                        >
                          View course
                        </Link>
                      </article>
                    </li>
                  </ul>
                  <span
                    aria-hidden
                    className="block h-[18px] rounded-b-xl bg-[#d8d8e4] shadow-[0_10px_20px_rgba(47,50,125,0.12)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Spine({
  title,
  colour,
  overlap,
}: {
  title: string;
  colour: string;
  overlap: boolean;
}) {
  return (
    <li className={cn("shrink-0 snap-start", overlap && "lg:-ml-[40px]")}>
      <span
        className={cn(
          "flex h-[325px] w-[92px] items-center justify-center rounded-t-lg rounded-b-sm shadow-[0_10px_30px_rgba(47,50,125,0.18)] transition-transform hover:-translate-y-2 lg:h-[325px] lg:w-[117px]",
          colour,
        )}
      >
        <span
          className="text-base font-semibold tracking-[0.04em] text-white lg:text-lg"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {title}
        </span>
      </span>
    </li>
  );
}

function ShelfIcon({ kind }: { kind: "palette" | "globe" | "ribbon" }) {
  const common = "size-7 text-teal-400";
  if (kind === "palette") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={common} fill="none">
        <path
          d="M12 3a9 9 0 100 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.3-.3-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 005-5c0-3.9-4-6.6-9-6.6z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" />
        <circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" />
        <circle cx="15" cy="8.5" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={common} fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3 12h18M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={common} fill="none">
      <circle cx="12" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 13L7 22l5-2.5L17 22l-1.5-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
