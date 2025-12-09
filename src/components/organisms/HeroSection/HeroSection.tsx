import { Button } from "@/components/atoms/Button";

export const HeroSection = () => {
  return (
    <section className="relative h-[70svh] w-full overflow-hidden bg-stone-800 lg:h-[85svh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-[40%_90%] sm:object-bottom"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/3 left-1/2 z-10 container m-auto -translate-x-1/2 text-white">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 lg:ml-4 lg:max-w-2xl lg:items-end">
          <h1 className="text-center lg:text-right">
            Kup teraz <br /> swój pierwszy karnet{" "}
            <span className="text-primary">za 89 zł</span>
          </h1>

          <Button className="w-fit" asChild>
            <a
              href="https://powerfit-bialystok.cms.efitness.com.pl/kup-karnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kup karnet
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,34,34,0)_0%,#222222_116.76%)]" />
    </section>
  );
};
