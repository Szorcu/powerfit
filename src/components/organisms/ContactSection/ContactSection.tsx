import { ContactForm } from "@/components/molecules/ContactForm";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section
      id="kontakt"
      className="z-10 mb-16 flex w-full scroll-mt-24 justify-center text-white lg:mb-52"
    >
      <div className="container grid gap-16 lg:grid-cols-[3fr_2fr] 2xl:gap-52">
        <div className="flex flex-col gap-12 py-4 xl:gap-16">
          <h2>Zadaj nam pytanie</h2>
          <ContactForm />
        </div>

        <aside className="flex h-fit flex-col gap-6 rounded-lg border border-white/20 p-4 xl:gap-16 xl:p-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary">Lokalizacja</h3>
            <p>ul. Harcerska 7, 15-345 Białystok</p>
            <Image
              className="mt-2 w-full rounded-sm"
              src="/location.png"
              alt="Zdjęcie budynku Power Fit"
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-primary mb-1">Godziny otwarcia</h3>
            <p>pon-pt: 7:00-22:00</p>
            <p>sob-niedz: 8:00-20:00</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
