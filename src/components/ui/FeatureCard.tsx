import Image from "next/image";

export type FeatureCardData = {
  title: string;
  body: string;
  /** Exported badge SVG: a 180x180 canvas holding a 100px circle at x 40..140
   *  with room for the drop shadow. */
  badge: string;
  /** Top edge of the circle inside that canvas, so it can be pinned exactly. */
  badgeOffsetY: number;
};

/** White card with a gradient circle badge straddling its top edge —
 *  Figma nodes 10:907 to 10:915. */
export function FeatureCard({ title, body, badge, badgeOffsetY }: FeatureCardData) {
  return (
    <article className="relative mt-[57px] flex w-full max-w-[450px] flex-col items-center justify-center gap-5 rounded-card bg-white px-8 pt-14 pb-10 text-center shadow-card sm:px-[52px] lg:h-[430px] lg:pt-8">
      <span className="absolute -top-[57px] left-1/2 size-[100px] -translate-x-1/2">
        <Image
          src={badge}
          alt=""
          width={180}
          height={180}
          className="absolute max-w-none"
          style={{ left: -40, top: -badgeOffsetY }}
        />
      </span>
      <h3 className="text-2xl font-medium text-ink lg:text-[30px]">{title}</h3>
      <p className="text-base leading-[1.8] text-body lg:text-xl">{body}</p>
    </article>
  );
}
