import { Hero } from "@/components/sections/Hero";
import { SuccessStats } from "@/components/sections/SuccessStats";
import { AllInOne } from "@/components/sections/AllInOne";
import { WhatIsTotc } from "@/components/sections/WhatIsTotc";
import { WhatYouCanDo } from "@/components/sections/WhatYouCanDo";
import { OurFeatures } from "@/components/sections/OurFeatures";
import { ExploreCourses } from "@/components/sections/ExploreCourses";
import { Testimonials } from "@/components/sections/Testimonials";
import { LatestNews } from "@/components/sections/LatestNews";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <SuccessStats />
        <AllInOne />
        <WhatIsTotc />
        <WhatYouCanDo />
        <OurFeatures />
        <ExploreCourses />
        <Testimonials />
        <LatestNews />
      </main>
      <SiteFooter />
    </>
  );
}
