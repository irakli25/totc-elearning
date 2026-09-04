import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { newsFeatured, newsList } from "@/lib/content";

/* "Lastest News and Resources" — Figma node 10:382. The heading keeps the
 * file's original spelling. One featured card beside a three-item list. */
export function LatestNews() {
  return (
    <section className="py-16 lg:py-[100px]">
      <Container className="flex flex-col items-center">
        <h2 className="display-md text-center font-semibold text-ink">
          Lastest News and Resources
        </h2>
        <p className="mt-4 max-w-[676px] text-center text-lg leading-[1.8] text-body lg:text-2xl">
          See the developments that have occurred to TOTC in the world
        </p>

        <div className="mt-12 grid w-full max-w-[1557px] gap-12 lg:mt-[100px] lg:grid-cols-[minmax(0,640px)_minmax(0,797px)] lg:justify-between lg:gap-[120px]">
          <article className="flex flex-col">
            <Link href={newsFeatured.href} className="group flex flex-col">
              <span className="relative aspect-[640/340] w-full overflow-hidden rounded-card">
                <Image
                  src={newsFeatured.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <Tag className="mt-10">{newsFeatured.tag}</Tag>
              <h3 className="mt-6 max-w-[609px] text-2xl leading-[1.4] font-semibold text-ink lg:text-[32px]">
                {newsFeatured.title}
              </h3>
              <p className="mt-5 max-w-[609px] text-base leading-[1.8] text-body lg:text-xl">
                {newsFeatured.excerpt}
              </p>
              <span className="mt-6 text-base font-medium text-teal-400 underline underline-offset-4 lg:text-xl">
                Read more
              </span>
            </Link>
          </article>

          <div className="flex flex-col gap-8 lg:gap-[50px]">
            {newsList.map((item) => (
              <article key={item.title}>
                <Link
                  href={item.href}
                  className="group grid gap-5 sm:grid-cols-[280px_minmax(0,1fr)] sm:gap-10"
                >
                  <span className="relative aspect-[280/200] w-full overflow-hidden rounded-card">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Tag className="absolute right-4 bottom-4">{item.tag}</Tag>
                  </span>
                  <span className="flex flex-col">
                    <h3 className="text-lg leading-[1.4] font-semibold text-ink lg:text-[22px]">
                      {item.title}
                    </h3>
                    <span className="mt-3 text-base leading-[1.7] text-body lg:text-lg">
                      {item.excerpt}
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-9 w-fit items-center rounded-md bg-orange px-4 text-sm font-medium tracking-[0.04em] text-white lg:h-10 lg:text-base ${className}`}
    >
      {children}
    </span>
  );
}
