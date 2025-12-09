import { AboutSection } from "@/components/organisms/AboutSection";
import { ClassesFeaturesSection } from "@/components/organisms/ClassesFeaturesSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HonoredCardsSection } from "@/components/organisms/HonoredCardsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClassesFeaturesSection />
      <HonoredCardsSection />
    </>
  );
};

export default HomePage;
