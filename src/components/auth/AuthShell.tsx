import Image from "next/image";
import Link from "next/link";
import { DiamondOutline } from "@/components/icons";
import { cn } from "@/lib/cn";

/* The auth screens are a 737x825 photo panel beside a 454-wide form column,
 * on a 1440x900 frame — Figma nodes 28:131 and 28:172. Below lg the panel is
 * dropped and the form fills the screen, matching frames 28:62 and 28:97. */
export function AuthShell({
  image,
  title,
  subtitle,
  children,
}: {
  image: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <div className="px-6 pt-6 lg:px-10 lg:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1"
          aria-label="TOTC home"
        >
          <DiamondOutline className="size-12" />
          <span className="-ml-[34px] text-xl font-bold tracking-[0.04em] text-muted-3">
            TOTC
          </span>
        </Link>
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-10 px-6 py-10 lg:grid-cols-[minmax(0,737px)_minmax(0,454px)] lg:justify-between lg:gap-[111px] lg:px-10">
        <div className="relative hidden aspect-[737/825] w-full max-w-[737px] overflow-hidden rounded-[20px] lg:block">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 0px"
            className="object-cover"
          />
          <span
            aria-hidden
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-t from-black/55 via-black/10 to-transparent",
            )}
          />
          <div className="absolute right-9 bottom-14 left-9 flex flex-col gap-1.5 text-white">
            <p className="text-3xl font-bold xl:text-[40px]">{title}</p>
            <p className="text-lg text-white/80 xl:text-2xl">{subtitle}</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[454px]">{children}</div>
      </div>
    </div>
  );
}
