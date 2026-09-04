import { cn } from "@/lib/cn";

/** The signature arc that separates coloured bands in the design.
 *  Geometry is taken verbatim from the `header-pic` export: the teal rectangle
 *  ends at y=990 of 1118 and bows to y=1118 at the horizontal centre, i.e. a
 *  128px arc with control points at x=302 and x=1618 on a 1920 canvas.
 *  This paints the region *below* the arc, so it caps the bottom of a coloured
 *  band using the colour of whatever follows. */
export function CurveDivider({
  className,
  fill = "#ffffff",
  flip = false,
}: {
  className?: string;
  fill?: string;
  /** Mirror vertically to cap the top of a band instead of the bottom. */
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1920 128"
      preserveAspectRatio="none"
      className={cn(
        "block h-10 w-full sm:h-20 lg:h-32",
        flip && "rotate-180",
        className,
      )}
    >
      <path
        d="M0 0C0 0 302 128 960 128C1618 128 1920 0 1920 0L1920 128L0 128Z"
        fill={fill}
      />
    </svg>
  );
}
