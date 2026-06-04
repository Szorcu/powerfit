import { Metadata } from "next";
import { AboutPreviewSection } from "@/components/organisms/AboutPreviewSection";
import { ClassesFeaturesSection } from "@/components/organisms/ClassesFeaturesSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HonoredCardsSection } from "@/components/organisms/HonoredCardsSection";
import { OurOfferSection } from "@/components/organisms/OurOfferSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { TrainersCarouselSection } from "@/components/organisms/TrainersCarouselSection";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildPath } from "@/utils/buildPath";

export const metadata: Metadata = {
  title: "Power Fit | Siłownia i klub fitness Białystok",
  description:
    "Power Fit to nowoczesna siłownia i klub fitness na osiedlu Nowe Miasto w Białymstoku. Trenuj w dobrym klimacie, z trenerami, którzy stawiają na proces.",
  alternates: { canonical: buildPath(ROUTE_PATHS.home) },
};

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
