import { Metadata } from "next";
import { AboutIntroSection } from "@/components/organisms/AboutIntroSection/AboutIntroSection";
import { OurHistorySection } from "@/components/organisms/OurHistorySection";
import { PageHeader } from "@/components/organisms/PageHeader";
import { TrainersCarouselSection } from "@/components/organisms/TrainersCarouselSection";
import { WhyUsSection } from "@/components/organisms/WhyUsSection";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildPath } from "@/utils/buildPath";

export const metadata: Metadata = {
  title: "O nas | Power Fit Białystok",
  description:
    "Poznaj Power Fit – siłownię na Nowym Mieście w Białymstoku z ludzkim podejściem do treningu. Stawiamy na atmosferę, wsparcie i długofalowe efekty.",
  alternates: { canonical: buildPath(ROUTE_PATHS.aboutUs) },
};

const AboutUsPage = () => {
  return (
    <>
      <PageHeader
        title="Poznaj Power Fit"
        crumbLabel="O nas"
        bgImageSrc="page-header-2.jpg"
      />

      <AboutIntroSection />
      <OurHistorySection />
      <WhyUsSection />
      <TrainersCarouselSection />
    </>
  );
};

export default AboutUsPage;
