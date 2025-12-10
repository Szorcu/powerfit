import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import { Award, Calendar, Clock, Users } from "lucide-react";

const FEATURES = [
  {
    Icon: Calendar,
    title: "40+",
    subtitle: "zajęć tygodniowo",
    description: "Joga, crossfit, fitness, pilates i wiele więcej",
  },
  {
    Icon: Clock,
    title: "Codziennie",
    subtitle: "elastyczne godziny",
    description: "Każdy znajdzie czas, który mu odpowiada",
  },
  {
    Icon: Users,
    title: "Wygodnie",
    subtitle: "rezerwacja online",
    description: "Zarezerwuj swoje miejsce w kilka sekund",
  },
  {
    Icon: Award,
    title: "Profesjonalnie",
    subtitle: "certyfikowani trenerzy",
    description: "Profesjonalny nadzór na każdych zajęciach",
  },
];

export const ClassesFeaturesSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container flex flex-col gap-2 py-7 sm:py-20">
        <h2>Dlaczego nasze zajęcia?</h2>
        <p>
          Oferujemy różnorodne, wygodne i profesjonalnie prowadzone zajęcia
          dopasowane do Twoich potrzeb.
        </p>

        <div className="mt-8 flex flex-col items-center gap-8 xl:mt-12 xl:gap-12">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="group border-border/50 hover:bg-primary/5 hover:border-primary/50 relative border shadow-none transition-all duration-500"
              >
                <CardHeader>
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                    <feature.Icon className="text-primary h-7 w-7" />
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="font-zalando mb-1 text-xl font-semibold lg:text-2xl">
                    {feature.title}
                  </p>
                  <p className="text-secondary mb-2 text-sm font-semibold tracking-wide uppercase">
                    {feature.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button asChild>
            <a
              href="https://powerfit-bialystok.cms.efitness.com.pl/kalendarz-zajec"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapisz się na zajęcia
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
