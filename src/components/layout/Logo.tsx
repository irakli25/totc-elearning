import Link from "next/link";
import { DiamondOutline } from "@/components/icons";
import { cn } from "@/lib/cn";

/** Diamond outline plus the TOTC wordmark. The outline is #00FFF0 in the
 *  Figma file on both the teal hero and the white interior header. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="TOTC home"
    >
      <span className="relative grid size-[58px] place-items-center lg:size-[83px]">
        <DiamondOutline className="absolute inset-0 size-full" />
      </span>
      <span
        className={cn(
          "-ml-[43px] text-[22px] font-bold tracking-[0.04em] lg:-ml-[61px] lg:text-[32px]",
          tone === "light" ? "text-white" : "text-muted-3",
        )}
      >
        TOTC
      </span>
    </Link>
  );
}
