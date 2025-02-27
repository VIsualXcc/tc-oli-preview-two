import { Suspense, lazy } from 'react';
import { Hero, SpotlightNewDemo } from "@/components/hero";
import { HeroTwo } from "@/components/hero_TwoColumn";
import LazyLoad from '@/components/lazy-load';

// Dynamisch geladene Komponenten
const SpotlightLogoCloud = lazy(() => import("@/components/logos-cloud").then(mod => ({ default: mod.SpotlightLogoCloud })));
const Features = lazy(() => import("@/components/features").then(mod => ({ default: mod.Features })));
const Testimonials = lazy(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })));
const Pricing = lazy(() => import("@/components/pricing").then(mod => ({ default: mod.Pricing })));
const FrequentlyAskedQuestions = lazy(() => import("@/components/faq").then(mod => ({ default: mod.FrequentlyAskedQuestions })));
const CTA = lazy(() => import("@/components/cta"));

// Einfacher Loader für Suspense
const Loader = () => <div className="h-40 w-full flex items-center justify-center"><div className="animate-pulse w-6 h-6 rounded-full bg-gray-300"></div></div>;


export default function Home() {
  return (
    <div>
      <Hero />
      <HeroTwo />
      
      {/* Demo-Komponente auskommentiert - bei Bedarf aktivieren */}
      {/* <SpotlightNewDemo /> */}
      
      <LazyLoad height={300} priority={false}>
        <Suspense fallback={<Loader />}>
          <SpotlightLogoCloud />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad height={400} priority={false}>
        <Suspense fallback={<Loader />}>
          <Features />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad height={400} priority={false}>
        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad height={500} priority={false}>
        <Suspense fallback={<Loader />}>
          <Pricing />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad height={400} priority={false}>
        <Suspense fallback={<Loader />}>
          <FrequentlyAskedQuestions />
        </Suspense>
      </LazyLoad>
      
      <LazyLoad height={200} priority={false}>
        <Suspense fallback={<Loader />}>
          <CTA />
        </Suspense>
      </LazyLoad>
    </div>
  );
}
