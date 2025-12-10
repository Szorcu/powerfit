import { Button } from "@/components/atoms/Button";

export const AboutSection = () => {
  return (
    <section className="flex w-full justify-center bg-[#222222] text-white">
      <div className="container grid gap-20 py-7 sm:py-20 xl:grid-cols-[2fr_3fr] xl:gap-40">
        <div className="flex flex-col gap-8">
          <h2>O siłowni Power Fit</h2>

          <p className="text-sm leading-relaxed">
            Power Fit to nowo otwarta siłownia w Białymstoku, stworzona z myślą
            o osobach, które chcą trenować w{" "}
            <b>komfortowych i nowoczesnych warunkach</b>. Nasz obiekt ma aż trzy
            przestronne piętra oraz trzy różnorodne sale fitness, w których
            każdy znajdzie coś dla siebie. Oferujemy także dwa rollmasaże oraz
            solarium, dzięki czemu po treningu możesz zadbać o pełną regenerację
            i dobre samopoczucie.
            <br /> <br />
            Mimo że w obiekcie trwają drobne prace remontowe, funkcjonujemy w
            pełni i zapraszamy do korzystania z całej infrastruktury. Dbamy o
            porządek, atmosferę i jakość usług, by każdy czuł się u nas
            swobodnie. Dołącz do Power Fit i zacznij swoją najlepszą formę już
            dziś!
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
            <source src="about.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
