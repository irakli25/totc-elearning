import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { allInOneCards } from "@/lib/content";

/* "All-In-One Cloud Software" — Figma node 10:904. */
export function AllInOne() {
  return (
    <section className="py-10 lg:py-16">
      <Container className="flex flex-col items-center">
        <h2 className="text-center text-[28px] leading-[1.8] font-bold text-ink lg:text-4xl">
          All-In-One <span className="text-[#00cbb8]">Cloud Software.</span>
        </h2>
        <p className="mt-4 max-w-[837px] text-center text-lg leading-[1.8] text-body lg:text-2xl">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>

        <div className="mt-16 grid w-full max-w-[1470px] justify-items-center gap-x-[60px] gap-y-6 lg:mt-[130px] lg:grid-cols-3">
          {allInOneCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
