import { Button } from "@/components/atoms/Button";

export const HeroSection = () => {
  return (
    <section className="relative h-[70svh] w-full overflow-hidden lg:h-[85svh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-[40%_90%] sm:object-bottom"
      >
        <source src="hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/3 left-1/2 z-10 container m-auto -translate-x-1/2 text-white">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 lg:ml-4 lg:max-w-2xl lg:items-end">
          <h1 className="text-center lg:text-right">
            Świętujemy <span className="text-primary">pierwsze urodziny</span>
            <br />
            klubu Power Fit!
          </h1>

          <Button className="w-fit" asChild>
            <a href="#urodziny">Zobacz promocje</a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,34,34,0)_0%,#222222_116.76%)]" />
    </section>
  );
};
