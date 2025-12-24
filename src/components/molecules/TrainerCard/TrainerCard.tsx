import { TrainerCardProps } from "./TrainerCard.types";

export const TrainerCard = ({
  name,
  description,
  classes,
}: TrainerCardProps) => {
  return (
    <article className="h-96 w-96 rounded-lg bg-black/20 p-8">
      <p>{name}</p>
      <p>{description}</p>

      <footer>
        <p className="font-semibold">Zajęcia:</p>
        <p>{classes.join(", ")}</p>
      </footer>
    </article>
  );
};
