import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";

const CARDS = [
  {
    title: "Karnety open",
    price: "od 89,00 zł",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu lobortis eget ullamcorper at. Tincidunt .",
  },
  {
    title: "Umowy open",
    price: "od 119,00 zł",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu lobortis eget ullamcorper at. Tincidunt .",
  },
  {
    title: "Wejście jednorazowe",
    price: "od 89,00 zł",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu lobortis eget ullamcorper at. Tincidunt .",
  },
  {
    title: "Pakiety",
    price: "od 119,00 zł",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu lobortis eget ullamcorper at. Tincidunt .",
  },
];

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
        <ul className="grid gap-5 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <li key={index}>
              <Card className="group border-border/50 hover:bg-primary/5 hover:border-primary/50 gap-8 shadow-none transition-all duration-500">
                <CardHeader>
                  <h3 className="text-xl">{card.title}</h3>
                </CardHeader>
                <CardContent className="flex flex-col gap-8">
                  <p className="font-zalando group-hover:text-primary text-4xl font-semibold text-[#C3C3C3] transition-all duration-300">
                    {card.price}
                  </p>
                  <p>{card.text}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
