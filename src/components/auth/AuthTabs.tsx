import Link from "next/link";
import { cn } from "@/lib/cn";
import { authCopy } from "@/lib/content";

/** The 329x59 segmented pill above the form — Figma node 28:141. */
export function AuthTabs({ active }: { active: "login" | "register" }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-base font-medium text-ink-soft">{authCopy.greeting}</p>
      <div className="flex h-[59px] w-[329px] max-w-full items-center rounded-pill bg-teal-200 p-[9px]">
        {(["login", "register"] as const).map((tab) => (
          <Link
            key={tab}
            href={`/${tab}`}
            aria-current={active === tab ? "page" : undefined}
            className={cn(
              "grid h-[41px] flex-1 place-items-center rounded-pill text-base font-medium capitalize transition-colors",
              active === tab
                ? "bg-teal-400 text-white shadow-[0_4px_12px_rgba(73,187,189,0.35)]"
                : "text-white/90 hover:text-white",
            )}
          >
            {tab}
          </Link>
        ))}
      </div>
    </div>
  );
}
