import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/ui/PostCard";
import { SectionRow } from "@/components/ui/SectionRow";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  return post
    ? { title: post.title, description: post.excerpt }
    : { title: "Article" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const related = posts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative aspect-[1920/652] w-full">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <article className="py-14 lg:py-20">
          <Container>
            <h1 className="display-lg max-w-[1385px] font-bold text-ink">
              {post.title}
            </h1>
            <div className="mt-10 flex max-w-[1681px] flex-col gap-8">
              {post.body.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-lg leading-[1.7] font-medium text-ink lg:text-2xl"
                      : "text-base leading-[1.8] text-body lg:text-xl"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-12 flex flex-wrap gap-4">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex h-[49px] items-center rounded-md bg-teal-50 px-6 text-base text-teal-700">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-10">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/common/student.png"
                  alt=""
                  width={62}
                  height={62}
                  className="size-[62px] rounded-full object-cover object-[30%_18%]"
                />
                <span className="flex flex-col">
                  <span className="text-sm text-body">Written by</span>
                  <span className="text-lg font-semibold text-ink">
                    {post.author}
                  </span>
                </span>
              </div>
              <Link
                href="/membership"
                className="inline-flex h-[49px] items-center rounded-pill bg-teal-400 px-8 text-base font-medium text-white transition-colors hover:bg-teal-600"
              >
                Follow
              </Link>
            </div>
          </Container>
        </article>

        <SectionRow title="Related Blog" href="/blog">
          <ul className="grid gap-8 lg:grid-cols-2 lg:gap-[76px]">
            {related.map((entry) => (
              <li key={entry.slug}>
                <PostCard post={entry} />
              </li>
            ))}
          </ul>
        </SectionRow>
      </main>
      <SiteFooter />
    </>
  );
}
