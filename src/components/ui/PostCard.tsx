import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content";

/** Large blog card used by the "Related Blog" rows — Figma node 37:113. */
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
        <span className="relative aspect-[685/382] w-full overflow-hidden">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 685px, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </span>
        <span className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
          <h3 className="text-xl leading-[1.4] font-semibold text-ink lg:text-[28px]">
            {post.title}
          </h3>
          <span className="text-base text-body">{post.author}</span>
          <span className="flex-1 text-base leading-[1.7] text-body lg:text-lg">
            {post.excerpt}
          </span>
          <span className="flex items-center justify-between pt-2">
            <span className="text-base font-medium text-teal-400 underline underline-offset-4 lg:text-lg">
              Read more
            </span>
            <span className="flex items-center gap-2 text-base text-body">
              <EyeIcon />
              {post.views}
            </span>
          </span>
        </span>
      </Link>
    </article>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="none">
      <path
        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
