import { Button } from "@/components/atoms/Button";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex w-full justify-center bg-[#222222] text-white"
    >
      <div className="container grid gap-20 py-20 xl:grid-cols-[2fr_3fr] xl:gap-40">
        <div className="flex flex-col gap-8">
          <h2 className="">O siłowni PowerFit</h2>

          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Eget at odio amet ipsum
            ultrices sollicitudin eget. Turpis consectetur metus diam quis eget
            scelerisque commodo bibendum. Amet ultrices cursus amet tempor mi
            nunc imperdiet.
            <br /> <br />
            Duis tempus ipsum cursus et natoque gravida adipiscing dolor. Sit et
            sed venenatis nec. Facilisis interdum nunc lectus commodo urna leo
            malesuada. Ut eget dignissim nisi diam lectus vivamus.
            <br /> <br />
            Risus vitae nibh imperdiet bibendum elementum egestas. Faucibus
            libero eleifend sagittis ut nunc tortor.
          </p>

          <Button className="w-fit">Czytaj więcej</Button>
        </div>

        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl object-cover"
          >
            <source src="/about.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
