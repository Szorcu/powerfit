import { Noise } from "@/components/atoms/Noise";
import { OfferColumn } from "@/components/molecules/OfferColumn/OfferColumn";

export const OurOfferSection = () => {
  return (
    <section className="bg-secondary relative flex w-full justify-center text-white">
      <Noise />

      <div className="z-1 container py-12 sm:py-20">
        <h2 className="text-primary mb-12 lg:mb-20">
          Nie odkładaj formy na jutro - wejdź do gry już dziś!
        </h2>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-32">
          <OfferColumn title="Najpopularniejsze zajęcia" />
          <OfferColumn title="Dodatkowe usługi" />
        </div>
      </div>
    </section>
  );
};
