import { ContactForm } from "@/components/molecules/ContactForm";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section className="mb-52 flex w-full justify-center text-white">
      <div className="container grid grid-cols-[3fr_2fr] gap-52">
        <div className="flex flex-col gap-16 py-4">
          <h2>Zadaj nam pytanie</h2>
          <ContactForm />
        </div>

        <aside className="flex flex-col gap-16 rounded-lg border border-white/20 p-12">
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
            <p>pon-pt: 6:00-24:00</p>
            <p>sob-niedz: 8:00-20:00</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
