import { TrainerCard } from "@/components/molecules/TrainerCard";
import { TRAINERS } from "@/consts/trainers";

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
