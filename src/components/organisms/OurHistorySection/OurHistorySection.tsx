import { Noise } from "@/components/atoms/Noise";
import Image from "next/image";

export const OurHistorySection = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="container py-16 lg:py-20">
        <p className="font-zalando max-w-6xl text-xl font-semibold lg:text-2xl">
          Naszą misją jest stworzenie miejsca, w którym każdy — niezależnie od
          wieku czy poziomu zaawansowania — może czuć się dobrze i rozwijać
          swoje możliwości.
        </p>
      </div>

      <div className="bg-secondary relative w-full lg:mt-8">
        <Noise />

        <div className="isolate z-1 grid justify-items-center lg:grid-cols-[1fr_1fr] lg:justify-items-normal xl:grid-cols-[3fr_2fr]">
          <div className="relative container -mt-8 aspect-video max-w-none lg:-mt-16 lg:aspect-auto lg:p-0">
            <Image
              src="our-history.jpg"
              alt=""
              width={100}
              height={100}
              className="h-full w-full rounded-2xl object-cover lg:rounded-tl-none lg:rounded-bl-none"
            />
          </div>

          <div className="container pt-8 pb-7 text-white sm:pb-0 lg:px-16 lg:py-12 xl:max-w-xl xl:px-24 xl:py-16">
            <h2 className="mb-8 lg:mb-8">Nasza historia</h2>

            <div className="flex flex-col gap-4">
              <p>
                Power Fit powstało z potrzeby stworzenia czegoś więcej niż tylko
                siłowni. Od samego początku chcieliśmy zbudować przestrzeń, w
                której trening jest naturalną częścią stylu życia, a nie
                przykrym obowiązkiem.
              </p>

              <p>
                Stawiamy na świadomy ruch, dobre nawyki i realne efekty — bez
                presji, porównań i zbędnych schematów. U nas liczy się
                konsekwencja, wsparcie i atmosfera, która motywuje do działania
                każdego dnia.
              </p>

              <p>
                Tworzymy miejsce, w którym spotykają się ludzie o różnych
                celach, ale z jednym wspólnym podejściem — chcą być lepsi niż
                wczoraj. Niezależnie od tego, czy dopiero zaczynasz swoją
                przygodę z treningiem, czy szukasz przestrzeni do dalszego
                rozwoju, Power Fit jest miejscem dla Ciebie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
