import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { FeaturedLitter } from "@/components/sections/FeaturedLitter";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <FeaturedLitter />
        <TrustSignals />
      </main>
      <Footer />
    </>
  );
}
