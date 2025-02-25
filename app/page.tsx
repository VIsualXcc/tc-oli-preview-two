import CTA from "@/components/cta";
import { FrequentlyAskedQuestions } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero} from "@/components/hero";
import { HeroTwo } from "@/components/hero_TwoColumn";
import { SpotlightLogoCloud } from "@/components/logos-cloud";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import SEO from "@/components/seo";


export default function Home() {
  return (
    <div>
      <SEO />
      <Hero />
      <HeroTwo />
      <SpotlightLogoCloud />
      <Features />
      <Testimonials />
      <Pricing />
      <FrequentlyAskedQuestions />
      <CTA />
    </div>
  );
}
