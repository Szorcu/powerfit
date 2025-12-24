import { Button } from "@/components/atoms/Button";
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/Carousel";
import Link from "next/link";
import { TRAINERS } from "./TrainersCarouselSection.consts";
import { TrainerCard } from "@/components/molecules/TrainerCard";

export const TrainersCarouselSection = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="container py-7 sm:py-20">
        <h2 className="mb-16">Nasi trenerzy, nasz zespół</h2>

        <Carousel className="flex flex-col gap-8">
          <CarouselContent>
            {TRAINERS.map((item, index) => (
              <CarouselItem key={index} className="h-full lg:basis-1/4">
                <TrainerCard
                  name={item.name}
                  description={item.description}
                  classes={item.classes}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between">
            <Button asChild className="w-fit">
              <Link href="trenerzy">Wszyscy trenerzy</Link>
            </Button>

            <CarouselButtons />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
