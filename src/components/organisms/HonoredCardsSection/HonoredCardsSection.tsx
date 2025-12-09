import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export const HonoredCardsSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container flex flex-col gap-8 py-7 sm:py-20">
        <h3 className="max-w-xl xl:ml-12 2xl:ml-20">
          Akceptujemy popularne karty sportowe -{" "}
          <br className="hidden sm:block" />
          jeszcze więcej możliwości dla Ciebie!
        </h3>

        <div className="relative flex flex-col gap-6 rounded-2xl bg-[#F1F1F1] p-7 pb-0 xl:w-4/6 xl:px-12 xl:py-10 2xl:px-20">
          <p className="xl:max-w-[636px]">
            Honorujemy karty{" "}
            <b>Multisport, PZU, FitProfit, FitSport oraz Medicover Sport</b> -
            ale wyłącznie w połączeniu z naszą kartą członkowską. Dzięki temu
            zyskujesz <b>dostęp do pełnej oferty klubu</b>, a jednocześnie
            możesz korzystać ze swojego pakietu sportowego. To najlepsze
            połączenie korzyści i elastyczności!
          </p>

          <Button className="w-fit">Kup karnet</Button>

          <div className="mt-12 xl:absolute xl:-right-32 xl:bottom-0 2xl:-right-36">
            <div className="relative z-10">
              <Image
                className="h-auto max-w-1/2 sm:max-w-none"
                src="/girl.png"
                alt=""
                width={250}
                height={300}
              />
              <Image
                className="absolute -top-10 left-8 z-[-1] max-w-5/6 xl:-right-[110%] xl:max-w-none"
                src="/logo-mark-1.svg"
                alt=""
                width={504}
                height={375}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
