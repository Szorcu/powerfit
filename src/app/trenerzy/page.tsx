import { Metadata } from "next";
import { TrainerCard } from "@/components/molecules/TrainerCard";
import { PageHeader } from "@/components/organisms/PageHeader";
import { ROUTE_PATHS } from "@/consts/routePaths";
import { TRAINERS } from "@/consts/trainers";
import { buildPath } from "@/utils/buildPath";

export const metadata: Metadata = {
  title: "Trenerzy | Power Fit Białystok",
  description:
    "Poznaj trenerów Power Fit – siłowni na Nowym Mieście w Białymstoku. Indywidualne podejście, doświadczenie i realne wsparcie w treningu.",
  alternates: { canonical: buildPath(ROUTE_PATHS.trainers) },
};

const TrainersPage = () => {
  return (
    <>
      <PageHeader title="Nasi trenerzy" crumbLabel="Trenerzy" />
      <section className="flex w-full justify-center">
        <div className="container py-7 sm:py-20">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TRAINERS.map((trainer) => (
              <li key={trainer.name}>
                <TrainerCard
                  img={trainer.img}
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
