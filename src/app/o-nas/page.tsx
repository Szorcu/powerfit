import { AboutIntroSection } from "@/components/organisms/AboutIntroSection/AboutIntroSection";
import { OurHistorySection } from "@/components/organisms/OurHistorySection";
import { PageHeader } from "@/components/organisms/PageHeader";
import { TrainersCarouselSection } from "@/components/organisms/TrainersCarouselSection";
import { WhyUsSection } from "@/components/organisms/WhyUsSection";

const TrainersPage = () => {
  return (
    <>
      <PageHeader
        title="O firmie"
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

export default TrainersPage;
