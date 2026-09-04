import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PostCard } from "@/components/ui/PostCard";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionRow } from "@/components/ui/SectionRow";
import { blogCategories, blogHero, courses, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, releases and teaching resources from the TOTC team and the wider virtual classroom community.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <Image
            src={blogHero.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-soft/85 via-ink-soft/65 to-ink-soft/40"
          />
          <Container className="py-20 lg:py-[130px]">
            <div className="flex max-w-[688px] flex-col gap-6 text-white">
              <p className="text-lg lg:text-2xl">{blogHero.kicker}</p>
              <h1 className="display-lg font-bold">{blogHero.title}</h1>
              <p className="text-base leading-[1.7] text-white/85 lg:text-xl">
                {blogHero.body}
              </p>
              <ButtonLink href="/courses" className="mt-2 w-fit">
                {blogHero.cta}
              </ButtonLink>
            </div>
          </Container>
        </section>

        <section className="py-14 lg:py-20">
          <Container>
            <h2 className="text-2xl font-semibold text-ink lg:text-[32px]">
              Reading blog list
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[76px]">
              {blogCategories.map((category) => (
                <li key={category.title}>
                  <Link
                    href="/blog"
                    className="group relative block aspect-[356/327] overflow-hidden rounded-card"
                  >
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 356px, 45vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span aria-hidden className="absolute inset-0 bg-ink-soft/35" />
                    <span className="absolute inset-x-8 bottom-6 grid h-[63px] place-items-center rounded-pill bg-white/90 text-xl font-semibold text-ink backdrop-blur-sm xl:inset-x-[60px]">
                      {category.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <SectionRow title="Related Blog" href="/blog">
          <ul className="grid gap-8 lg:grid-cols-2 lg:gap-[76px]">
            {posts.slice(1, 3).map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </SectionRow>

        <SectionRow title="Marketing Articles" href="/courses">
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[50px]">
            {courses.map((course) => (
              <li key={course.slug}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        </SectionRow>
      </main>
      <SiteFooter />
    </>
  );
}
