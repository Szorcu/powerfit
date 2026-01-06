import { Button } from "@/components/atoms/Button";
import { ROUTE_PATHS } from "@/consts/routePaths";

export const AboutIntroSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container grid gap-12 py-7 sm:py-20 xl:grid-cols-[1fr_1fr] xl:gap-40">
        <div>
          <p className="font-zalando text-2xl leading-snug font-semibold lg:text-3xl 2xl:text-4xl">
            W Power Fit wierzymy, że{" "}
            <span className="text-secondary">siła to nie tylko mięśnie</span> —
            to codzienna determinacja, pasja i wspólnota ludzi, którzy chcą być
            lepsi niż wczoraj.
          </p>

          <Button className="mt-6 w-fit" asChild>
            <a
              href={ROUTE_PATHS.pricing}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kup karnet
            </a>
          </Button>
        </div>

        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl object-cover"
          >
            <source src="about-intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
