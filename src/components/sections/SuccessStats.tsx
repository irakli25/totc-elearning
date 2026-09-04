import { Container } from "@/components/ui/Container";
import { successStats } from "@/lib/content";

/* "Our Success" — Figma node 136:353. The counters use a light 96px face with
 * a #136CB5 → #49BBBD gradient clipped to the text. */
export function SuccessStats() {
  return (
    <section className="py-16 lg:py-[100px]">
      <Container className="flex flex-col items-center gap-10 lg:gap-[100px]">
        <div className="flex max-w-[750px] flex-col items-center gap-4 text-center">
          <h2 className="display-md font-bold text-[#010514]">Our Success</h2>
          <p className="text-base leading-[1.6] text-[#010514]/80 lg:text-lg">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

        <dl className="flex w-full flex-wrap items-start justify-center gap-x-10 gap-y-10 text-center sm:gap-x-16 2xl:flex-nowrap 2xl:justify-between 2xl:gap-x-[95px]">
          {successStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="bg-gradient-to-r from-[#136cb5] to-[#49bbbd] bg-clip-text text-[56px] leading-none font-light text-transparent lg:text-[72px] 2xl:text-[96px]">
                {stat.value}
              </dt>
              <dd className="text-lg leading-[1.3] whitespace-nowrap text-[#010514]/80 lg:text-2xl 2xl:text-[32px]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
