import Image from "next/image";
import { BarChartIcon, CalendarIcon, EmailIcon } from "@/components/icons";

/* The four cards that float over the hero photo. Sizes are expressed in `em`
 * so one set of components serves both the proportional desktop canvas (where
 * the parent sets a container-relative font-size) and the stacked mobile
 * layout (where the parent sets a fixed size). 1em === 20px in the Figma
 * frame, the size of the cards' secondary text. */

const shell =
  "flex items-center rounded-[1em] bg-white/80 backdrop-blur-[10px]";

export function StatCard() {
  return (
    <div className={`${shell} h-[5em] w-[15em] gap-[1.6em] pl-[1.4em]`}>
      <span className="grid size-[2.5em] shrink-0 place-items-center rounded-[0.4em] bg-teal-500 text-white">
        <CalendarIcon className="size-[1.375em]" />
      </span>
      <span className="flex flex-col">
        <span className="text-[1.2em] font-bold leading-[1.4] text-muted">250k</span>
        <span className="text-[1em] font-semibold leading-[1.4] text-muted-2">
          Assisted Student
        </span>
      </span>
    </div>
  );
}

export function AdmissionCard() {
  return (
    <div className={`${shell} h-[5.5em] w-[18.5em] gap-[1.2em] pl-[1.3em]`}>
      <span className="grid size-[2.5em] shrink-0 place-items-center rounded-[0.4em] bg-orange-soft text-white">
        <EmailIcon className="size-[1.5em]" />
      </span>
      <span className="flex flex-col">
        <span className="text-[1.2em] font-bold leading-[1.4] text-muted">
          Congratulations
        </span>
        <span className="text-[1em] font-semibold leading-[1.4] text-muted-2">
          Your admission completed
        </span>
      </span>
    </div>
  );
}

export function ClassCard() {
  return (
    <div
      className={`${shell} h-[9.35em] w-[19.5em] flex-col items-start justify-center gap-[0.9em] pl-[1.3em]`}
    >
      <span className="flex items-center gap-[1.15em]">
        <span className="relative shrink-0">
          <Image
            src="/images/home/hero-avatar.png"
            alt=""
            width={56}
            height={56}
            className="size-[2.8em] rounded-full object-cover"
          />
          <span className="absolute right-0 bottom-0 size-[1em] rounded-full border-[0.15em] border-white bg-[#23bf68]" />
        </span>
        <span className="flex flex-col">
          <span className="text-[1.2em] font-bold leading-[1.4] text-muted">
            User Experience Class
          </span>
          <span className="text-[1em] font-semibold leading-[1.4] text-muted-2">
            Today at 12.00 PM
          </span>
        </span>
      </span>
      <span className="ml-[3.95em] grid h-[2.5em] w-[9em] place-items-center rounded-[4em] bg-pink text-[1em] font-bold text-white">
        Join Now
      </span>
    </div>
  );
}

export function ChartTile() {
  return (
    <span className="grid size-[3.45em] place-items-center rounded-[0.7em] bg-pink-soft shadow-tile">
      <span className="grid h-[2.24em] w-[2.37em] place-items-center rounded-[0.4em] bg-white">
        <BarChartIcon className="h-[1.21em] w-[0.91em]" />
      </span>
    </span>
  );
}
