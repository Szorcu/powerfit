import { TrainerCard } from "@/components/molecules/TrainerCard";

export const TRAINERS = [
  {
    name: "Jan Kowalski",
    description: "Specjalista ds. fitness z 10-letnim doświadczeniem.",
    classes: ["Joga", "Pilates", "Trening siłowy"],
  },
  {
    name: "Anna Nowak",
    description: "Trenerka personalna i dietetyk.",
    classes: ["Trening personalny", "Kardio", "Zdrowe odżywianie"],
  },
  {
    name: "Piotr Wiśniewski",
    description: "Ekspert w dziedzinie treningu funkcjonalnego.",
    classes: ["CrossFit", "Trening funkcjonalny", "HIIT"],
  },
  {
    name: "Katarzyna Zielińska",
    description: "Instruktorka tańca i fitnessu.",
    classes: ["Zumba", "Taniec", "Stretching"],
  },
  {
    name: "Michał Kaczmarek",
    description: "Trener kulturystyki i fitnessu.",
    classes: ["Kulturystyka", "Trening siłowy", "Planowanie treningów"],
  },
  {
    name: "Ewa Szymańska",
    description: "Specjalistka od treningu kobiet w ciąży.",
    classes: ["Trening dla kobiet w ciąży", "Pilates", "Zdrowy kręgosłup"],
  },
];

const TrainersPage = () => {
  return (
    <>
      <div className="h-96 bg-stone-800" />
      <section className="flex w-full justify-center">
        <div className="container py-7 sm:py-20">
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {TRAINERS.map((trainer) => (
              <li key={trainer.name}>
                <TrainerCard
                  name={trainer.name}
                  description={trainer.description}
                  classes={trainer.classes}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TrainersPage;
