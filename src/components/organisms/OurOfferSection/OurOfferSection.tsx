import { Noise } from "@/components/atoms/Noise";
import { OfferColumn } from "@/components/molecules/OfferColumn/OfferColumn";
import { CLASSES } from "@/consts/classes";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { SERVICES } from "@/consts/services";

export const OurOfferSection = () => {
  return (
    <section className="bg-secondary relative flex w-full justify-center text-white">
      <Noise />

      <div className="z-1 container py-12 sm:py-20 lg:max-w-7xl">
        <p className="text-primary font-zalando mb-12 text-2xl font-semibold lg:mb-20 lg:text-3xl">
          Nie odkładaj formy na jutro - wejdź do gry już dziś!
        </p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 2xl:gap-32">
          <OfferColumn
            title="Najpopularniejsze zajęcia"
            items={CLASSES.slice(0, 5)}
            redirectTo={`${ROUTE_PATHS.offer}#zajecia`}
          />
          <OfferColumn
            title="Dodatkowe usługi"
            items={SERVICES}
            redirectTo={`${ROUTE_PATHS.offer}#uslugi`}
          />
        </div>
      </div>
    </section>
  );
};
