import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";

/** The Figma file has no legal frames, but the footer links to both pages, so
 *  these exist to keep every link in the design reachable. */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-14 lg:py-20">
        <Container>
          <article className="flex max-w-[900px] flex-col gap-6 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_p]:text-base [&_p]:leading-[1.8] [&_p]:text-body lg:[&_p]:text-lg">
            {children}
          </article>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
