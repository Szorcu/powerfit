import { TrainerCard } from "@/components/molecules/TrainerCard";
import { PageHeader } from "@/components/organisms/PageHeader";
import { TRAINERS } from "@/consts/trainers";

const TrainersPage = () => {
  return (
    <>
      <PageHeader title="Trenerzy" crumbLabel="Trenerzy" />
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
