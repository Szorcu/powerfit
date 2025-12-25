import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import { PRICING_CARDS } from "./PricingSection.consts";

export const PricingSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container grid gap-8 py-7 sm:py-20 xl:grid-cols-[auto_2fr] xl:gap-12 2xl:gap-40">
        <div className="flex flex-col gap-8">
          <h2 className="max-w-80">Sprawdź nasze karnety</h2>

          <Button asChild className="w-fit">
            <a
              href="https://powerfit-bialystok.cms.efitness.com.pl/kup-karnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz cennik
            </a>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="grid gap-5 lg:grid-cols-2">
            {PRICING_CARDS.map((card, index) => (
              <li key={index}>
                <Card className="group border-border/50 hover:bg-primary/5 hover:border-primary/50 h-full gap-8 shadow-none transition-all duration-500">
                  <CardHeader>
                    <h3 className="text-xl">{card.title}</h3>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-8">
                    <p className="font-zalando group-hover:text-primary text-4xl font-semibold text-[#C3C3C3] transition-all duration-300">
                      {card.price}
                    </p>
                    <div>
                      <p>{card.text}</p>

                      {card.note && (
                        <p className="text-muted-foreground/70 mt-2 text-sm italic">
                          {card.note}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>

          <span className="text-muted-foreground/70 text-sm italic">
            *Przy wszystkich karnetach i umowach, z wyłączeniem karnetów
            tygodniowych, obowiązuje jednorazowa opłata 39 zł za kartę
            członkowską.
          </span>
        </div>
      </div>
    </section>
  );
};
