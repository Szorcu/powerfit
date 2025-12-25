import Image from "next/image";
import { TrainerCardProps } from "./TrainerCard.types";

export const TrainerCard = ({
  name,
  description,
  classes,
  img,
}: TrainerCardProps) => {
  return (
    <details className="group relative aspect-3/4 overflow-hidden rounded-lg">
      <summary className="list-none [&::-webkit-details-marker]:hidden">
        <Image src={img} alt={name} fill className="object-cover" />

        <div className="bg-secondary absolute inset-0 flex flex-col justify-between p-6 text-sm text-white opacity-0 transition-opacity duration-300 group-open:opacity-100 group-hover:opacity-100">
          <div>
            <h3 className="text-xl">{name}</h3>
            <p className="mt-2 leading-relaxed">{description}</p>
          </div>

          <footer>
            <p className="font-semibold">Zajęcia:</p>
            <p>{classes.join(", ")}</p>
          </footer>
        </div>
      </summary>
    </details>
  );
};
