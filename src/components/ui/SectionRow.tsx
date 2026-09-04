import Link from "next/link";
import { Container } from "@/components/ui/Container";

/** Heading plus a "See all" link, the repeating row header on the Course
 *  page — Figma nodes 54:549 and friends. */
export function SectionRow({
  title,
  href = "/courses",
  children,
  className = "",
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-10 lg:py-14 ${className}`}>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-ink lg:text-[32px]">
            {title}
          </h2>
          <Link
            href={href}
            className="text-base font-medium text-teal-400 underline-offset-4 hover:underline lg:text-lg"
          >
            See all
          </Link>
        </div>
        <div className="mt-8 lg:mt-12">{children}</div>
      </Container>
    </section>
  );
}
