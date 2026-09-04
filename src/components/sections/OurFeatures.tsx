import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { featureRows, type FeatureRowContent } from "@/lib/content";
import { cn } from "@/lib/cn";

/* "Our Features" — Figma node 10:465. Five alternating rows, each pairing a
 * product illustration with a heading and either bullets or a paragraph. */
export function OurFeatures() {
  return (
    <section className="py-16 lg:py-[100px]">
      <Container className="flex flex-col items-center">
        <h2 className="display-md text-center font-semibold text-ink">
          Our Features
        </h2>
        <p className="mt-4 max-w-[888px] text-center text-lg leading-[1.8] text-body lg:text-2xl">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>

        <div className="mt-16 flex w-full max-w-[1600px] flex-col gap-20 lg:mt-[130px] lg:gap-[130px]">
          {featureRows.map((row) => (
            <FeatureRow key={row.id} row={row} />
          ))}
        </div>

        <ButtonLink
          href="/courses"
          size="lg"
          className="mt-16 w-[240px] lg:mt-[130px] lg:w-[280px]"
        >
          See more features
        </ButtonLink>
      </Container>
    </section>
  );
}

function FeatureRow({ row }: { row: FeatureRowContent }) {
  const isFirst = row.id === "user-interface";

  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-[100px]",
        row.side === "right" && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative">
        {isFirst ? (
          <>
            <span
              aria-hidden
              className="absolute -top-[76px] left-[8%] hidden size-[140px] rounded-full bg-[#33efa0] lg:block"
            />
            <span
              aria-hidden
              className="absolute -top-[68px] left-[28%] hidden size-[30px] rounded-full bg-[#33d9ef] lg:block"
            />
            <span
              aria-hidden
              className="absolute -bottom-[52px] left-[74%] hidden size-[264px] rounded-full bg-[#5b61eb] lg:block"
            />
            <span
              aria-hidden
              className="absolute -bottom-[16px] left-[74%] hidden size-[30px] rounded-full bg-[#f56666] lg:block"
            />
          </>
        ) : null}
        <div
          className="relative w-full"
          style={{ aspectRatio: row.ratio.replace("/", " / ") }}
        >
          <Image
            src={row.image}
            alt={row.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="max-w-[560px] text-[26px] leading-[1.6] font-semibold text-ink lg:text-[40px]">
          {row.heading}
        </h3>
        {row.body ? (
          <p className="mt-5 max-w-[646px] text-lg leading-[1.8] tracking-[0.02em] text-body lg:mt-5 lg:text-[22px]">
            {row.body}
          </p>
        ) : null}
        {row.bullets ? (
          <ul className="mt-8 flex flex-col gap-6 lg:mt-[62px] lg:gap-[52px]">
            {row.bullets.map((bullet) => (
              <li key={bullet.icon} className="flex items-start gap-6 lg:gap-[42px]">
                <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[#fbfbfb] shadow-[0_4px_20px_rgba(47,50,125,0.12)] lg:size-[60px]">
                  <BulletIcon kind={bullet.icon} />
                </span>
                <p className="max-w-[459px] text-base leading-[1.8] tracking-[0.02em] text-body lg:text-[22px]">
                  {bullet.text}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

/** The three glyphs sitting on the bullet circles — Figma nodes 10:564,
 *  10:570 and 10:573. The first two are plain squares in the design. */
function BulletIcon({ kind }: { kind: "podium" | "presenter" | "roster" }) {
  if (kind === "podium") {
    return (
      <svg aria-hidden viewBox="0 0 26.6 26" className="size-[26px]">
        <rect width="11.818" height="11.818" rx="2" fill="#2f327d" />
        <rect y="14.18" width="11.818" height="11.818" rx="2" fill="#2f327d" />
        <rect x="14.77" width="11.818" height="11.818" rx="2" fill="#2f327d" />
        <rect x="14.77" y="14.18" width="11.818" height="11.818" rx="2" fill="#f48c06" />
      </svg>
    );
  }
  if (kind === "presenter") {
    return (
      <svg aria-hidden viewBox="0 0 29.2 27.2" className="h-[26px] w-[28px]">
        <rect width="21.224" height="21.224" rx="2" fill="#f48c06" />
        <rect x="8" y="6" width="20" height="20" rx="2" fill="#2f327d" />
      </svg>
    );
  }
  return (
    <svg aria-hidden viewBox="0 0 30 26" className="h-[26px] w-[30px]" fill="#2f327d">
      <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4527 20.25 7.3125C20.25 4.17227 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.17227 9.75 7.3125C9.75 10.4527 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.132 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.132 11.7891 14.625H11.4C8.41875 14.625 6 17.2432 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2432 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670313 19.5 1.5 19.5H4.58906C4.88437 17.093 6.225 15.0668 8.11406 13.9445Z" />
    </svg>
  );
}
