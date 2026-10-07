import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import { Snowflake } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import { Noise } from "@/components/atoms/Noise";
import { PageHeader } from "@/components/organisms/PageHeader";
import {
  CONTRACTS,
  ENTRY_FEE,
  OPEN_PASSES,
  PARTNER_CARDS_ENTRY_FEE,
  SINGLE_ENTRIES,
} from "@/consts/pricing";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { buildPath } from "@/utils/buildPath";

export const metadata: Metadata = {
  title: "Cennik | Power Fit Białystok",
  description:
    "Sprawdź cennik karnetów Power Fit – siłowni na osiedlu Nowe Miasto w Białymstoku. Karnety na siłownię i zajęcia grupowe – kup online lub w klubie.",
  alternates: { canonical: buildPath(ROUTE_PATHS.pricing) },
};

const PricingPage = () => {
  return (
    <>
      <PageHeader
        title="Cennik klubu"
        crumbLabel="Cennik"
        bgImageSrc="page-header-1.jpg"
      />

      <section
        id="karty-partnerskie"
        className="bg-secondary relative flex w-full scroll-mt-24 justify-center overflow-hidden text-white"
      >
        <Noise />

        <div className="relative z-1 container py-7 sm:py-20">
          <ExportedImage
            className="pointer-events-none absolute top-8 right-0 hidden h-[100%] w-auto brightness-0 invert xl:block 2xl:right-20 2xl:h-[110%]"
            src="logo-mark-1.svg"
            alt=""
            width={504}
            height={200}
          />

          <div className="flex max-w-4xl flex-col items-start gap-8">
            <h2 className="text-white">Karty partnerskie</h2>

            <p>
              Honorujemy karty{" "}
              <b className="text-primary">
                Multisport, PZU, FitProfit, FitSport oraz Medicover Sport
              </b>{" "}
              - ale wyłącznie w połączeniu z naszą kartą członkowską. Dzięki
              temu zyskujesz <b>dostęp do pełnej oferty klubu</b>, a
              jednocześnie możesz korzystać ze swojego pakietu sportowego. Przy
              pierwszym wejściu obowiązuje jedynie opłata wpisowa w wysokości{" "}
              <b className="text-primary">{PARTNER_CARDS_ENTRY_FEE}</b>.
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="container py-7 sm:py-20">
          <h2 className="mb-2">Karnety</h2>
          <p className="mb-8">Karnety kupisz online lub w klubie.</p>
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {OPEN_PASSES.map((item) => (
              <li key={item.name}>
                <Card className="border-border/50 hover:bg-primary/5 hover:border-primary/50 h-full gap-4 shadow-none transition-all duration-500">
                  <CardHeader>
                    <h3 className="text-xl">{item.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="font-zalando text-secondary text-4xl font-semibold">
                      {item.price}
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      ≈ {Math.round(parseFloat(item.price) / item.months)} zł /
                      miesiąc
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground/70 mt-6 text-sm italic">
            *Do karnetów, z wyłączeniem karnetów tygodniowych, doliczana jest
            jednorazowa opłata {ENTRY_FEE} za kartę członkowską.
          </p>

          <Button className="mt-8 w-fit" asChild>
            <a
              href={ROUTE_PATHS.buyMembership}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kup karnet
            </a>
          </Button>
        </div>
      </section>

      <section className="flex w-full justify-center bg-gray-50">
        <div className="container py-7 sm:py-20">
          <h2 className="mb-2">Umowy</h2>
          <p className="mb-8">
            Umowy podpisujesz wyłącznie w klubie – nie można ich zawrzeć przez
            stronę.
          </p>
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {CONTRACTS.map((item) => (
              <li key={item.name}>
                <Card className="border-border/50 hover:bg-primary/5 hover:border-primary/50 h-full gap-4 bg-transparent shadow-none transition-all duration-500">
                  <CardHeader>
                    <h3 className="text-xl">{item.name}</h3>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <p className="font-zalando text-secondary text-4xl font-semibold">
                      {item.price}{" "}
                      <span className="text-muted-foreground font-poppins text-base font-normal">
                        {item.period}
                      </span>
                    </p>
                    {item.perk && (
                      <p className="bg-primary text-primary-foreground flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold">
                        <Snowflake className="size-4" />
                        {item.perk}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
          <div className="text-muted-foreground/70 mt-6 flex flex-col gap-2 text-sm italic">
            <p>
              *Do umów doliczana jest jednorazowa opłata {ENTRY_FEE} za kartę
              członkowską.
            </p>
            <p>
              *Umowy open: minimalny okres trwania umowy wynosi 3 miesiące, a
              okres wypowiedzenia 1 miesiąc.
            </p>
            <p>*Senior – osoba powyżej 65 roku życia.</p>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="container py-7 sm:py-20">
          <h2 className="mb-8">Wejścia jednorazowe</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SINGLE_ENTRIES.map((item) => (
              <li key={item.name}>
                <Card className="border-border/50 hover:bg-primary/5 hover:border-primary/50 h-full gap-4 shadow-none transition-all duration-500">
                  <CardHeader>
                    <h3 className="text-xl">{item.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="font-zalando text-secondary text-4xl font-semibold">
                      {item.price}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground/70 mt-6 text-sm italic">
            *Pierwsze wejście w przypadku kart partnerskich – zarejestrowanie
            wejścia.
          </p>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
