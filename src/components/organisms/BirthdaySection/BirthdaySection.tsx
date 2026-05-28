import { Button } from "@/components/atoms/Button";
import { ROUTE_PATHS } from "@/consts/routePaths";
import {
  BIRTHDAY_ACTIVITIES,
  BIRTHDAY_CONFETTI_DOTS,
  BIRTHDAY_PROMOTIONS,
} from "./BirthdaySection.consts";

export const BirthdaySection = () => {
  return (
    <section
      id="urodziny"
      className="bg-primary/10 border-primary/20 relative flex w-full scroll-mt-24 justify-center overflow-hidden border-y"
    >
      {BIRTHDAY_CONFETTI_DOTS.map((dot) => (
        <span
          key={`${dot.top}-${dot.left}`}
          className={`pointer-events-none absolute rounded-sm opacity-30 ${dot.size} ${dot.color} ${dot.rotate}`}
          style={{ top: dot.top, left: dot.left }}
        />
      ))}

      <div className="relative z-10 container grid gap-12 py-7 sm:py-20 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-secondary-foreground font-zalando flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-bold shadow-md">
                1
              </span>
              <div>
                <p className="text-secondary text-xs font-bold tracking-widest uppercase">
                  rok działalności
                </p>
                <h2 className="leading-tight">Urodziny Klubu Power Fit!</h2>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            Świętuj razem z nami pierwszy rok działalności klubu Power Fit! Już{" "}
            <strong>31 maja</strong> przygotowaliśmy dla Was dzień pełen
            atrakcji, energii i sportowych emocji.
          </p>

          <div>
            <h3 className="text-secondary mb-4 text-base font-bold uppercase">
              Co na Was czeka?
            </h3>
            <ul className="flex flex-col gap-2">
              {BIRTHDAY_ACTIVITIES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white">
                    <Icon className="text-primary size-4" />
                  </span>
                  <span className="text-foreground text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-secondary mb-1 text-base font-bold uppercase">
              Urodzinowe promocje
            </h3>
            <p>
              Obowiązują od <strong>31 maja do 3 czerwca</strong>
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {BIRTHDAY_PROMOTIONS.map((promo) => (
              <li
                key={promo.highlight + promo.text}
                className="border-primary/20 bg-primary/5 rounded-xl border px-4 py-3 text-sm"
              >
                <span>
                  <strong>{promo.highlight}</strong> {promo.text}
                </span>
              </li>
            ))}
          </ul>

          <Button asChild className="w-fit">
            <a
              href={ROUTE_PATHS.pricing}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kup karnet
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
