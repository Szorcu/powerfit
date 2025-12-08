import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export const HonoredCardsSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container max-w-7xl items-end py-7 sm:px-20 sm:py-28">
        <div className="flex flex-col gap-8">
          <h3 className="ml-20 max-w-xl">
            Akceptujemy popularne karty sportowe - <br /> jeszcze więcej
            możliwości dla Ciebie!
          </h3>

          <div className="relative mr-60 flex flex-col gap-4 rounded-2xl bg-[#F1F1F1] py-10 pr-40 pl-20 lg:gap-8">
            <p>
              Honorujemy karty{" "}
              <b>Multisport, PZU, FitProfit, FitSport oraz Medicover Sport</b> -
              ale wyłącznie w połączeniu z naszą kartą członkowską. Dzięki temu
              zyskujesz <b>dostęp do pełnej oferty klubu</b>, a jednocześnie
              możesz korzystać ze swojego pakietu sportowego. To najlepsze
              połączenie korzyści i elastyczności!
            </p>

            <Button className="w-fit">Kup karnet</Button>

            <div className="absolute -right-40 bottom-0">
              <div className="relative">
                <Image src="/girl.png" alt="" width={250} height={300} />
                <Image
                  className="absolute -top-10 -right-[110%] z-[-1] max-w-none"
                  src="/logo-mark-1.svg"
                  alt=""
                  width={504}
                  height={380}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
