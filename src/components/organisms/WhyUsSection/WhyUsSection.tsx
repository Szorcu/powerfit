import { Noise } from "@/components/atoms/Noise";
import { WHY_US_POINTS } from "./WhyUsSection.consts";

export const WhyUsSection = () => {
  return (
    <section className="bg-secondary relative flex w-full justify-center">
      <Noise />

      <div className="z-1 container py-7 sm:py-20">
        <h2 className="mb-8 text-white">Dlaczego my?</h2>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-6">
          {WHY_US_POINTS.map(({ title, Icon }, index) => (
            <li key={index}>
              <article className="bg-card text-card-foreground flex h-full flex-col items-center gap-4 rounded-xl p-9">
                <Icon />

                <h3 className="font-poppins max-w-[146px] text-center text-base text-balance whitespace-pre-line">
                  {title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
