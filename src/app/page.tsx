import { AboutSection } from "@/components/organisms/AboutSection";
import { ClassesFeaturesSection } from "@/components/organisms/ClassesFeaturesSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HonoredCardsSection } from "@/components/organisms/HonoredCardsSection";
import { PricingSection } from "@/components/organisms/PricingSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClassesFeaturesSection />
      <HonoredCardsSection />
      <PricingSection />
    </>
  );
};

export default HomePage;
