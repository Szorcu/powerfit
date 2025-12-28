import { AboutPreviewSection } from "@/components/organisms/AboutPreviewSection";
import { ClassesFeaturesSection } from "@/components/organisms/ClassesFeaturesSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HonoredCardsSection } from "@/components/organisms/HonoredCardsSection";
import { OurOfferSection } from "@/components/organisms/OurOfferSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { TrainersCarouselSection } from "@/components/organisms/TrainersCarouselSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ClassesFeaturesSection />
      <HonoredCardsSection />
      <OurOfferSection />
      <PricingSection />
      <TrainersCarouselSection />
    </>
  );
};

export default HomePage;
