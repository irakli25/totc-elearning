import { cn } from "@/lib/cn";

/** The 1680px content band with the design's 120px desktop gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1920px] px-5 md:px-10 xl:px-[120px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
